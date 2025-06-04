import { useState } from 'react';

export default function SharingPage() {
  const [form, setForm] = useState({
    title: '',
    author: '',
    description: '',
    image: ''
  });

  const [books, setBooks] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.author) return alert("Kitap adı ve yazar zorunlu!");

    setBooks([...books, { ...form, id: books.length + 1 }]);
    setForm({ title: '', author: '', description: '', image: '' });
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>📚 Share a Book</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <input type="text" name="title" placeholder="Book Title" value={form.title} onChange={handleChange} required />
        <input type="text" name="author" placeholder="Author" value={form.author} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />
        <input type="text" name="image" placeholder="Image URL" value={form.image} onChange={handleChange} />
        <button type="submit">Add Book</button>
      </form>
<form onSubmit={handleSubmit} style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  maxWidth: '400px',
  marginBottom: '2rem'
}}>
  <input
    name="title"
    placeholder="Book Title"
    value={form.title}
    onChange={handleChange}
    required
    style={{
      padding: '0.5rem',
      borderRadius: '6px',
      border: '1px solid #ccc'
    }}
  />

  <input
    name="author"
    placeholder="Author"
    value={form.author}
    onChange={handleChange}
    required
    style={{
      padding: '0.5rem',
      borderRadius: '6px',
      border: '1px solid #ccc'
    }}
  />

  <textarea
    name="description"
    placeholder="Description"
    value={form.description}
    onChange={handleChange}
    rows="3"
    style={{
      padding: '0.5rem',
      borderRadius: '6px',
      border: '1px solid #ccc',
      resize: 'vertical'
    }}
  />

  <input
    name="image"
    placeholder="Image URL"
    value={form.image}
    onChange={handleChange}
    style={{
      padding: '0.5rem',
      borderRadius: '6px',
      border: '1px solid #ccc'
    }}
  />

  <button type="submit" style={{
    padding: '0.6rem',
    borderRadius: '6px',
    backgroundColor: '#0070f3',
    color: 'white',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer'
  }}>
    Add Book
  </button>
</form>

       <div key={book.id} style={{
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '1rem',
  width: '200px',
  fontFamily: 'Arial',
  background: '#fafafa',
  boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
}}>

