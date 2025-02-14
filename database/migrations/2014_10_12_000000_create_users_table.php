<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('username');
            $table->string('email');
            $table->string('password');
            $table->string('pat_name')->nullable(); // Menyimpan nama PAT (opsional)
            $table->text('pat_secret')->nullable(); // Menyimpan PAT Secret (sensitif, enkripsi akan digunakan)
            $table->date('masa_aktif_token');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
