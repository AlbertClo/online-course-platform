<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', function (Request $request) {
    if (! Auth::attempt($request->only('email', 'password'))) {
        return response(['message' => __('auth.failed')], 422);
    }

    $token = auth()->user()->createToken('client');

    return ['token' => $token->plainTextToken];
});

Route::middleware('auth:sanctum')->post('/logout', function (Request $request) {
    $request->user()->currentAccessToken()->delete();

    return response()->noContent();
});

Route::middleware('auth:sanctum')->get('/courses', function (Request $request) {
    return \App\Models\Course::get();
});
