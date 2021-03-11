<?php

namespace App\Http\Controllers;

use App\Http\Requests\Categories\StoreCategoryRequest;
use App\Models\Category;

class CategoryController extends Controller
{
    /**
     * Show the form for creating a new resource.
     *
     * @return View
     */
    public function create()
    {
        $category = new Category();

        return view('categories/create', ['category' => $category]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  StoreCategoryRequest  $request
     * @return RedirectResponse
     */
    public function store(StoreCategoryRequest $request)
    {
        Category::create($request->validated());

        return redirect()->route('dashboard');
    }
}
