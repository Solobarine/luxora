<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\CartItemController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\WishlistController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [WelcomeController::class, 'index'])->name('welcome');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile/{id}', [ProfileController::class, 'show'])->name('profile.show')->withoutMiddleware('auth');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->group(function () {
    Route::get('/categories', [CategoryController::class, 'index'])->name('category.index')->withoutMiddleware(['auth']);
    Route::get('categories/new', [CategoryController::class, 'create'])->name('category.create');
    Route::get('categories/{category:name}', [CategoryController::class, 'show'])->name('category.show')->withoutMiddleware(['auth']);
    Route::post('categories', [CategoryController::class, 'store'])->name('category.store');
    Route::get('categories/edit/{category}', [CategoryController::class, 'edit'])->name('category.edit');
    Route::patch('categories/{category}', [CategoryController::class, 'update'])->name('category.update');
    Route::delete('categories/{category}', [CategoryController::class, 'destroy'])->name('category.destroy');
});

Route::middleware('auth')->group(function () {
    Route::get('/marketplace', [ProductController::class, 'index'])->name('marketplace')->withoutMiddleware('auth');
    Route::get('/products/new', [ProductController::class, 'create'])->name('product.create');
    Route::get('/products/{product}', [ProductController::class, 'show'])->name('product')->withoutMiddleware('auth');
    Route::get('/api/products/{id}', [ProductController::class, 'getProduct'])->name('product.get')->withoutMiddleware('auth');
    Route::get('/products/{product}/edit', [ProductController::class, 'edit'])->name('product.edit');
});

Route::middleware("auth")->group(function () {
    Route::get('/cart', [CartController::class, 'index'])->name('cart');
    Route::post('/cart', [CartController::class, 'addToCart'])->name('cart');
    Route::delete('/cart/items/{id}', [CartController::class, 'removeFromCart'])->name('cart.remove_item');
    Route::patch('/cart/items/{cart_item_id}', [CartItemController::class, 'updateCartItem'])->name('cart.update_item');
    Route::patch('cart/items/{cart_item_id}', [CartItemController::class, 'updateQuantity'])->name('cart.update_quantity');
});

Route::get('crypto', function () {
    return inertia('Products/Crypto');
});

Route::middleware("auth")->group(function () {
    Route::get('/wishlist', [WishlistController::class, 'index'])->name("wishlist");
    Route::post('/wishlist', [WishlistController::class, 'addToWishlist'])->name('wishlist');
    Route::delete('/wishlist/items/{product_id}', [WishlistController::class, 'removeFromWishlist'])->name('wishlist.remove_item');
});

Route::middleware("auth")->group(function () {
    Route::get('/products/{product}/reviews', [ReviewController::class, 'index'])->name('reviews')->withoutMiddleware('auth');
});

require __DIR__ . '/auth.php';
