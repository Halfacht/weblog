<?php

namespace App\Http\Controllers;

use App\Http\Requests\NewsletterSubscriptions\DestroyNewsletterSubscriptionRequest;
use App\Http\Requests\NewsletterSubscriptions\StoreNewsletterSubscriptionRequest;
use App\Models\NewsletterSubscription;
use Illuminate\Http\Request;

class NewsletterSubscriptionController extends Controller
{
    /**
     * Display a Newsletter Subscription Page
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('newsletter-subscription.index');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  NewsletterSubscriptionRequest  $request
     * @return RedirectResponse
     */
    public function store(StoreNewsletterSubscriptionRequest $request)
    {
        NewsletterSubscription::create($request->validated());

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  DestroyNewsletterSubscriptionRequest  $request
     * @return RedirectReponse
     */
    public function destroy(DestroyNewsletterSubscriptionRequest $request)
    {
        NewsletterSubscription::where('email', $request->validated()['email'])->delete();

        return redirect()->back();
    }
}
