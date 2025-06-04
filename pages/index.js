import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Booklet Demo</title>
      </Head>
      <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
        <h1>Welcome to Booklet Demo 📚</h1>
        <p>This is your homepage. Everything is working!</p>
      </main>
    </>
  );
}
