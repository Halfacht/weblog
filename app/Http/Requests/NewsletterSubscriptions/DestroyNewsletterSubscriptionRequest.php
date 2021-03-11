<?php

namespace App\Http\Requests\NewsletterSubscriptions;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class DestroyNewsletterSubscriptionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email' => ['email', Rule::exists('newsletter_subscriptions')],
        ];
    }
}
