import React, { useState } from 'react';
import './createRequest.css';

const CreateRequest = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    amount: '',
    category: '',
    date: '',
  });

  const [error, setError] = useState('');

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.title || !formData.description || !formData.amount || !formData.category || !formData.date) {
      setError('Please fill in all fields.');
    } else {
      setError('');
      alert('Request Submitted');
      //  call an API to submit the data
    }
  };

  return (
    <div className="create-request-container">
      <h1 className="create-request-heading">Create Request</h1>

      {error && <div className="error-message">{error}</div>}

      <div className="form-container">
        <div className="form-field">
          <label htmlFor="title">Request Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter a title"
          />
        </div>

        <div className="form-field">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter a detailed description"
          />
        </div>

        <div className="form-field">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Enter the amount"
          />
        </div>

        <div className="form-field">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Select a category</option>
            <option value="utilities">Utilities</option>
            <option value="education">Education</option>
            <option value="medical">Medical</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="date">Deadline</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        <div className="form-actions">
          <button className="submit-btn" onClick={handleSubmit}>Submit Request</button>
          <button className="save-btn">Save Draft</button>
        </div>
      </div>
    </div>
  );
};

export default CreateRequest;
