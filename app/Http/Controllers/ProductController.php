<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ProductAttribute;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = auth()->user();
        $products = Product::with(['category', 'images', 'attributes']);

        if (request('category')) {
            $products->whereHas('category', function ($query) {
                $query->where('name', request('category'));
            });
        }

        $products = $products->paginate(20);

        if ($user) {
            // Loop through the paginated products and add the wishlisted attribute
            $products->getCollection()->transform(function ($product) use ($user) {
                $product->wishlisted = $user->wishlist->items->contains('product_id', $product->id);
                return $product;
            });
        }
        //dd($products);
        return inertia('Marketplace', ['products' => $products]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Products/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|min:4|max:255',
            'brand' => 'sometimes|string|min:4|max:255',
            'images' => 'required|array',
            'images.*' => 'required|image|mimes:jpg,png,avif',
            'price' => 'required|numeric',
            'stock_quantity'  => 'required|numeric',
            'description' => 'required|string|min:50|max:255',
            'category_id' => 'required|numeric|integer',
            'options' => 'required|array',
            'options.name' => 'required|string|max:255',
            'options.values' => 'required|array|min:1',
            'options.values.*' => 'required|string|max:255'
        ]);
        return;
        $product = Product::create($request->only(['name', 'brand', 'description', 'category_id', 'price', 'stock_quantity']));
        foreach ($request->options as $option) {
            ProductAttribute::create([
                'product_id' => $product->id,
                'name' => $option->name,
                'value' => $option->value
            ]);
        }

        foreach ($request->file('images') as $image) {
            if ($image->isValid()) {
                $path = Storage::putFile('products', $image);
                $product->images()->create([
                    'image_url' => $path
                ]);
            }
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        $user = auth()->user();
        $category = $product->category;
        $images = $product->images;
        $attributes = $product->attributes;
        $wishlisted = false;
        $in_cart = false;

        if ($user && $user->wishlist) {
            $wishlisted = $user->wishlist->items->contains('product_id', $product->id);
        }

        if ($user && $user->cart) {
            $in_cart = $user->cart->items->contains('product_id', $product->id);
        }

        return inertia('Products/Show', [
            'product' => $product,
            'category' => $category,
            'images' => $images,
            'attributes' => $attributes,
            'wishlisted' => $wishlisted,
            'in_cart' => $in_cart,
        ]);
    }

    public function getProduct(Request $request)
    {
        return Product::with(['images', 'attributes'])->where('id', $request->id)->first();
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        return inertia('Posts/Create');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
