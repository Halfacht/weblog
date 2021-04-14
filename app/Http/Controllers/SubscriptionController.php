<?php

namespace App\Http\Controllers;

use App\Models\Subscription;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class SubscriptionController extends Controller
{
    /**
     * Subscribe to premium content
     *
     * @return JsonResponse
     */
    public function subscribe(): JsonResponse
    {
        $user = auth()->user();

        if (!$user->subscription) {
            $user->subscription()->create([
                'last_payment' => Carbon::now(),
                'end_date' => null,
            ]);
        } else {
            $user->subscription()->update([
                'last_payment' => Carbon::parse($user->subscription->last_payment)->addMonth()->toDate(),
                'end_date' => null,
            ]);
        }

        $user->load('subscription');
        $user->setAppends(['subscribed', 'canSeePremiumContent']);

        return response()->json([
            'user' => $user,
            'message' => 'subscribing was successful',
        ]);
    }

    /**
     * Unsubscribe from premium content
     *
     * @return JsonResponse
     */
    public function unsubscribe(): JsonResponse
    {
        $subscription = auth()->user()->subscription;

        $subscription->end_date = Carbon::parse($subscription->last_payment)->addMonth()->toDate();

        $subscription->save();

        $user = auth()->user()->load('subscription');
        $user->setAppends(['subscribed', 'canSeePremiumContent']);

        return response()->json([
            'user' => $user,
            'message' => 'unsubscribing was successful',
        ]);
    }
}
