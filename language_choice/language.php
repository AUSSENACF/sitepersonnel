<?php 
    function language_Choice($language){
        if($language == "fr"){
            return require_once("./language_choice/language_fr.php");
        }else{
            return require_once("./language_choice/language_en.php");
        };
    };
?>