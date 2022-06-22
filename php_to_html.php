<?php

$target_dir = './dist/';

$iterator = new RecursiveDirectoryIterator($target_dir);
$iterator = new RecursiveIteratorIterator($iterator);

$list = array();
foreach ($iterator as $fileinfo) {
    if (!$fileinfo->isFile()) {
        continue;
    }

    $file = $fileinfo->getPathname();
    $info = new SplFileInfo($file);
    if($info->getExtension() == 'php'){
        convertHtml($file);
        // unlink($file);
    }
}


function convertHtml($target){
    $contents = '';

    ob_start();
    include($target);
    $contents = ob_get_contents();
    ob_end_clean();

    file_put_contents(
        preg_replace('/\A(.+)\.(php?|html?)\z/', '$1.html', $target),
        preg_replace('/\A\n/', '', $contents)
    );
}

