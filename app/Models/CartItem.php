<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CartItem extends Model
{
    use HasFactory;

    protected $fillable = [
        "cart_id",
        "product_id",
        "attribute_ids",
        "quantity"
    ];

    protected $casts = ["attribute_ids" => "array"];

    public function cart(): BelongsTo
    {
        return $this->belongsTo(Cart::class);
    }

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function attributes()
    {
        return ProductAttribute::whereIn('id', collect($this->attributes)->pluck('id'))->get();
    }
}
