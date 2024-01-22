<?php

namespace App\Http\Controllers;
use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    // Возвращает список всех статей
    public function index()
    {
        return Article::all();
    }

    // Перенаправляет на страницу создания статьи или главную страницу
    public function create()
    {
        if (request()->path() !== 'articles/create') {
            return redirect()->route('articles.create');
        }
        return redirect('/');
    }

    // Показывает статью по ID
    public function show($id)
    {
        $article = Article::findOrFail($id);
        return $article;
    }

    // Сохраняет новую статью и перенаправляет с сообщением об успехе
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'author' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $imagePath = $request->file('image')->store('public/article_images');

        $article = new Article([
            'title' => $validatedData['title'],
            'content' => $validatedData['content'],
            'author' => $validatedData['author'],
            'image' => $imagePath,
        ]);
        $article->save();

        return redirect('/')->with('success', 'Article created successfully.');
    }
}
