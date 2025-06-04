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
