import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ExplorePage() {
  const [books, setBooks] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const savedBooks = localStorage.getItem('booklet-books');
    if (savedBooks) {
      const parsedBooks = JSON.parse(savedBooks);
      setBooks(parsedBooks.reverse());
    }
  }, []);

  const goToDetails = (id) => {
    router.push(`/book/${id}`);
  };

  const handleDelete = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
    localStorage.setItem('booklet-books', JSON.stringify(updatedBooks));
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '2rem' }}>📖 Explore Shared Books</h1>

      {books.length > 0 ? (
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          {books.map((book) => (
            <div key={book.id} style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '1rem',
              width: '200px',
              backgroundColor: '#f9f9f9',
              boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              {book.image ? (
                <img
                  src={book.image}
                  alt={book.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '6px',
                    marginBottom: '0.5rem'
                  }}
                />
              ) : (
                <div style={{
                  width: '100%',
                  height: '150px',
                  backgroundColor: '#ccc',
                  borderRadius: '6px',
                  marginBottom: '0.5rem'
                }} />
              )}

              <h3>{book.title}</h3>
              <p><em>{book.author}</em></p>
              <p style={{ fontSize: '0.8rem' }}>{book.description}</p>

              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.8rem' }}>
                <button onClick={() => goToDetails(book.id)} style={{
                  padding: '0.4rem 0.8rem',
                  borderRadius: '6px',
                  backgroundColor: '#0070f3',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer'
                }}>
                  Detay
                </button>

                <button onClick={() => handleDelete(book.id)} style={{
                  padding: '0.4rem 0.8rem',
                  borderRadius: '6px',
                  backgroundColor: '#e00',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer'
                }}>
                  Sil
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ color: '#888' }}>Henüz paylaşılmış kitap bulunmuyor.</p>
      )}
    </div>
  );
}
