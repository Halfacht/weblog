<?php

namespace App\Http\Controllers;

use App\Http\Requests\Blogs\StoreBlogRequest;
use App\Http\Requests\Blogs\UpdateBlogRequest;
use App\Models\Blog;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class BlogController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except(['index', 'show']);
    }

    /**
     * Returns a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        $blogs = Blog::latest()->get();

        return response()->json($blogs);
    }

    /**
     * Returns a single resource
     *
     * @param Blog $blog
     * @return JsonResponse
     */
    public function show(Blog $blog): JsonResponse
    {
        $blog->load('comments');

        return response()->json($blog);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param StoreBlogRequest $request
     * @return JsonResponse
     */
    public function store(StoreBlogRequest $request): JsonResponse
    {
        if ($request['image']) {
            $path = Storage::putFile('images', $request->file('image'));
//            $path = $request->file('image')->store('images');
            $request['image'] = $path;
        }

        $blog = Auth::user()
            ->blogs()
            ->create($request->validated());

        $blog->categories()->attach($request['categories']);

        $blog->refresh();

        return response()->json([
            'message' => 'Blog stored succesfully',
            'blog' => $blog
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateBlogRequest $request
     * @param Blog $blog
     * @return JsonResponse
     */
    public function update(UpdateBlogRequest $request, Blog $blog): JsonResponse
    {
        $blog->update($request->validated());

        $blog->refresh();

        return response()->json(['message' => 'Blog is successfully updated', 'blog' => $blog]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Blog $blog
     * @return JsonResponse
     * @throws \Exception
     */
    public function destroy(Blog $blog): JsonResponse
    {
        $blog->delete();

        return response()->json(['message' => 'Blog is succesfully deleted']);
    }

    /**
     * Returns a listing of the resource written by the user.
     *
     * @param User $user
     * @return JsonResponse
     */
    public function byUser(User $user): JsonResponse
    {
        $blogs = $user->blogs()->with(['user', 'comments'])->latest()->get();

        return response()->json($blogs);
    }
}
