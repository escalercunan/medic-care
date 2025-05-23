<?php
namespace Database\Seeders;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class PasswordResetTokensSeeder extends Seeder
{
    public function run(): void
    {
        \DB::table('password_reset_tokens')->insert([
            'email' => 'test@example.com',
            'token' => Str::random(60),
            'created_at' => now(),
        ]);
    }
}
