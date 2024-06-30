<?php

namespace Database\Factories;

use App\Models\Course;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\File;

/**
 * @extends Factory<Course>
 */
class CourseFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $path = public_path('/storage/images/courses');

        if (!File::isDirectory($path)) {
            File::makeDirectory($path, 0777, true, true);
        }

        $name = ucfirst(implode(fake()->words(3)));

        $imagePath = fake()->image($path, 200, 200, null);
        $imageRelativePath = substr($imagePath, strpos($path, '/storage'));

        return [
            'name' => $name,
            'description' => fake()->sentence(),
            'image' => $imageRelativePath
        ];
    }
}
