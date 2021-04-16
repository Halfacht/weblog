<?php

namespace App\Http\Requests\Blogs;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreBlogRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->user()?->is_writer;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => ['required', 'string'],
            'content' => ['required'],
            'image' => ['nullable', 'image'],
            'user_id' => [Rule::exists('users', 'id')],
            'is_premium' => ['nullable', 'boolean'],
            'categories' => ['required', 'array', Rule::exists('categories', 'id')],
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'is_premium' => filter_var($this->is_premium, FILTER_VALIDATE_BOOLEAN),
            'categories' => explode(',', $this->categories),
        ]);
    }
}
