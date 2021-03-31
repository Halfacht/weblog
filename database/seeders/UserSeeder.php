<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::factory()->writer()->create([
            'name' => 'Alwin',
            'email' => 'alwin@mail.com',
            'password' => Hash::make('testtest'),
        ]);

        User::factory()->count(3)->create();

        User::factory()->count(3)->writer()->create();
    }
}
