import { useEffect, useRef, useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import * as styles from './Home.module.css';
import warningIcon from '../assets/warning.svg';
import cosmoImg from '../assets/scosmo.jpg';
import tinyImg from '../assets/stiny.jpg';
import fatalImg from '../assets/sfatal.jpg';
import outbrkImg from '../assets/sout.jpg';
import ruleImg from '../assets/srule.jpg';
import stormenImg from '../assets/stormen.jpg';
import faithImg from '../assets/sfaith.jpg';
import feignImg from '../assets/sfeign.png';
import bookmarkHeart from '../assets/bookmartheart.svg'
import gameIcon from '../assets/game.svg'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const countryPreferences = {
  liked: ['IDN', 'USA', 'CAN', 'AUS', 'ZAF', 'AGO', 'RWA'], 
  neutral: ['GBR', 'NLD', 'VEN', 'PNG' ],
};

const getMarkerColor = (countryCode) => {
  if (countryPreferences.liked.includes(countryCode)) return '#4ade80'; 
  if (countryPreferences.neutral.includes(countryCode)) return '#fde047'; 
  return '#9ca3af';
};

const allKnownCountries = [...countryPreferences.liked, ...countryPreferences.neutral];

// ✅ Pastikan marker hanya untuk negara yang relevan
const markers = [
  { name: 'Indonesia', coordinates: [113.9213, -2.5489], country: 'IDN' },
  { name: 'United States', coordinates: [-95.7129, 37.0902], country: 'USA' }, // Pusat geografis AS
  { name: 'United Kingdom', coordinates: [-1.4375, 54.0], country: 'GBR' },
  { name: 'Canada', coordinates: [-106.3468, 56.1304], country: 'CAN' },
  { name: 'Papua New Guinea', coordinates: [147.1589, -6.3149], country: 'PNG' },
  { name: 'Australia', coordinates: [133.7751, -25.2744], country: 'AUS' },
  { name: 'South Africa', coordinates: [22.9375, -30.5595], country: 'ZAF' },
  { name: 'Venezuela', coordinates: [-66.5897, 6.4238], country: 'VEN' },
  { name: 'Netherlands', coordinates: [5.2913, 52.1326], country: 'NLD' },
  { name: 'Angola', coordinates: [17.8739, -11.2027], country: 'AGO' },
  { name: 'Rwanda', coordinates: [29.8739, -1.9403], country: 'RWA' },
];

const getColor = (id) => {
  if (countryPreferences.liked.includes(id)) return '#4ade80'; // Hijau
  if (countryPreferences.neutral.includes(id)) return '#fde047'; // Kuning
  return '#e5e5e5'; // Abu-abu
};

export default function Home() {
  const textRef = useRef(null);
  const [hoveredCountry, setHoveredCountry] = useState(null);

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

  // ✅ Gunakan useCallback untuk stabilitas referensi
  const handleMouseEnter = useCallback((id) => setHoveredCountry(id), []);
  const handleMouseLeave = useCallback(() => setHoveredCountry(null), []);

  return (
    <>
      <Helmet>
        <title>Ali Rahman</title>
        <meta
          name="description"
          content="Personal website of Ali Rahman — simple, neat, and professional."
        />
        <meta property="og:title" content="Ali Rahman — Personal Website" />
      </Helmet>

      <div className={styles.container} ref={textRef}>
        <h2 className={styles.noticeHeader}>
          <span className={styles.divider}></span>
          <img src={warningIcon} alt="Warning" className={styles.warningIcon} />
          Read this before continuing to browse my personal website
        </h2>
        <p>
          Hai! Aku penasaran.. bagaimana Kamu menemukan situs ini? Apakah melalui profil media sosial punyaku, atau justru melalui pencarian di Google? Sungguh menarik untuk diketahui.
        </p>
        <p>
          Perkenalkan, namaku Ali Rahman, seorang visioner yang senang mendalami berbagai bidang mulai dari hobi, keterampilan, hingga struktur manusia. Dari pengetahuan yang aku kumpulkan, lahir banyak gagasan yang ingin aku bagikan. Namun, aku juga sadar bahwa informasi bisa dibentuk oleh propaganda; dan seperti kebanyakan orang, aku pun tidak kebal terhadapnya.
        </p>
        <p>
          Aku bukan seorang ahli, tetapi kumemiliki pandangan yang ingin kusampaikan. Jika tertarik, Kamu dapat membaca opini-opiniku lebih lanjut di halaman Docs.
        </p>
        <p>
          Aku sangat senang bisa mempunyai pengunjung, terutama dari Indonesia. Di negara kita ini masih banyak
          orang yang belum memiliki personal website. Kuharap websiteku tidak mencolok haha! Website ini sengaja kubuat
          sesimple mungkin, tetapi tetap rapi dan profesional.
        </p>

        {/* Bagian Peta Interaktif */}
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
            Negara yang Menarik Perhatianku
          </h3>

          <div
            style={{
              backgroundColor: '#f3f4f6',
              padding: '1.5rem',
              borderRadius: '12px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
              maxWidth: '100%',
            }}
          >
            <div style={{ width: '100%', maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
              <ComposableMap
                projection="geoMercator"
                projectionConfig={{ scale: 140, center: [0, 20] }}
                style={{ width: '100%', height: 'auto', aspectRatio: '900 / 500' }}
              >
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      // ✅ Handle undefined ISO_A3 dengan aman
                      const countryId = geo.properties?.ISO_A3?.trim() || 'XXX';
                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          stroke="#d1d5db"
                          strokeWidth={0.75}
                          style={{
                            default: {
                              fill: getColor(countryId),
                              outline: 'none',
                              transition: 'all 0.2s ease-in-out',
                              cursor: allKnownCountries.includes(countryId) ? 'pointer' : 'default',
                            },
                            hover: {
                              fill: allKnownCountries.includes(countryId) ? '#60a5fa' : getColor(countryId),
                              outline: 'none',
                              filter: allKnownCountries.includes(countryId) ? 'brightness(1.1)' : 'none',
                              cursor: allKnownCountries.includes(countryId) ? 'pointer' : 'default',
                            },
                            pressed: {
                              fill: getColor(countryId),
                              outline: 'none',
                            },
                          }}
                          onMouseEnter={() => handleMouseEnter(countryId)}
                          onMouseLeave={handleMouseLeave}
                        />
                      );
                    })
                  }
                </Geographies>

                {/* Render hanya marker untuk negara yang ada di daftar */}
                {markers
                .filter(marker => allKnownCountries.includes(marker.country))
                .map((marker) => {
                  const markerColor = getMarkerColor(marker.country);
                  return (
                    <Marker key={marker.country} coordinates={marker.coordinates}>
                      <g>
                        {/* Lingkaran luar transparan — opsional, bisa disesuaikan atau dihapus */}
                        <circle
                          cx={0}
                          cy={0}
                          r={8}
                          fill="none"
                          stroke={markerColor}
                          strokeWidth={2}
                          opacity={0.4}
                        />
                        {/* Titik utama marker */}
                        <circle
                          cx={0}
                          cy={0}
                          r={5}
                          fill={markerColor}
                          stroke="#ffffff"
                          strokeWidth={1.5}
                          style={{
                            filter: `drop-shadow(0 2px 4px ${markerColor}66)`,
                          }}
                        />
                      </g>
                      <text
                        textAnchor="middle"
                        y={-12}
                        style={{
                          fontSize: '11px',
                          fontWeight: '600',
                          fill: '#1f2937',
                          pointerEvents: 'none',
                          textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                        }}
                      >
                        {marker.name}
                      </text>
                    </Marker>
                  );
                })}
              </ComposableMap>

              {/* Tooltip negara yang di-hover */}
              {hoveredCountry && hoveredCountry !== 'XXX' && (
                <div
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    backgroundColor: '#1f2937',
                    color: '#fff',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    zIndex: 10,
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                  }}
                >
                  {hoveredCountry}
                </div>
              )}
            </div>
          </div>

          <div
            style={{
              marginTop: '1.5rem',
              fontSize: '0.875rem',
              color: '#6b7280',
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
              flexWrap: 'wrap',
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center' }}>
              <span
                style={{
                  display: 'inline-block',
                  width: '10px',
                  height: '10px',
                  backgroundColor: '#4ade80',
                  marginRight: '6px',
                  borderRadius: '50%',
                  border: '2px solid #fff',
                  boxShadow: '0 0 4px #4ade8099',
                }}
              ></span>
              Negara yang diminati
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center' }}>
              <span
                style={{
                  display: 'inline-block',
                  width: '10px',
                  height: '10px',
                  backgroundColor: '#fde047',
                  marginRight: '6px',
                  borderRadius: '50%',
                  border: '2px solid #fff',
                  boxShadow: '0 0 4px #cfde4a99',
                }}
              ></span>
              Netral
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center' }}>
              <span style={{ display: 'inline-block', width: '12px', height: '12px', backgroundColor: '#e5e5e5', marginRight: '6px', borderRadius: '2px' }}></span>
              Tidak ada penilaian
            </span>
            
          </div>
        </div>

        {/* Bagian Daftar Game Kesukaan */}
{/* Bagian Daftar Game Kesukaanku */}<div style={{ marginTop: '3rem', textAlign: 'center' }}>
  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1.25rem' }}>
    8 Game yang Kusukai karena Pengalaman Bermainnya
  </h3>
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
      gap: '1.25rem',
      maxWidth: '900px',
      margin: '0 auto',
      padding: '0 0.5rem',
    }}
  >
    {[
      { title: 'Cosmology of Kyoto', image: cosmoImg, rating: 5.0 },
      { title: 'Faith: The Unholy Trinity', image: faithImg, rating: 4.0 },
      { title: 'Fatal Frame: Maiden of Black Water', image: fatalImg, rating: 4.5 },
      { title: 'Feign', image: feignImg, rating: 4.0 },
      { title: 'Outbrk', image: outbrkImg, rating: 4.0 },
      { title: 'Remothered: Tormented Fathers', image: stormenImg, rating: 4.5 },
      { title: 'Rule of Rose', image: ruleImg, rating: 4.5 },
      { title: 'Tiny Rails', image: tinyImg, rating: 4.5 }
    ].map((game, index) => (
      <div key={index}>
        <div
          style={{
            
            position: 'relative',
            borderRadius: '8px',
            overflow: 'hidden',
            width: '100%',
            paddingTop: '135%',
            cursor: 'pointer',
            backgroundImage: `url(${game.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.4)';
            e.currentTarget.style.filter = 'saturate(0.5)';
            const overlay = e.currentTarget.querySelector('.game-overlay');
            if (overlay) {
              overlay.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
              overlay.style.opacity = '1';
              overlay.style.transform = 'translateY(0)';
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';
            e.currentTarget.style.filter = 'saturate(1)';
            const overlay = e.currentTarget.querySelector('.game-overlay');
            if (overlay) {
              overlay.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
              overlay.style.opacity = '0';
              overlay.style.transform = 'translateY(100%)';
            }
          }}
        >
          {/* Overlay untuk judul + ikon — disembunyikan secara default */}
          <div
            className="game-overlay"
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
              padding: '0.75rem 0.5rem',
              textAlign: 'center',
              color: '#fff',
              fontSize: '0.85rem',
              fontWeight: '600',
              textShadow: '0 1px 2px rgba(0,0,0,0.8)',
              backdropFilter: 'blur(2px)',
              transition: 'opacity 0.25s ease, transform 0.25s ease',
              opacity: 0,
              transform: 'translateY(100%)',
            }}
          >
            
            {game.title}
            <div style={{ marginTop: '0.35rem', display: 'flex', justifyContent: 'center', gap: '0.25rem' }}>
              <img
                src={bookmarkHeart}
                alt="Favorite"
                style={{
                  width: '16px',
                  height: '16px',
                  filter: 'brightness(0) saturate(100%) invert(29%) sepia(87%) saturate(4536%) hue-rotate(346deg) brightness(95%) contrast(93%)' /* merah */
                }}
              />
              <img
                src={gameIcon}
                alt="GameIcon"
                style={{
                  width: '16px',
                  height: '16px',
                  filter: 'brightness(0) saturate(100%) invert(48%) sepia(77%) saturate(2476%) hue-rotate(76deg) brightness(98%) contrast(91%)' /* hijau */
                }}
              />
              {/* Star Rating SVG */}
              <div style={{ display: 'flex', gap: '2px' }}>
                {[...Array(5)].map((_, i) => {
                  const starValue = game.rating - i;
                  if (starValue >= 1) {
                    // Full star
                    return (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24">
                        <path fill="#FFD700" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    );
                  } else if (starValue > 0) {
                    // Half star
                    return (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24">
                        {/* Left half filled */}
                        <defs>
                          <clipPath id={`clip-left-${index}-${i}`}>
                            <rect x="0" y="0" width="12" height="24" />
                          </clipPath>
                        </defs>
                        <path
                          clipPath={`url(#clip-left-${index}-${i})`}
                          fill="#FFD700"
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                        {/* Right half outline */}
                        <path
                          fill="none"
                          stroke="#ccc"
                          strokeWidth="1.5"
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                    );
                  } else {
                    // Empty star
                    return (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24">
                        <path fill="none" stroke="#ccc" strokeWidth="1.5" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
<div style={{ marginTop: '2rem', textAlign: 'center' }}>
  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
    Dukung Pembangunan Yayasan Tunarungu Kebaikan Rahman
  </h3>
  <div style={{ maxWidth: '800px', margin: '0 auto', border: '1px solid #e5e7eb', borderRadius: '12px', overflow: 'hidden' }}>
    <iframe
      src="https://www.wishsite.net/embed/crfpxrlp"
      style={{ 
        width: '100%', 
        height: '500px', 
        border: 'none',
        minHeight: '400px'
      }}
      title="Wish List - Yayasan Tunarungu Kebaikan Rahman"
    ></iframe>
  </div>
</div><br/>
<p>Ini adalah halaman pribadi yang berisi tentang diriku. Harapannya, melalui informasi ini, pembaca bisa lebih mengenal dan merasa lebih dekat denganku. Setelah ini, tersedia pula halaman khusus yang berisi data profesional terkait pekerjaan!</p>
        <div className={styles.NavButton_UniqueContainer_2026}>
          <div className={styles.NavButton_TextGroup_LeftAligned_8a3f}>
            <span className={styles.NavButton_Title_NextLabel_c9e7}>Next</span>
            <a href="/work" className={styles.NavButton_Link_GettingStarted_d2b1}>
              Work record »
            </a>
          </div>
        </div>
      </div>
    </>
  );
}