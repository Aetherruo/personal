import Seo from '../components/Seo';

export default function Home() {
  return (
    <>
      <Seo 
        title="Beranda" 
        description="Selamat datang di website kami" 
        image="/og-home.jpg"
      />
      <h1>Selamat Datang di Beranda</h1>
    </>
  );
}