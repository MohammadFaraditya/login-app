<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class tableadd extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'id'               => 'AST-' . time() . '-' . rand(1000, 9999),
            'username'         => 'aditya',
            'email'            => 'mohammadfaraditya@gmail.com',
            'password'         => Hash::make('123456'),
            'pat_name'         => encrypt('AST002'),
            'pat_secret'       => encrypt('bAwjxIdeTeKCOuTySRg+mw==:IJIIj62JSb2mJHQuIZmmigobHNvkrAzX'),
            'masa_aktif_token' => '2025-08-25',
        ]);
    }
}
