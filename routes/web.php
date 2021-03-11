<?php

use App\Http\Controllers\CategoryController;
use Illuminate\Support\Facades\Route;

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

Route::get('/', 'PageController@index')->name('index');

Route::get('/dashboard', 'PageController@dashboard')->middleware(['auth'])->name('dashboard');

Route::resource('blogs', BlogController::class)->except(['show'])->middleware(['auth']);

Route::resource('blogs/{blog}/comments', CommentController::class)->only(['store']);

Route::resource('categories', CategoryController::class)->only(['create', 'store'])->middleware(['auth']);

Route::get('newsletter-subscription', 'NewsletterSubscriptionController@index')->name('newsletter-subscription-page');
Route::post('newsletter-subscription/subscribe', 'NewsletterSubscriptionController@store')->name('newsletter-subscribe');
Route::post('newsletter-subscription/unsubscribe', 'NewsletterSubscriptionController@destroy')->name('newsletter-unsubscribe');

Route::get('subscription', 'SubscriptionController@index')->name('subscription-page')->middleware(['auth']);
Route::post('subscription/subscribe', 'SubscriptionController@store')->name('subscription-subscribe')->middleware((['auth']));
Route::post('subscription/unsubscribe', 'SubscriptionController@destroy')->name('subscription-unsubscribe')->middleware(['auth']);

require __DIR__ . '/auth.php';
