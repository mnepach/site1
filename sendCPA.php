<?php

spl_autoload_register('autoload');

function autoload($name)
{
    include_once __DIR__ . '/' . $name . '.php';
}

set_time_limit(0);

$config = include_once __DIR__ . "/SRconfig.php";

header("Content-Type: application/json; charset=utf-8");

if (isset($_POST['name']) && isset($_POST['phone'])) {

    $srApi = new SRApi($config['company'], $config['token'], SRApi::API_CPA_SCOPE);

    $utmSource   = $_POST['utm_source']   ?? '';
    $utmCampaign = $_POST['utm_campaign'] ?? '';
    $utmMedium   = $_POST['utm_medium']   ?? '';
    $utmTerm     = $_POST['utm_term']     ?? '';
    $utmContent  = $_POST['utm_content']  ?? '';

    // Разбираем корзину из JSON
    $cartItems = [];
    if (!empty($_POST['cart'])) {
        $decoded = json_decode($_POST['cart'], true);
        if (is_array($decoded)) {
            $cartItems = $decoded;
        }
    }

    // Считаем итоговое количество и сумму с учётом акции (каждый 4-й бесплатно)
    $totalCount = 0;
    $totalPrice = 0.0;
    foreach ($cartItems as $item) {
        $qty   = (int)($item['quantity'] ?? 0);
        $price = (float)($item['price']  ?? 0);
        $paid  = $qty - (int)floor($qty / 4);
        $totalCount += $qty;
        $totalPrice += $paid * $price;
    }

    // Если корзина пуста — берём старый способ (quantity из POST)
    if (empty($cartItems)) {
        $totalCount = (int)($_POST['quantity'] ?? 1);
    }

    // GraphQL запрос в SalesRender
    $query = "mutation (\$input: AddLeadInput!) {leadMutation {addLead (input: \$input) {id}}}";

    $vars = [
        'input' => [
            'offerId' => $config['offerId'],
            'data' => [
                $config['phoneField'] => $_POST['phone'],
                $config['nameField']  => [
                    'firstName' => $_POST['name'],
                    'lastName'  => ''
                ]
            ],
            'source' => [
                'refererUri'   => $_SERVER['HTTP_REFERER'] ?? '',
                'ip'           => $_SERVER['REMOTE_ADDR']  ?? '',
                'utm_source'   => $utmSource,
                'utm_campaign' => $utmCampaign,
                'utm_medium'   => $utmMedium,
                'utm_term'     => $utmTerm,
                'utm_content'  => $utmContent
            ]
        ]
    ];

    if (!empty($config['itemId'])) {
        $vars['input']['cart']['items'][] = [
            'itemId'    => (int)$config['itemId'],
            'quantity'  => $totalCount,
            'variation' => 1,
            'price'     => (int)round($totalPrice * 100)
        ];
    }

    $result = $srApi->sendRequest($query, $vars);

    FileLogger::recordsLogs("responseLog.txt", "Request: "  . $srApi->jsonEncode($vars));
    FileLogger::recordsLogs("responseLog.txt", "Response: " . $result);

    // ---- Формируем сообщение для Telegram ----
    $name  = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);

    $token   = "8184422449:AAESGAsPHbu2TwaSYhRIFxbM9RJHLkavCVA";
    $chat_id = "-1002622903145";

    // Строки по каждой позиции
    $itemLines = '';
    if (!empty($cartItems)) {
        foreach ($cartItems as $item) {
            $itemName  = htmlspecialchars($item['name']     ?? 'Саженец');
            $qty       = (int)($item['quantity'] ?? 0);
            $price     = (float)($item['price']  ?? 0);
            $paid      = $qty - (int)floor($qty / 4);
            $freeQty   = (int)floor($qty / 4);
            $lineTotal = $paid * $price;

            $freeNote  = $freeQty > 0 ? " (🎁 {$freeQty} бесплатно)" : '';
            $itemLines .= "  • {$itemName}: {$qty} шт{$freeNote} — " . number_format($lineTotal, 2, '.', '') . " BYN%0A";
        }
    } else {
        $itemLines = "  • Саженцы смородины: {$totalCount} шт%0A";
    }

    $totalFormatted = number_format($totalPrice, 2, '.', '') . ' BYN';

    $txt  = "🌱 <b>Новый заказ</b>%0A%0A";
    $txt .= "<b>Имя:</b> {$name}%0A";
    $txt .= "<b>Телефон:</b> {$phone}%0A%0A";
    $txt .= "<b>Состав заказа:</b>%0A";
    $txt .= $itemLines;
    $txt .= "%0A<b>Итого:</b> {$totalFormatted}";

    @fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

    echo json_encode(['success' => true]);
    exit();

} else {
    echo json_encode(['success' => false, 'error' => 'Missing required fields']);
    exit();
}