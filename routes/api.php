<?php

use Illuminate\Support\Facades\Route;
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

# Guest
Route::resource('categories', CategoryController::class)->only(['index', 'store']);

//Route::resource('blogs', BlogController::class)->except(['create', 'edit']);
# region because put didn't work
Route::get('blogs', [BlogController::class, 'index']);
Route::post('blogs', [BlogController::class, 'store']);
Route::get('blogs/{blog}', [BlogController::class, 'show']);
Route::post('blogs/{blog}', [BlogController::class, 'update']);
Route::delete('blogs/{blog}', [BlogController::class, 'destroy']);
#endregion
Route::get('users/{user}/blogs', [BlogController::class, 'byUser']);

Route::resource('blogs/{blog}/comments', CommentController::class)->only(['store']);

Route::post('newsletter-subscription/subscribe', [NewsletterSubscriptionController::class, 'store'])->name('newsletter-subscribe');
Route::post('newsletter-subscription/unsubscribe', [NewsletterSubscriptionController::class, 'destroy'])->name('newsletter-unsubscribe');

# Auth Middleware
Route::middleware(['auth'])->group(function () {

    Route::post('subscription/subscribe', [SubscriptionController::class, 'subscribe'])->name('subscription-subscribe');
    Route::post('subscription/unsubscribe', [SubscriptionController::class, 'unsubscribe'])->name('subscription-unsubscribe');
});


require __DIR__ . '/auth.php';
