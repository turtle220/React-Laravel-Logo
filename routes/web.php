<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::get('/', function () {
	return view('welcome');
});
Route::get('/wizard/enterLogoName', function () {
	return view('welcome');
});

Route::get('/wizard/enterBusinessName', function () {
	return view('welcome');
});

Route::get('/wizard/enterSlogan', function () {
	return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::resource('tasks', 'TaskController');
