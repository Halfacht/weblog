<?php

namespace App\Http\Controllers;

use App\Http\Requests\Comments\StoreCommentRequest;
use App\Models\Comment;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param StoreCommentRequest $request
     * @return JsonResponse
     */
    public function store(StoreCommentRequest $request)
    {
        $comment = Comment::create($request->validated());
        $comment->load(['blog.comments']);

        return response()->json([
            'message' => 'Comment created succesfully',
            'comment' => $comment,
            'blog' => $comment->blog,
        ]);
    }
}
