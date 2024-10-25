import React, { useState } from 'react';
import axios from 'axios';

function SingleFieldForm() {
  const [input, setInput] = useState('');
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/send-email', { input, email });
      setSuccess(true);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your input"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Submit</button>
      </form>
      {success && <p>Email sent successfully!</p>}
    </div>
  );
}

export default SingleFieldForm;
