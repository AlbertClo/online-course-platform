<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [App\Http\Controllers\AuthController::class, 'login']);
Route::post('/register', [App\Http\Controllers\AuthController::class, 'register']);
Route::middleware('auth:sanctum')->post('/logout', [App\Http\Controllers\AuthController::class, 'logout']);

Route::get('/courses', [App\Http\Controllers\CoursesController::class, 'index']);
Route::get('/courses/{course}', [App\Http\Controllers\CoursesController::class, 'show']);

Route::middleware(['auth:sanctum'])->post('/courses', [App\Http\Controllers\CoursesController::class, 'store']);
Route::middleware(['auth:sanctum'])->put('/courses/{course}', [App\Http\Controllers\CoursesController::class, 'update']);
Route::middleware(['auth:sanctum'])->delete('/courses/{course}', [App\Http\Controllers\CoursesController::class, 'destroy']);


//Route::middleware(['auth:sanctum'])->put('/courses/{course}', \App\Http\Controllers\UpdateCourse\UpdateCourseController::class);
//Route::middleware(['auth:sanctum'])->delete('/courses/{course}', \App\Http\Controllers\DestroyCourse\DestroyCourseController::class);
