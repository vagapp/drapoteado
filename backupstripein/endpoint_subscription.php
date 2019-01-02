<?
// define static var
define('DRUPAL_ROOT', '/home/drapp/public_html/backend');
//require_once DRUPAL_ROOT . '/vendor/autoload.php';
require_once DRUPAL_ROOT . '/includes/bootstrap.inc';
drupal_bootstrap(DRUPAL_BOOTSTRAP_FULL);



$input = @file_get_contents('php://input');
$event_json = json_decode($input);

//$nid = db_select('node', 'n')->condition('n.type', 'suscripcion')->condition('field_stripe_sus_id', $event_json->data->object->id)->fields('n', array('nid'))->execute()->fetchField();

$query = new EntityFieldQuery();
$query->entityCondition('entity_type', 'node')
->entityCondition('bundle', 'suscripcion')
->fieldCondition('field_stripe_sus_id', 'value', $event_json->data->object->id, '=')
->addMetaData('account', user_load(1));
$result = $query->execute();
if (isset($result['node'])) {
$nids = array_shift(array_keys($result['node']));
$node = node_load($nids);
switch ($event_json->type) {
	case 'customer.subscription.created':
	case 'customer.subscription.deleted':
	case 'customer.subscription.updated':
		switch ($event_json->data->object->status){
			case 'past_due':
			case 'canceled':
			case 'unpaid':
				$node->field_active["und"][0]["value"] = 0;
				node_save($node);
				break;
			case 'trialing':
			case 'active':
				$node->field_active["und"][0]["value"] = 1;
				node_save($node);
				break;
		}
	break;
}
}

http_response_code(200); // PHP 5.4 or greater

