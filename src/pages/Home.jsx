import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import * as styles from './Home.module.css';
import warningIcon from '../assets/warning.svg';

// Import komponen peta langsung di sini (bisa juga dipisah ke file terpisah)
import {
  ComposableMap,
  Geographies,
  Geography,
} from 'react-simple-maps';

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

// Ganti negara sesuai preferensimu
const likedCountries = ['IDN', 'JPN', 'FRA']; // Suka
const neutralCountries = ['USA', 'CAN', 'DEU', 'GBR']; // Netral

const getColor = (id) => {
  if (likedCountries.includes(id)) return '#4ade80'; // Hijau muda
  if (neutralCountries.includes(id)) return '#fde047'; // Kuning
  return '#e5e5e5'; // Abu-abu netral
};

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
        <meta name="description" content="Personal website of Ali Rahman — simple, neat, and professional." />
        <meta property="og:title" content="Ali Rahman — Personal Website" />
      </Helmet>

      <div className={styles.container} ref={textRef}>
        <h2 className={styles.noticeHeader}>
          <span className={styles.divider}></span>
          <img src={warningIcon} alt="Warning" className={styles.warningIcon} />
          Read this before continuing to browse my personal website
        </h2>
        <p>
          Hai! uhh aku ingin mengetahui bagaimana cara kalian menemukan situsku? oh apakah kalian
          mendapatkanya dari profile media sosialku? atau kalian mendapatkannya dari searching
          google? sangat menarik..
        </p>
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
          dan tetap professional.
        </p>

        {/* Bagian Peta Interaktif */}
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
            Negara yang Menarik Perhatianku
          </h3>
          <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{ scale: 140, center: [0, 20] }}
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const countryId = geo.properties?.ISO_A3 ?? 'XXX';
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={getColor(countryId)}
                        stroke="#d1d5db"
                        strokeWidth={0.5}
                        style={{
                          default: { outline: 'none' },
                          hover: { fill: '#93c5fd', outline: 'none' },
                          pressed: { outline: 'none' },
                        }}
                      />
                    );
                  })
                }
              </Geographies>
            </ComposableMap>
          </div>
          <div style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#6b7280' }}>
            <span style={{ display: 'inline-block', marginRight: '1rem' }}>
              <span style={{ display: 'inline-block', width: '12px', height: '12px', backgroundColor: '#4ade80', marginRight: '4px' }}></span>
              Disukai
            </span>
            <span style={{ display: 'inline-block', marginRight: '1rem' }}>
              <span style={{ display: 'inline-block', width: '12px', height: '12px', backgroundColor: '#fde047', marginRight: '4px' }}></span>
              Netral
            </span>
            <span>
              <span style={{ display: 'inline-block', width: '12px', height: '12px', backgroundColor: '#e5e5e5', marginRight: '4px' }}></span>
              Belum dieksplorasi
            </span>
          </div>
        </div>
      </div>
    </>
  );
}