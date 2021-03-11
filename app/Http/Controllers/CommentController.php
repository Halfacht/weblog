<?php

namespace App\Http\Controllers;

use App\Http\Requests\Comments\StoreCommentRequest;
use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  StoreCommentRequest  $request
     * @return RedirectResponse
     */
    public function store(StoreCommentRequest $request)
    {
        Comment::create($request->validated());

        return redirect()->back();
    }
}
