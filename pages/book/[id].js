import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function BookDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [book, setBook] = useState(null);

  useEffect(() => {
    if (!id) return;

    const savedBooks = localStorage.getItem('booklet-books');
    if (savedBooks) {
      const books = JSON.parse(savedBooks);
      const found = books.find((b) => String(b.id) === id);
      setBook(found);
    }
  }, [id]);

  if (!book) {
    return <p style={{ padding: '2rem' }}>Kitap bilgisi yükleniyor veya bulunamadı...</p>;
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial' }}>
      <h1 style={{ marginBottom: '1rem' }}>{book.title}</h1>
      <h3 style={{ marginTop: '-0.5rem', color: '#555' }}>by {book.author}</h3>

      {book.image && (
        <img
          src={book.image}
          alt={book.title}
          style={{ width: '100%', borderRadius: '8px', marginTop: '1rem' }}
        />
      )}

      <p style={{ marginTop: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
        {book.description || 'Açıklama bulunmuyor.'}
      </p>

      <button
        onClick={() => router.back()}
        style={{
          marginTop: '2rem',
          padding: '0.6rem 1rem',
          borderRadius: '6px',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        ← Geri Dön
      </button>
    </div>
  );
}
