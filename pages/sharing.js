import { useState, useEffect } from 'react';

export default function SharingPage() {
  const [form, setForm] = useState({
    title: '',
    author: '',
    description: '',
    image: ''
  });

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const savedBooks = localStorage.getItem('booklet-books');
    if (savedBooks) {
      setBooks(JSON.parse(savedBooks));
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.author) {
      alert("Kitap adı ve yazar zorunlu!");
      return;
    }

    const newBook = { ...form, id: Date.now() };
    const updatedBooks = [...books, newBook];

    setBooks(updatedBooks);
    localStorage.setItem('booklet-books', JSON.stringify(updatedBooks));

    setForm({ title: '', author: '', description: '', image: '' });
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '1.5rem' }}>📚 Share a Book</h1>

      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        maxWidth: '400px'
      }}>
        <input
          name="title"
          placeholder="Book Title"
          value={form.title}
          onChange={handleChange}
          required
          style={{ padding: '0.5rem', borderRadius: '6px', border: '1px solid #ccc' }}
        />

        <input
          name="author"
          placeholder="Author"
          value={form.author}
          onChange={handleChange}
          required
          style={{ padding: '0.5rem', borderRadius: '6px', border: '1px solid #ccc' }}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          rows="3"
          style={{ padding: '0.5rem', borderRadius: '6px', border: '1px solid #ccc', resize: 'vertical' }}
        />

        <input
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          style={{ padding: '0.5rem', borderRadius: '6px', border: '1px solid #ccc' }}
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

      {books.length > 0 ? (
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.5rem',
          marginTop: '2rem'
        }}>
          {books.map((book) => (
            <div key={book.id} style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '1rem',
              width: '200px',
              fontFamily: 'Arial',
              backgroundColor: '#fafafa',
              boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              {book.image && (
                <img
                  src={book.image}
                  alt={book.title}
                  style={{ width: '100%', borderRadius: '6px', objectFit: 'cover', marginBottom: '0.5rem' }}
                />
              )}
              <h3>{book.title}</h3>
              <p><em>{book.author}</em></p>
              <p style={{ fontSize: '0.8rem' }}>{book.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ marginTop: '2rem', color: '#888' }}>
          Henüz eklenmiş bir kitap yok.
        </p>
      )}
    </div>
  );
}
