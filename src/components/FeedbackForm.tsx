import React, { useState } from 'react';
import type { FeedbackData, FeedbackFormProps } from '../types/feedback';

const FeedbackForm: React.FC<FeedbackFormProps> = ({ onFeedbackSubmit }) => {
    const [formData, setFormData] = useState<FeedbackData>({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onFeedbackSubmit(formData); // Chama a função de callback do componente pai

        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <div className="card shadow-sm p-4">
            <h2 className="card-title text-center mb-4">Envie seu Feedback</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nome</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Mensagem</label>
                    <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        required
                    />
                </div>
                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">
                        Enviar Feedback
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FeedbackForm;