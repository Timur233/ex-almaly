<?php
    namespace app\controllers;

    use app\models\Model_Filter;
    use app\core\Controller;

    class Controller_Filter extends Controller
    {

        function __construct()
        {
            $this->query = json_decode(file_get_contents('php://input'), true);
        }
        
        function action_index()
        {          
            $params = array(
                'filter' => [],
            );

            if (isset($this->query['id'])) { $params['filter']['_id'] = $this->query['id']; }

            $data = Model_Filter::filter_by_params(LANG, $params);
            $data['params'] = $params;

            print_r(
                json_encode(
                    $data
                )
            );

            exit;
        }
        
    }
?>