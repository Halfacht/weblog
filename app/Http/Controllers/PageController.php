<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;

class PageController extends Controller
{
    public function index()
    {
        $blogs = Blog::all();

        return view('index', ['blogs' => $blogs]);
    }

    public function dashboard()
    {
        $blogs = auth()->user()->blogs();

        return view('dashboard', ['blogs' => $blogs]);
    }
}
