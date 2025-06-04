export default function BookCard({ title, author, description, image }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '1rem',
      maxWidth: '200px',
      fontFamily: 'Arial',
      background: '#fff'
    }}>
      <img src={image} alt={title} style={{ width: '100%', borderRadius: '4px' }} />
      <h3>{title}</h3>
      <p><em>{author}</em></p>
      <p style={{ fontSize: '0.85rem' }}>{description}</p>
    </div>
  );
}
