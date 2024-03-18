<?php
    $url = "https://yourdomain.com/yourpage.html"; // URL вашої сторінки, яку ви перевіряєте
    $headers = get_headers($url);

    if ($headers && strpos($headers[0], '200')) {
        echo json_encode(array('status' => 'success'));
    } else {
        echo json_encode(array('status' => 'error'));
    }
?>