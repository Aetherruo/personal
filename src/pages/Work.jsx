import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import * as styles from './Work.module.css';
import warningIcon from '../assets/identity.svg';
import workIcon from '../assets/work.svg';  // pastikan path benar
import schoolIcon from '../assets/school.svg'; 
import DegreeIcon from '../assets/degree.svg'; 
import Star from '../assets/star.svg'
import Diamond from '../assets/diamond.svg'
import Url from '../assets/url.svg'
import Competition from '../assets/competition.svg'
import number from '../assets/number.svg'
import project from '../assets/project.svg'

export default function Work() {
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
        <meta name="robots" content="noindex" />
        <meta name="description" content="blablalballa" />
        <meta property="og:title" content="kdsfjaklfjskf" />
      </Helmet>
      <div className={styles.fadeOverlay}></div>
      <div className={styles.container} ref={textRef}>
        <h2 className={styles.noticeHeader}>
          <span className={styles.divider}></span>
          <img src={warningIcon} alt="Warning" className={styles.warningIcon} />
           ‎ Identitas
        </h2>
        <p>Ali Rahman (علي رحمن) adalah pengusaha muda dan Founder & CEO PT Kaji Mulia Rahman, perusahaan pengembang aplikasi berbasis di Indonesia. Ia juga aktif sebagai anggota Partai Gelora Indonesia di Kabupaten Banjar dan mengembangkan proyek personal branding melalui platform digital.
        </p>
        <h2 className={styles.noticeHeader}> 
          <span className={styles.divider}></span>
          <img src={workIcon} alt="Work" className={styles.warningIcon} />
           ‎ Karier
        </h2>
        <section className={styles.Title} aria-label="Predikat">
          <p>
          ● Desember 2025 ~ Sekarang,
          PT Kaji Mulia Rahman<br/>
          Perusahaan Perseorangan bergerak dibidang pengembangan aplikasi<br/>
         <img 
            src={Star} 
            alt="Star" 
            style={{ width: '16px', height: '16px', display: 'inline', margin: '0 4px 0 0' }} 
          />Menjabat sebagai Founder dan CEO
          ‎<img 
            src={number} 
            alt="number" 
            style={{ width: '16px', height: '16px', display: 'inline', margin: '0 4px 0 0' }} 
          /> NIB: 0712250021851
          </p>
          <p>
          ● Desember 2025 ~ Sekarang,
          Partai Politik Gelombang Rakyat Indonesia<br/>
          Partai Politik Provinsi Kalimantan Selatan daerah Kota Banjarbaru sekitarnya<br/>
         <img 
            src={Star} 
            alt="Star" 
            style={{ width: '16px', height: '16px', display: 'inline', margin: '0 4px 0 0' }} 
          />Menjabat sebagai Anggota
          ‎<img 
            src={number} 
            alt="number" 
            style={{ width: '16px', height: '16px', display: 'inline', margin: '0 4px 0 0' }} 
          /> Nomor KTA: 630305100220
          </p>
           <p>
          ● Januari 2026 ~ Sekarang,
          Perkumpulan Insan Katiga Mandiri<br/>
          Perkumpulan Insan Katiga Mandiri merupakan komunitas kompetensi K3 melalui pendidikan, pelatihan, dan kegiatan sosial.<br/>
         <img 
            src={Star} 
            alt="Star" 
            style={{ width: '16px', height: '16px', display: 'inline', margin: '0 4px 0 0' }} 
          />Menjabat sebagai Anggota
          ‎<img 
            src={number} 
            alt="number" 
            style={{ width: '16px', height: '16px', display: 'inline', margin: '0 4px 0 0' }} 
          /> Nomor Anggota: IKM20260081
          </p>
        </section>
        <h2 className={styles.noticeHeader}> 
          <span className={styles.divider}></span>
          <img src={schoolIcon} alt="School" className={styles.warningIcon} />
           ‎ Pendidikan
        </h2>
        <section className={styles.academic} aria-label="Akademik">
        <p>
          ● Juni 2024 ~ Juni 2027 (Perkiraan),
          SMK PGRI 1 Martapura<br/>
          Sekolah Menengah Kejuruan, Teknik Komputer dan Jaringan<br/>
         <img 
            src={Star} 
            alt="Star" 
            style={{ width: '16px', height: '16px', display: 'inline', margin: '0 4px 0 0' }} 
          />
          <a 
            href="../sert-smk.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: '#3b82f6', textDecoration: 'underline', fontSize: '0.9em' }}
          >
            Piagam Penghargaan atas Prestasi sebagai Terbaik Ⅰ Kelas Teknik Komputer dan Jaringan Semester Genap Tahun Pelajaran 2024/2025
            <img src={Url} alt="Url" className={styles.Url} />
          </a> <br/>
          <img src={Diamond} alt="Diamond" style={{ width: '16px', height: '16px', display: 'inline', margin: '0 4px 0 0' }} />‎Perakitan & Perawatan Komputer, Jaringan Komputer, Pemrograman & Otomasi Dasar, Administrasi Komputer & Jaringan
        </p>
        <p>
          ● September 2020 ~ Mei 2024,
          Pondok Pesantren Darussalam Martapura<br/>
          Awwaliyyah 2 ~ Wustho 1 Putra<br/>
          <img src={Star} alt="Star" style={{ width: '16px', height: '16px', display: 'inline', margin: '0 4px 0 0' }} />‎Menjabat sebagai salah satu Wakil Ketua Kelas dengan ±100 Santri
           <br/>
          <img src={Diamond} alt="Diamond" style={{ width: '16px', height: '16px', display: 'inline', margin: '0 4px 0 0' }} />‎Administrasi Kelas, Pengambilan Keputusan, Tanggung Jawab, Inisiatif 
        </p>
        <p>
          ● XXXX ~ Mei 2024,
          Pusat Kegiatan Belajar Masyarakat Harapan Baru<br/>
          Paket B<br/>
          <img src={Diamond} alt="Diamond" style={{ width: '16px', height: '16px', display: 'inline', margin: '0 4px 0 0' }} />‎Literasi Dasar, Kemampuan Belajar Mandiri, Disiplin & Tanggung Jawab Akademik
        </p>
        </section>
        <section className={styles.nonAcademic} aria-label="Non-akademik">
        <p>
          ● Juni ~ Juli 2025, PeerMentor.Id, Pengajar: I Putu Adi Ardana Yasa<br/>
          Business Class Competition Batch 1<br/>
          <img src={Diamond} alt="Diamond" style={{ width: '16px', height: '16px', display: 'inline', margin: '0 4px 0 0' }} />‎Analisis Strategis & Pemecahan Masalah, Perencanaan Bisnis & Pengembangan Solusi, Penyusunan Proposal Profesional, Desain Presentasi & Komunikasi Visual, Kolaborasi Tim & Manajemen Peran
        </p>
        <p>
          ● Mei 2025, LPK Adamssein Institute<br/>
          Pelatihan Perjalanan Penemuan Jati Diri<br/>
          <img src={Diamond} alt="Diamond" style={{ width: '16px', height: '16px', display: 'inline', margin: '0 4px 0 0' }} />‎Kesadaran Diri, Pengambilan Keputusan Berbasis Nilai, Refleksi Diri & Introspeksi, Jurnal Menulis sebagai Alat Pertumbuhan Diri, Manajemen Emosi & Ketakutan, Perencanaan Hidup Berbasis Tujuan, Ketahanan Mental & Ketegasan Diri, Pertumbuhan Pribadi Berkelanjutan
        </p>
        <p>
          ● Mei 2025, PT Teknologi Edukasi Indonesia<br/>
          Mini Project-based Internship Digital Marketing<br/>
          <img src={Diamond} alt="Diamond" style={{ width: '16px', height: '16px', display: 'inline', margin: '0 4px 0 0' }} />‎Pemahaman Dasar Digital Marketing, Search Engine Optimization, Social Media Marketing, Email Marketing, Pemahaman Digital Marketing Funnel
        </p>
        <p>
          ● Februari & Juli 2025, PT Revolusi Cita Edukasi<br/>
          Mini Class: Intro to Data Analyst, Digital Marketing<br/>
          <img src={Diamond} alt="Diamond" style={{ width: '16px', height: '16px', display: 'inline', margin: '0 4px 0 0' }} />‎Memahami proses dasar analisis data, Menganalisis data sederhana di spreadsheet, Membuat visualisasi data paling dasar, Mengenal saluran dasar pemasaran digital, Mengukur kinerja kampanye dengan metrik dasar
        </p>
        <p>
          ● Agustus & Desember 2025, Yayasan Pusat Pembelajaran Nusantara<br/>
          Pendidikan dan Pelatihan Predikat Kompetensi Certified Fundamental Tax, Certified Indonesian Journalist, Certified Professional Writer<br/>
          <img src={Diamond} alt="Diamond" style={{ width: '16px', height: '16px', display: 'inline', margin: '0 4px 0 0' }} />‎Siaran pers, Memahami dasar Administrasi perpajakan, Memahami Peraturan Dasar Pajak Indonesia, Meninjau Dokumen Hukum, Jurnalisme, Pembelajaran Mandiri & Membaca Dokumentasi
        </p>
        <p>
          ● Agustus 2025, PT Self Development Indonesia<br/>
          Pendidikan dan Pelatihan Predikat Kompetensi Certified Public Relation Professional<br/>
          <img src={Diamond} alt="Diamond" style={{ width: '16px', height: '16px', display: 'inline', margin: '0 4px 0 0' }} />‎Memahami definisi dan ruang lingkup public relations secara profesional, Menyusun naskah kehumasan sederhana untuk membangun citra atau branding perusahaan
        </p>
        </section>
        <h2 className={styles.noticeHeader}> 
          <span className={styles.divider}></span>
          <img src={DegreeIcon} alt="Degree" className={styles.warningIcon} />
           ‎ Predikat
        </h2>
        <section className={styles.Title} aria-label="Predikat">
        <p>
          ● Certified Fundamental Tax<br/>
          Credential <a 
  href="../cftax.pdf" 
  target="_blank" 
  rel="noopener noreferrer" 
  style={{ color: '#3b82f6', textDecoration: 'underline', fontSize: '0.9em' }}
>ID 288/C.FTAX/VII/P.S/ARLC/I/2025 <img src={Url} alt="Url" className={styles.Url} /> </a> <br/>
          Issued Agustus 2025, AR-Learning Center/Yayasan Pusat Pembelajaran Nusantara<br/>
        </p>
        <p>
          ● Certified Public Relation Professional<br/>
          Credential <a 
  href="../cprp.pdf" 
  target="_blank" 
  rel="noopener noreferrer" 
  style={{ color: '#3b82f6', textDecoration: 'underline', fontSize: '0.9em' }}
>ID 006/CPRP/SDI-ON/VIII/2025</a> <img src={Url} alt="Url" className={styles.Url} /><br/>
          Issued Agustus 2025, PT Self Development Indonesia<br/>
        </p>
        <p>
          ● Certified Indonesian Journalist<br/>
          Credential <a 
  href="../cij.pdf" 
  target="_blank" 
  rel="noopener noreferrer" 
  style={{ color: '#3b82f6', textDecoration: 'underline', fontSize: '0.9em' }}
>ID 514/C.IJ/II/P.S/ARLC/XII/2025 <img src={Url} alt="Url" className={styles.Url} /> </a> <br/>
          Issued Desember 2025, AR-Learning Center/Yayasan Pusat Pembelajaran Nusantara<br/>
        </p>
        <p>
          ● Certified Professional Writer<br/>
          Credential <a 
  href="../cpw.pdf" 
  target="_blank" 
  rel="noopener noreferrer" 
  style={{ color: '#3b82f6', textDecoration: 'underline', fontSize: '0.9em' }}
>ID 536/C.PW/II/P.S/ARLC/XII/2025 <img src={Url} alt="Url" className={styles.Url} /> </a>  <br/>
          Issued Desember 2025, AR-Learning Center/Yayasan Pusat Pembelajaran Nusantara<br/>
        </p>
        </section>
        <h2 className={styles.noticeHeader}> 
          <span className={styles.divider}></span>
          <img src={project} alt="Project" className={styles.warningIcon} />
           ‎ Proyek
        </h2>
        <section className={styles.Title} aria-label="Predikat">
          <p>
          ● Oktober 2024 ~ Sekarang,
          Personal Website & Dokumentasi<br/>
          Dikembangkan dengan tujuan membangun Personal Branding, dan menjadikannya sebagai Passive Income<br/>
          </p>
          <p>
          ● November 2024 ~ Agustus 2025,
          Abandoned School Studio & Ciptaan Makna Tunggal Team<br/>
          Membentuk kelompok pengembangan game 2D, 3D, dan pixel menggunakan Godot dan RPG Maker<br/>
          </p>
          <p>
          ● Februari 2025 ~ Sekarang (Hiatus),
          100% Wolf Wiki Fandom Bahasa Indonesia<br/>
          Mengelola dan menulis ±300 artikel sebagai bagian dari Bureaucrat Internasional Fandom, satu-satunya perwakilan dari Indonesia<br/>
          </p>
          <p>
          ● Oktober 2024 ~ Sekarang (Hiatus),
          Instagram Creator of My Little Pony Edit Picture (hobi)<br/>
          Mengelola dan membangun komunitas dengan identitas Creator My Little Pony Edit Picture<br/>
          </p>
        </section>
        <h2 className={styles.noticeHeader}> 
          <span className={styles.divider}></span>
          <img src={Competition} alt="Competition" className={styles.warningIcon} />
           ‎ Kompetisi
        </h2>
         <div className={styles.tableContainer}>
      <table className={styles.customTable}>
        <thead>
          <tr>
            <th>Years</th>
            <th>Competition Name</th>
            <th>Competition Organizer</th>
            <th>Rank</th>
          </tr>
        </thead>
        <tbody>
          {/* Contoh baris data — nanti bisa kamu isi sendiri */}
          <tr>
            <td>2025</td>
            <td>National Essay Competition Sociology Olympiad 2025</td>
            <td>Sekolah Tinggi Ilmu Sosial dan Ilmu Politik Raja Haji </td>
            <td>6</td>
          </tr>
          <tr>
            <td>2025</td>
            <td>National Essay Competition BluFest 2025</td>
            <td>Universitas Budi Luhur</td>
            <td>Winner</td>
          </tr>
          <tr>
            <td>2025</td>
            <td>National Scientific Paper Competition HKN 2025</td>
            <td>Politeknik Kesehatan Denpasar </td>
            <td>11</td>
          </tr>
          <tr>
            <td>2025</td>
            <td>National Essay Competition KBKR FAIR 2025</td>
            <td>Universitas Negeri Jakarta </td>
            <td>32</td>
          </tr>
          <tr>
            <td>2025</td>
            <td>National Essay Competition: GULUNG 2025</td>
            <td>Universitas Diponegoro </td>
            <td>103</td>
          </tr>
          <tr>
            <td>2025</td>
            <td>National Essay Competition Healthy Soils for Healthy Cities 2025</td>
            <td>Balai Perakitan dan Pengujian Tanah dan Pupuk Kementerian Pertanian </td>
            <td>Participant</td>
          </tr>
          <tr>
            <td>2025</td>
            <td>International Essay Competition Milad Muhammadiyah 113</td>
            <td>Pimpinan Cabang Istimewa Muhammadiyah & Pimpinan Cabang Istimewa 'Aisyiyah Pakistan </td>
            <td>Participant</td>
          </tr>
          <tr>
            <td>2025</td>
            <td>National Essay Competition LPM REPUBLICA 2025</td>
            <td>Universitas Lampung </td>
            <td>Participant</td>
          </tr>
          <tr>
            <td>2025</td>
            <td>National Essay Competition: POW Competition 2025</td>
            <td>Universitas Muhammadiyah Pekajangan Pekalongan</td>
            <td>Participant</td>
          </tr>
          <tr>
            <td>2025</td>
            <td>National Essay Competition Semarak Festival Keilmiahan 2025</td>
            <td>Universitas Sebelas Maret </td>
            <td>Participant</td>
          </tr>
          <tr>
            <td>2025</td>
            <td>National Essay Competition Semarak Karya 2025</td>
            <td>Universitas Diponegoro </td>
            <td>Participant</td>
          </tr>
          <tr>
            <td>2025</td>
            <td>National Essay Competition UPNYK FAIR 2025</td>
            <td>Universitas Pembangunan Nasional Veteran Yogyakarta </td>
            <td>Participant</td>
          </tr>
          <tr>
            <td>2025</td>
            <td>Writing Competition WaraStory</td>
            <td>Universitas Ciputra </td>
            <td>Participant</td>
          </tr>
          <tr>
            <td>2026</td>
            <td>National Nutrition Research Nourish Competition 2026</td>
            <td>Institut Ilmu Kesehatan Nahdlatul Ulama Tuban </td>
            <td>Participant</td>
          </tr>
          {/* Tambahkan baris lain sesuai kebutuhan */}
        </tbody>
      </table>
    </div>
        <p>
          Senang sekali bila ada yang meluangkan waktu membaca riwayat profesional, atau mungkin lebih tepat disebut semi-profesional punya saya. Saya terbuka untuk peluang di posisi yang relevan ataupun hal baru dibidang yang berbeda. Jika tertarik berdiskusi lebih lanjut, silakan menghubungi saya melalui halaman berikutnya. </p>
         <div className={styles.NavButton_UniqueContainer_2026}>
          <div className={styles.NavButton_TextGroup_LeftAligned_8a3f}>
            <span className={styles.NavButton_Title_NextLabel_c9e7}>Next</span>
            <a href="/contact" className={styles.NavButton_Link_GettingStarted_d2b1}>
              Contact Me »
            </a>
          </div>
        </div>
        
      </div>
    </>
  );
}