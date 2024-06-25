<?php

namespace Database\Seeders;

use App\Models\Course;
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
        $userEmail = 'test@example.com';
        if (User::whereEmail($userEmail)->first() === null) {
            User::factory()->create([
                'name' => 'Test User',
                'email' => $userEmail,
            ]);
        }

        Course::factory(5)->create();
    }
}
