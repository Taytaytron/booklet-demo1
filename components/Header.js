import Link from 'next/link';

export default function Header() {
  return (
    <header style={{
      padding: '1rem 2rem',
      background: '#1a1a1a',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h1 style={{ fontSize: '1.5rem' }}>📚 Booklet</h1>
      <nav>
        <ul style={{
          listStyle: 'none',
          display: 'flex',
          gap: '1.5rem',
          margin: 0,
          padding: 0
        }}>
          <li><Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
          <li><Link href="/explore" style={{ color: 'white', textDecoration: 'none' }}>Explore</Link></li>
          <li><Link href="/sharing" style={{ color: 'white', textDecoration: 'none' }}>Share a Book</Link></li>
        </ul>
      </nav>
    </header>
  );
}

