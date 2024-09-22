<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::all();

        return inertia('Category/Index', ['categories' => $categories]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Category/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|min:4|max:255|unique:categories',
            'image' => 'required|mimes:jpg,png,avif,webp'
        ]);

        $url = Storage::putFile('/categories', $request->file('image'));

        Category::query()->create([
            'name' => $request->name,
            'image_url' => $url
        ]);

        Redirect::to(route('category.index'), 201)->with('message', 'Category created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        $products = $category->products()->with('images')->paginate(10);

        return inertia('Category/Show', ['category' => $category, 'products' => $products]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Category $category)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        //
    }
}
