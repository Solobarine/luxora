<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    use HasFactory;

    protected  $fillable = [
        "name",
        "brand",
        "category_id",
        "description",
        "price",
        "stock_quantity",
    ];


    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function images(): HasMany
    {
        return $this->hasMany(ProductsImages::class);
    }

    public function attributes(): HasMany
    {
        return $this->hasMany(ProductAttribute::class);
    }

    public function wishlistItems(): HasMany
    {
        return $this->hasMany(WishlistItem::class);
    }
}
