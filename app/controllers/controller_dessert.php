<?php
    namespace app\controllers;

    use app\core\Controller;
    use app\models\Model_Building_Steps;
    use app\models\Model_Main;
    use app\models\Model_Form;
    use app\core\View;

    include "app/models/model_main.php";
    include "app/models/model_form.php";
    include "app/models/model_building_steps.php";

    class Controller_Dessert extends Controller
    {

        function __construct() {
            $this->query = json_decode(file_get_contents('php://input'), true);
        }

        function action_index() {
            $data = Model_Main::get_data(LANG);	
            $data['footer']	= Model_Main::get_footer(LANG);

            if (PROJECT_ID !== ''):
                $data['building_steps'] = Model_Building_Steps::get_steps(LANG);
            endif;

            View::generate('dessert.twig', $data);
        }

        function action_form() {
            $form_body = [];
            
            foreach ($this->query as $input) {
                $form_body['form'][$input['name']] = $input['data'];
            }

            return Model_Form::send_form(LANG, $form_body, 'almalyformdessert');
        }
        
    }
?>