import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateArticle = () => {
    // Используем хуки useState для управления состоянием компонента
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [image, setImage] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Обработчик отправки формы для создания статьи
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('content', content);
            formData.append('author', author);
            formData.append('image', image);

            const response = await axios.post('/api/articles', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log(response);

            if (response.status === 200) {
                navigate('/');
            }
        } catch (error) {
            setError('Failed to create article. Please check your data.');
        }
    };

    // Отображаем форму для создания статьи и обрабатываем введенные данные
    return (
        <div className="container mt-5">
            <h1>Create Article</h1>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">Content</label>
                    <textarea className="form-control" id="content" value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="author" className="form-label">Author</label>
                    <input type="text" className="form-control" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image</label>
                    <input type="file" className="form-control" accept="image/*" id="image" onChange={(e) => setImage(e.target.files[0])} required />
                </div>
                <button type="submit" className="btn btn-primary">Create Article</button>
            </form>
        </div>
    );
};

export default CreateArticle;
