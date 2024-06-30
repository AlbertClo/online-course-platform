<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [App\Http\Controllers\AuthController::class, 'login']);
Route::post('/register', [App\Http\Controllers\AuthController::class, 'register']);
Route::middleware('auth:sanctum')->post('/logout', [App\Http\Controllers\AuthController::class, 'logout']);

Route::middleware('auth:sanctum')->get('/courses', function (Request $request) {
    return \App\Models\Course::get();
});
