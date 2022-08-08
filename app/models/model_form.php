<?php
    namespace app\models;

    use app\core\Model;

    class Model_Form extends Model
    {
        function send_form ($lang = 'ru', $form_body, $form_name = FORM_NAME) {	
            return Model::fetch('https://cms.abpx.kz/api/forms/submit/' . $form_name, $form_body);
        }
    }
?>