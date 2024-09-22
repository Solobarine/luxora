<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\ProductAttribute;
use Illuminate\Http\Request;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = auth()->user();
        $cart = $user->load(['cart.items.product.images', 'cart.items.product.attributes'])->cart;
        if ($cart) {
            foreach ($cart->items as $item) {
                $picks = [];
                $attributeIds = collect($item->attribute_ids)->pluck('id');
                $attributes = ProductAttribute::whereIn('id', $attributeIds)->get();

                foreach ($attributes as $attribute) {
                    array_push($picks, $attribute);
                }
                $item->picks = $picks;
            }
        }

        return inertia('Cart/Index', ['cart' => $cart]);
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
    public function addToCart(Request $request)
    {
        $request->validate([
            'product_id' => 'required|integer',
            'quantity' => 'required|integer',
            'attribute_ids' => 'required|array',
            'attribute_ids.*.id' => 'required|integer'
        ]);

        $user = auth()->user();
        $cart = $user->cart;

        if (is_null($cart)) {
            $cart = $user->cart->create();
        }

        $cart->items()->create([
            'product_id' => $request->product_id,
            'attribute_ids' => $request->attribute_ids,
            'quantity' => $request->quantity
        ]);

        return redirect()->back()->with('message', 'Item Added to Cart Successfully');
    }

    public function removeFromCart(Request $request)
    {
        $user = auth()->user();
        $cartItem = $user->cart->items()->find($request->id);
        $cartItem->delete();

        return redirect()->back()->with('message', "Item removed from cart");
    }

    /**
     * Display the specified resource.
     */
    public function show(Cart $cart)
    {
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cart $cart)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Cart $cart)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cart $cart)
    {
        //
    }
}
