<?php
/**
 * My test controller class.
 */
class StripeinStripeinController {
  /**
   * This method that will be called for the 'stripein/subscription' path.
   *
   * @path => 'stripein/subscription',
   * @access arguments => array('access arguments'),
   * @title => 'subscription',
   */
  function myAction() {
    $query = new EntityFieldQuery();
    $input = @file_get_contents('php://input');
    $event_json = json_decode($input);
    var_dump($event_json);
    http_response_code(200);
    die();
  }

}