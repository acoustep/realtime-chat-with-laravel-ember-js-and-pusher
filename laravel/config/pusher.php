<?php

return [

	/*
	|--------------------------------------------------------------------------
	| Default Connection Name
	|--------------------------------------------------------------------------
	|
	| Here you may specify which of the connections below you wish to use as
	| your default connection for all work. Of course, you may use many
	| connections at once using the manager class.
	|
	*/

	'default' => 'main',

	/*
    |--------------------------------------------------------------------------
    | Pusher Connections
    |--------------------------------------------------------------------------
    |
    | Here are each of the connections setup for your application. Example
    | configuration has been included, but you may add as many connections as
    | you would like.
    |
    */

	'connections' => [

		'main' => [
			'auth_key' => env('PUSHER_AUTH_KEY', ''),
			'secret' => env('PUSHER_SECRET', ''),
			'app_id' => env('PUSHER_APP_ID', ''),
			'options' => [],
			'host' => null,
			'port' => null,
			'timeout' => null
		],

		'alternative' => [
			'auth_key' => 'your-auth-key',
			'secret' => 'your-secret',
			'app_id' => 'your-app-id',
			'options' => [],
			'host' => null,
			'port' => null,
			'timeout' => null
		],

	]

];
