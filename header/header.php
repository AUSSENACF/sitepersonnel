<?php 
require_once("../sitePersonnel/language_choice/language.php");
$browserLanguage = ($_SERVER['HTTP_ACCEPT_LANGUAGE']) ? substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2) : "en";
$language_import = language_Choice($browserLanguage);
$siteTitle = SITE_TITLE;
$siteDescription = SITE_DESCRIPTION; 
$header_main =  "
                        <title> $siteTitle </title>
                        <meta charset='UTF-8'/>
                        <meta name='description' content= $siteDescription />
                "
    
?>
