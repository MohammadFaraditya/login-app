<?php
namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class account extends Seeder
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
            'pat_name'         => encrypt('AST001'),
            'pat_secret'       => encrypt('vwyDiKgRQEGKlOpi8FUTww==:1Cvt88njWOdYAllurPtfzh3VgrZkc1Iq'),
            'masa_aktif_token' => '2025-07-26',

        ]);
    }
}
