<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// controller
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', [UserController::class, 'login']);
Route::middleware('auth:sanctum')->group(function(){
    Route::group(['prefix' => 'user'], function () {
        Route::get('/',[UserController::class, 'get']);     
        Route::get('list',[UserController::class, 'list']);     
        Route::post('store',[UserController::class, 'store']);     
    });
});