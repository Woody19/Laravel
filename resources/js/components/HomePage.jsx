import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const HomePage = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get('/api/articles').then(response => {
            setArticles(response.data);
        });
    }, []);

    // Отображаем список статей и создаем ссылку для создания новой статьи
    return (
        <div className="container mt-5">
            <h1 className="mb-4">Articles</h1>
            <Link to="/articles/create" className="btn btn-primary mb-3">
                Create Article
            </Link>
            <div className="row">
                {articles.map((article) => (
                    <div key={article.id} className="col-md-4 mb-4">
                        <div className="card">
                            <img
                                src={`/storage/${article.image.replace('public/', '')}`}
                                alt={article.title}
                                className="card-img-top"
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{article.title}</h5>
                                <p className="card-text">{article.content}</p>
                                <p className="card-text">Author: {article.author}</p>
                                <Link to={`/articles/${article.id}`} className="btn btn-primary">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
