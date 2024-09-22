<?php

namespace Database\Seeders;

use Faker\Factory as Faker;
use App\Models\Category;
use App\Models\Product;
use App\Models\ProductAttribute;
use App\Models\ProductsImages;
use App\Models\Review;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $faker = Faker::create();
        $users = User::factory()->count(20)->create();
        $categories = Category::factory()->count(20)->create();

        foreach ($categories as $category) {
            Product::factory()->count(10)->create([
                'category_id' => $category->id
            ]);
        };

        $products = Product::all();

        foreach ($products as $product) {
            ProductAttribute::factory()->count(6)->create([
                'product_id' => $product->id,
                'name' => 'Colors'
            ])->each(function ($attribute) use ($faker) {
                $attribute->update([
                    'value' => $faker->hexColor
                ]);
            });
            ProductAttribute::factory()->count(6)->create([
                'product_id' => $product->id,
                'name' => 'Sizes',
                'value' => rand(20, 45)
            ])->each(function ($attribute) {
                $attribute->update([
                    'value' => rand(20, 45)
                ]);
            });

            ProductAttribute::factory()->count(3)->create([
                'product_id' => $product->id,
                'name' => 'Tags',
            ]);


            ProductsImages::factory()->count(5)->create([
                'product_id' => $product->id
            ]);
        };
        foreach ($users as $user) {
            foreach ($products as $product) {
                Review::factory()->count(1)->create([
                    'product_id' => $product->id,
                    'user_id' => $user->id
                ]);
            }
        }
    }
}
