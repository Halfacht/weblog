<?php

namespace App\Http\Controllers;

use App\Models\Subscription;
use Carbon\Carbon;
use Illuminate\Http\Request;

class SubscriptionController extends Controller
{
    /**
     * Subscribe to premium content
     */
    public function subscribe()
    {
        $subscription = auth()->user()->subcription;
        $user_id = auth()->user()->id;

        if (!$subscription) {
            Subscription::create([
                'user_id' => $user_id,
                'last_payment' => Carbon::now(),
                'end_date' => null,
            ]);
        } else {
            Subscription::where('user_id', $user_id)->update([
                'last_payment' => $subscription->last_payment->addMonth(1), auth()->user()->id,
                'end_date' => null,
            ]);
        }

        return redirect()->back();
    }

    /**
     * Unsubscribe from premium content
     */
    public function unsubscribe()
    {
        $subscription = auth()->user()->subscription;

        $subscription->end_date = $subscription->last_payment->addMonth(1);

        $subscription->save();

        return redirect()->back();
    }
}
