import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div id="hero" className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.gridContainer}>
          {/* Text Section */}
          <div className={styles.textSection}>
            <h1 className={styles.title}>
              <p>Hello, I&apos;m</p>
              <span className={styles.highlightedText}>Areeba Nadeem</span>
              <p>Frontend Developer</p>
            </h1>
            <p className={styles.description}>
              I&apos;m a passionate developer specializing in web development
              with a focus on creating dynamic and responsive applications. I
              love bringing ideas to life with code. Let&apos;s connect and
              build something amazing together!
            </p>
            <Link href="#contact">
              <button className={styles.contactButton}>
                Let&apos;s Contact
              </button>
            </Link>
          </div>

          {/* Image Section */}
          <div className={styles.imageSection}>
            <Image
              src="/image.jpg"
              alt="Hero"
              width={192}
              height={200}
              className={styles.heroImage}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;