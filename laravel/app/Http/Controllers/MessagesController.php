<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Message;

use Illuminate\Http\Request;
use Input;
use Response;
use GuzzleHttp\Client;
use Vinkla\Pusher\PusherManager;


class MessagesController extends Controller {

  protected $message;
  protected $pusher;

  public function __construct(Message $message, PusherManager $pusher)
  {
    $this->message = $message;
    $this->pusher = $pusher;
  
  }

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
    $messages = $this->message->orderBy('id', 'desc')->take(5)->get();

    return Response::json(['messages' => $messages->toArray()]);
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
    $message = $this->message->create(Input::get('message'));

    $this->pusher->trigger('messages', 'new-message', ['message' => $message->toArray()]);

    return Response::json(['message' => $message->toArray()]);
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
    $message = $this->message->findOrFail($id);

    return Response::json(['message' => $message->toArray()]);
	}
}
