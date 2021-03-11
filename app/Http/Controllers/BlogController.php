<?php

namespace App\Http\Controllers;

use App\Http\Requests\Blogs\StoreBlogRequest;
use App\Http\Requests\Blogs\UpdateBlogRequest;
use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return view
     */
    public function create()
    {
        $blog = new Blog();

        return view('blogs.create', ['blog' => $blog]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  StoreBlogRequest  $request
     * @return RedirectResponse
     */
    public function store(StoreBlogRequest $request)
    {
        Blog::create($request->validated());

        return redirect()->route('dashboard');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Blog  $blog
     * @return view
     */
    public function edit(Blog $blog)
    {
        return view('blogs/create', ['blog' => $blog]);
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
        $blog->update($request->validated());

        return redirect()->route('dashboard');
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

        return redirect()->route('dashboard');
    }
}
