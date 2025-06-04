import { useRouter } from 'next/router';
import { books } from '../../data/mockData';

export default function BookDetail() {
  const router = useRouter();
  const { id } = router.query;

  const book = books.find((b) => b.id === parseInt(id));

  if (!book) return <p style={{ padding: '2rem' }}>Kitap bulunamadı.</p>;

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>{book.title}</h1>
      <h3><em>{book.author}</em></h3>
      <img src={book.image} alt={book.title} style={{ width: '200px', borderRadius: '8px' }} />
      <p style={{ marginTop: '1rem' }}>{book.description}</p>
    </div>
  );
}
