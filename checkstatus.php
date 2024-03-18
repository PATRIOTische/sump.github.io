<?php
    $url = "https://patriotische.github.io/sump.github.io/index.html";  
    $headers = get_headers($url);

    if ($headers && strpos($headers[0], '200')) {
        echo json_encode(array('status' => 'success'));
    } else {
        echo json_encode(array('status' => 'error'));
    }
?>