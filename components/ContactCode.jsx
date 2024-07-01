import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'avegganorkar.com',
    href: 'https://avegganorkar.com',
  },
  {
    social: 'email',
    link: 'avegganorkar@gmail.com',
    href: 'mailto:avegganorkar@gmail.com',
  },
  {
    social: 'github',
    link: 'DarakhTech',
    href: 'https://github.com/DarakhTech',
  },
  {
    social: 'linkedin',
    link: 'aveg-ganorkar',
    href: 'https://www.linkedin.com/in/aveg-ganorkar/',
  },
  {
    social: 'twitter',
    link: 'GanorkarAveg',
    href: 'https://www.twitter.com/GanorkarAveg',
  },
  {
    social: 'instagram',
    link: 'aveg741',
    href: 'https://www.instagram.com/aveg741',
  },
  {
    social: 'leetcode',
    link: 'darakhtech',
    href: 'https://leetcode.com/darakhtech/',
  }
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
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
