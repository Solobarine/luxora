<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->sentence(3),
            'brand' => $this->faker->company,
            'price' => $this->faker->numberBetween(1, 500),
            'stock_quantity' => $this->faker->numberBetween(20, 50),
            'description' => $this->faker->sentence(rand(20, 60))
        ];
    }
}
