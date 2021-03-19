<?php

namespace App\Http\Controllers;

use App\Http\Requests\Blogs\StoreBlogRequest;
use App\Http\Requests\Blogs\UpdateBlogRequest;
use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    /**
     * Returns a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $blogs = Blog::all();
			
        return response()->json($blogs);
    }

	/**
	 * Returns a single resource
	 * 
	 * @return \Illuminate\Http\Response
	 */
	public function show(Blog $blog)
	{
		return response()->json($blog);
	}


    /**
     * Store a newly created resource in storage.
     *
     * @param  StoreBlogRequest  $request
     * @return RedirectResponse
     */
    public function store(StoreBlogRequest $request)
    {
        $blog = Blog::create($request->validated());

        return response()->json(['message' => 'Blog stored succesfully', 'blog' => $blog]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  UpdateBlogRequest  $request
     * @param  \App\Models\Blog  $blog
     * @return RedirectResponse
     */
    public function update(UpdateBlogRequest $request, Blog $blog)
    {
        $blog = $blog->update($request->validated());

        return resopnse()->json(['message' => 'Blog is succesfully updated', 'blog' => $blog]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Blog  $blog
     * @return RedirectResponse
     */
    public function destroy(Blog $blog)
    {
        $blog->delete();

        return response()->json(['message' => 'Blog is succesfully deleted']);
    }
}
