<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ArticleController;

// Маршрут для отображения списка всех статей
Route::get('/articles', [ArticleController::class, 'index']);

// Маршрут для создания новой статьи (обработка POST-запроса)
Route::post('/articles', [ArticleController::class, 'store']);

// Маршрут для отображения одной статьи по её ID
Route::get('/articles/{id}', [ArticleController::class, 'show']);
