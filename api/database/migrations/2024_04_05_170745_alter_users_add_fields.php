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
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('name');

            $table->string('username')->after('email');
            $table->string('first_name')->after('username');
            $table->string('last_name')->after('first_name');
            $table->string('mobile')->after('username');
            $table->date('date_of_birth')->after('mobile');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn([
                'first_name',
                'last_name',
                'mobile',
                'date_of_birth',
                'username'
            ]);

            $table->string('name')->after('id');
        });
    }
};
