<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::create([
            'name' => 'Admin',
            'email' => 'admin@quickbank.com',
            'password' => Hash::make('admin123'), // Use Hash::make to hash the password
            'role' => 1,
        ]);

        User::create([
            'name' => 'Manager',
            'email' => 'manager@quickbank.com',
            'password' => Hash::make('manager123'), // Use Hash::make here as well
            'role' => 2,
        ]);

        User::create([
            'name' => 'User',
            'email' => 'user@quickbank.com',
            'password' => Hash::make('user123'), // And here
            'role' => 0,
        ]);
    }
}
