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

      {books.length > 0 && (
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {books.map((book) => (
            <div key={book.id} style={{
              border: '1px solid #ccc',
              padding: '1rem',
              maxWidth: '200px'
            }}>
              {book.image && <img src={book.image} alt={book.title} style={{ width: '100%' }} />}
              <h3>{book.title}</h3>
              <p><em>{book.author}</em></p>
              <p style={{ fontSize: '0.8rem' }}>{book.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
