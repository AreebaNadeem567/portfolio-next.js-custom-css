// components/Footer.js
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>&copy; 2024 Areeba Nadeem. All rights reserved.</p>
        <p>Built with ❤️ using Next.js</p>
      </div>
    </footer>
  );
};

export default Footer;