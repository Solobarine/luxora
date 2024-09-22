<?php

namespace App\Http\Controllers;

use App\Models\Wishlist;
use App\Models\WishlistItem;
use Illuminate\Http\Request;

class WishlistController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = auth()->user();

        $wishlist = Wishlist::with('items.product')->where("user_id", $user->id)->first();

        return inertia('Wishlist/Index', ['wishlist' => $wishlist]);
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
    public function addToWishlist(Request $request)
    {
        $request->validate([
            'product_id' => 'required|integer'
        ]);

        $user = auth()->user();

        $wishlist = $user->wishlist;

        //dd($wishlist);

        if (is_null($wishlist)) {
            $wishlist = $user->wishlist()->create();
        }

        $item = $wishlist->items()->where('product_id', $request->product_id)->first();

        if (!is_null($item)) {
            return redirect()->back()->with('error', 'Product already added to wishlist');
        }


        $wishlist->items()->create(['product_id' => $request->product_id]);

        //dd($wishlist->items);

        return redirect()->back()->with(['success' => 'Product added to wishlist']);
    }

    /**
     * Display the specified resource.
     */
    public function show(Wishlist $wishlist)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Wishlist $wishlist)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Wishlist $wishlist)
    {
        //
    }

    public function removeFromWishlist()
    {
        $user = auth()->user();
        $item = $user->wishlist->items->where('product_id', request('product_id'))->first();

        $item->delete();

        return redirect()->back()->with(['success' => "Item removed from Wishlist"]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Wishlist $wishlist)
    {
        //
    }
}
