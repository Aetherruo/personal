
import Styles from '../styles/home.module.css';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <>


<Helmet>
  <title>Ali Rahman</title>
  <meta name="description" content="blablalballa" />
  <meta property="og:title" content="kdsfjaklfjskf" />
</Helmet>

      <div className="{Styles.First}">
        <h2>Halo, Saya Ali Rahman</h2>
        <p>Selamat datang di portofolio saya!</p>
      </div>
    </>
  );
}