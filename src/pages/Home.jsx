import Seo from '../components/Seo';
import Styles from '../styles/home.module.css';

export default function Home() {
  return (
    <>
      <Seo 
        title="Beranda" 
      />
      <div className="{Styles.First}">
        <h2>Halo, Saya Ali Rahman</h2>
        <p>Selamat datang di portofolio saya!</p>
      </div>
    </>
  );
}