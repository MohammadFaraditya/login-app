<?php
namespace Database\Seeders;

use App\Models\Sheet;
use Illuminate\Database\Seeder;

class addSheet extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Sheet::create([
            'idsheet'       => rand(1000, 9999),
            'name'          => 'Dashboard.LineGraph',
            'permission_id' => 3,
        ]);
    }
}
