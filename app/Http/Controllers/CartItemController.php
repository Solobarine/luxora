<?php

namespace App\Http\Controllers;

use App\Models\CartItem;
use Illuminate\Http\Request;

class CartItemController extends Controller
{
    public function updateCartItem()
    {
        $item = CartItem::find(request('cart_item_id'));

        if (!$item) {
            return redirect()->to(route('cart'))->with('error', 'Cart Item not found');
        }

        $item->attribute_ids = request('attribute_ids');
        $item->save();

        return redirect()->to(route('cart'))->with('success', 'Cart Item updated');
    }

    public function updateQuantity(Request $request)
    {
        $request->validate([
            'quantity' => 'required|numeric|integer|min:-10|max:10'
        ]);

        $item = CartItem::find(request('cart_item_id'));

        if (!$item) {
            return redirect()->to(route('cart'))->with('error', 'Cart Item not Found');
        }
        $newValue = $item->quantity + $request->quantity;

        if ($newValue > 10) {
            $item->quantity = 10;
        } elseif ($newValue < 0) {
            $item->quantity = 0;
        } else {
            $item->quantity = $newValue;
        }

        $item->save();

        return redirect()->to(route('cart'))->with("success", "Cart Quantity Updated");
    }
}
