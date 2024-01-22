<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ArticleController;

// Определение маршрутов

// Маршрут для главной страницы, который возвращает представление 'welcome'
Route::get('/', function () {
    return view('welcome');
});

// Маршруты для управления статьями
Route::get('/articles', [ArticleController::class, 'index'])->name('articles.index'); // Показать список статей
Route::get('/articles/create', [ArticleController::class, 'create'])->name('articles.create'); // Перейти на страницу создания статьи
Route::post('/articles', [ArticleController::class, 'store'])->name('articles.store'); // Сохранить новую статью

// Маршрут для "поймать" все остальные URL и вернуть представление 'welcome'
Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');
