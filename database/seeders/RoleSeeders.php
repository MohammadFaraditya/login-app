<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RoleSeeders extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Role::create(
            [
                'name' => 'administrator',
            ],
            ['name' => 'administrator']
        );

        Role::create(
            [
                'name' => 'staff',
            ],
            ['name' => 'staff']
        );
    }
}
