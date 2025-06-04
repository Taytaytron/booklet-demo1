import { books } from '../data/mockData';
import BookCard from '../components/BookCard';

export default function Explore() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '2rem',
      padding: '2rem'
    }}>
      {books.map((book) => (
        <BookCard key={book.id} {...book} />
      ))}
    </div>
  );
}
