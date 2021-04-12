<?php

namespace App\Http\Controllers;

use App\Http\Requests\NewsletterSubscriptions\DestroyNewsletterSubscriptionRequest;
use App\Http\Requests\NewsletterSubscriptions\StoreNewsletterSubscriptionRequest;
use App\Models\NewsletterSubscription;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class NewsletterSubscriptionController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param StoreNewsletterSubscriptionRequest $request
     * @return JsonResponse
     */
    public function store(StoreNewsletterSubscriptionRequest $request)
    {
        NewsletterSubscription::create($request->validated());

        return response()->json([
            'message' => 'subscribing was successful'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param DestroyNewsletterSubscriptionRequest $request
     * @return JsonResponse
     */
    public function destroy(DestroyNewsletterSubscriptionRequest $request)
    {
        NewsletterSubscription::where('email', $request->validated()['email'])->delete();

        return response()->json([
            'message' => 'unsubscribing was successful'
        ]);
    }
}
