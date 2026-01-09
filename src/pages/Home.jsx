import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import * as styles from './Home.module.css';
import warningIcon from '../assets/warning.svg'; // pastikan path benar

export default function Home() {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current && typeof window.anime !== 'undefined') {
      window.anime({
        targets: textRef.current.children,
        opacity: [0, 1],
        translateY: [20, 0],
        delay: window.anime.stagger(100),
        duration: 600,
        easing: 'easeOutExpo',
      });
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Ali Rahman</title>
        <meta name="description" content="blablalballa" />
        <meta property="og:title" content="kdsfjaklfjskf" />
      </Helmet>

      <div className={styles.container} ref={textRef}>
        <h2 className={styles.noticeHeader}>
          <span className={styles.divider}></span>
          <img src={warningIcon} alt="Warning" className={styles.warningIcon} />
          Read this before continuing to browse my personal website
        </h2>
        <p>Hai! uhh aku ingin mengetahui bagaimana cara kalian menemukan situsku? oh apakah kalian
          mendapatkanya dari profile media sosialku? atau kalian mendapatkannya dari searching
          google? sangat menarik..</p>
        <p>
          Perkenalkan aku Ali, seorang visioner yang telah banyak mempelajari dan mengetahui
          diberbagai bidang, dari hobi, keterampilan, hingga struktur manusia, aku memiliki banyak
          ide dari kumpulan ilmu yang kumiliki, tetapi aku juga termasuk orang yang sadar akan
          propaganda, kita semua menyukai propaganda, benarkan? aku bukan seorang ahli, tetapi aku mempunyai statement
          dan aku senang berkontribusi pada suatu bidang yang kutertarik sesaat, bisa kalian baca opiniku pada halaman situs docs.
        </p>
        <p>
          Aku sangat senang bisa mempunyai pengunjung dan mereka berasal dari Indonesia, karena dinegara kita ini masih banyak 
          orang yang tidak memiliki personal website, kuharap websiteku gak mencolok haha.. websiteku ini sengaja kubuat sesimple tetapi serapi mungkin
          dan tetap professional, 
        </p>
      </div>
    </>
  );
}