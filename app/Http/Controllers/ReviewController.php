<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Product $product)
    {
        $reviews = Review::with('user')->where('product_id', $product->id)->latest()->limit(200)->paginate();
        return inertia('Reviews/Index', ['reviews' => $reviews, 'product_id' => $product->id]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'product_id' => 'required|integer',
            'rating' => 'required|integer|min:1|max:5',
            'comment' => 'required|string|min:4|max:255'
        ]);

        $user = auth()->user();

        $user->reviews()->create([
            'product_id' => $request->product_id,
            'rating' => $request->rating,
            'comment' => $request->comment
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Review $review)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Review $review)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Review $review)
    {
        $review->rating = $request->rating;
        $review->comment = $request->comment;

        $review->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Review $review)
    {
        $review->delete();
    }
}
