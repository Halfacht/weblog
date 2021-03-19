<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\NewsletterSubscriptionController;
use App\Http\Controllers\SubscriptionController;

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

Route::get('/skills', function () {
	return ['Laravel', 'Vue', 'PHP', 'JavaScript'];
});

Route::resource('blogs', BlogController::class)->except(['create', 'update']); //->middleware(['auth']);

Route::resource('blogs/{blog}/comments', CommentController::class)->only(['store']);

Route::resource('categories', CategoryController::class)->only(['create', 'store'])->middleware(['auth']);

Route::get('newsletter-subscription', [NewsletterSubscriptionController::class, 'index'])->name('newsletter-subscription-page');
Route::post('newsletter-subscription/subscribe', [NewsletterSubscriptionController::class, 'store'])->name('newsletter-subscribe');
Route::post('newsletter-subscription/unsubscribe', [NewsletterSubscriptionController::class, 'destroy'])->name('newsletter-unsubscribe');

Route::get('subscription', [SubscriptionController::class, 'index'])->name('subscription-page')->middleware(['auth']);
Route::post('subscription/subscribe', [SubscriptionController::class, 'store'])->name('subscription-subscribe')->middleware((['auth']));
Route::post('subscription/unsubscribe', [SubscriptionController::class, 'destroy'])->name('subscription-unsubscribe')->middleware(['auth']);

require __DIR__ . '/auth.php';