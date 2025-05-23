<?php
namespace Database\Seeders;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class SessionsSeeder extends Seeder
{
    public function run(): void
    {
        \DB::table('sessions')->insert([
            'id' => Str::uuid()->toString(),
            'user_id' => 1, // Assuming the user created above has ID 1
            'ip_address' => '127.0.0.1',
            'user_agent' => 'LaravelSeederTest',
            'payload' => json_encode(['some' => 'data']),
            'last_activity' => time(),
        ]);
    }
}
