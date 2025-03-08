import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'anubhavkumar.com',
    href: 'https://anubhavkumaar.in',
  },
  {
    social: 'email',
    link: 'anubhavkumaaar@gmail.com',
    href: 'mailto:anubhavkumaaar@gmail.com',
  },
  {
    social: 'github',
    link: 'anubhavv',
    href: 'https://github.com/anubhavkumaar',
  },
  {
    social: 'linkedin',
    link: 'anubhav-kumar',
    href: 'https://www.linkedin.com/in/anubhavkumaar/',
  },
  {
    social: 'twitter',
    link: 'KumarAnubhav',
    href: 'https://www.twitter.com/theanubhavkumar',
  },
  {
    social: 'instagram',
    link: 'anubhav741',
    href: 'https://www.instagram.com/theanubhavkumar',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
