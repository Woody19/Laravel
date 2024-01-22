import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

const ArticlePage = () => {
    // Используем хук useState для управления состоянием компонента
    const [article, setArticle] = useState({});

    // Используем хук useParams для извлечения параметра 'id' из URL
    const { id } = useParams();

    // Используем хук useNavigate для навигации между страницами
    const navigate = useNavigate();

    // Используем хук useEffect для выполнения запроса к API при монтировании компонента
    useEffect(() => {
        axios.get(`/api/articles/${id}`).then(response => {
            console.log(response);
            setArticle(response.data);
        });
    }, [id]);

    // Обработчик нажатия кнопки "Back to Home", который перенаправляет на главную страницу
    const handleBackToHome = () => {
        navigate('/');
    };

    // Отображаем заголовок, содержание и автора статьи, а также изображение и кнопку для возврата на главную страницу
    return (
        <div className="container mt-5">
            <h1 className="mb-4">{article.title}</h1>
            <p className="lead">{article.content}</p>
            <p>Author: {article.author}</p>
            <img
                src={`/storage/${article.image?.replace('public/', '')}`}
                alt={article.title}
                className="img-fluid rounded"
                style={{ width: '300px', height: '300px' }}
            />
            <button className="btn btn-primary" onClick={handleBackToHome}>
                Back to Home
            </button>
        </div>
    );
};

export default ArticlePage;
