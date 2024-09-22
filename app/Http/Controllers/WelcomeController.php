<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class WelcomeController extends Controller
{
    public function index(): Response
    {
        $categories = Category::with("products.images")->inRandomOrder()->take(7)->get();
        $products = Product::with('images')->inRandomOrder()->take(5)->get();

        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'categories' => $categories,
            'products' => $products,
        ]);
    }
}
