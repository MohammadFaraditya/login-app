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
        Schema::create('Sheet', function (Blueprint $table) {
            $table->string('idsheet'); //
            $table->string('name');
                                                             // Menambahkan kolom foreign key
            $table->bigInteger('permission_id')->unsigned(); // Menambahkan permission_id

            // Menentukan relasi foreign key
            $table->foreign('permission_id')->references('id')->on('permissions')
                ->onDelete('cascade'); // Jika permission dihapus, sheet juga dihapus

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Sheet');
    }
};
