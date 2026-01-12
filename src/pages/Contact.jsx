// Contact.jsx
import profileImg from '../assets/profile.png';

// Import ikon
import WhatsappIcon from '../assets/icons/whatsapp.svg';
import LinkedInIcon from '../assets/icons/linkedin.png';
import EmailIcon from '../assets/icons/email.png';

import styles from './Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img
          src={profileImg}
          alt="Profile"
          className={styles.profileImage}
        />

        <h1 className={styles.name}>Ali Rahman</h1>

        <div className={styles.socialIcons}>
          <a
            href="https://wa.me/18732800862"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label="WhatsApp"
          >
            <img src={WhatsappIcon} alt="" width="24" height="24" />
          </a>
          <a
            href="https://www.linkedin.com/in/ali-rahman-bjb/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label="LinkedIn"
          >
            <img src={LinkedInIcon} alt="" width="24" height="24" />
          </a>
          <a
            href="mailto:pesan@alirahman.my.id"
            className={styles.iconLink}
            aria-label="Email"
          >
            {/* Tinggi khusus 20px untuk email */}
            <img src={EmailIcon} alt="" width="24" height="20" />
          </a>
        </div>
      </div>
      <p className={styles.notice}>
        Personal website saya masih dalam pengerjaan.
      </p>
    </div>
  );
}