import ArticleCard from '../components/ArticleCard';
import styles from '../styles/ArticlesPage.module.css';

const ArticlesPage = ({ skills, certificate }) => {
  return (
    <>
      <h2>Skills</h2>
      <div className={styles.container}>
        {skills.map((article) => (
          <ArticleCard key={article.name} article={article} />
        ))}
      </div>
      <h2><br></br><br></br>Certifications</h2>
      <div className={styles.container}>
        {certificate.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {

  const skills = [
    {
      name: "Python",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      link: "https://www.python.org",
      level: 'intermediate',
      page_views_count: '150',
      public_reactions_count: '75',
      comments_count: '10'
    },
    {
      name: "SQL",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      link: "https://www.mysql.com/",
      page_views_count: '120',
      public_reactions_count: '60',
      level: 'intermediate',
      comments_count: '8'
    },
    {
      name: "JavaScript",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      level: 'intermediate',
      page_views_count: '200',
      public_reactions_count: '100',
      comments_count: '20'
    },
    {
      name: "Java",
      link: "https://www.java.com",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      level: 'intermediate',
      page_views_count: '180',
      public_reactions_count: '90',
      comments_count: '15'
    },
    {
      name: "C++",
      link: "https://www.cprogramming.com/",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
      level: 'intermediate',
      page_views_count: '130',
      public_reactions_count: '65',
      comments_count: '9'
    },
    {
      name: "Git & GitHub",
      link: "https://git-scm.com/",
      icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
      level: 'intermediate',
      page_views_count: '170',
      public_reactions_count: '85',
      comments_count: '11'
    },
    {
      name: "MongoDB",
      link: "https://www.mongodb.com/",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      level: 'intermediate',
      page_views_count: '140',
      public_reactions_count: '70',
      comments_count: '10'
    },
    {
      name: "Amazon AWS",
      link: "https://aws.amazon.com",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      level: 'intermediate',
      page_views_count: '190',
      public_reactions_count: '95',
      comments_count: '18'
    },
    {
      name: "SQLite",
      link: "https://www.sqlite.org/",
      icon: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg",
      page_views_count: '110',
      public_reactions_count: '55',
      level: 'intermediate',
      comments_count: '7'
    },
    {
      name: "NumPy",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg",
      link: "https://numpy.org/",
      page_views_count: '160',
      level: 'intermediate',
      public_reactions_count: '80',
      comments_count: '13'
    },
    {
      name: "Pandas",
      link: "https://pandas.pydata.org/",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg",
      page_views_count: '150',
      level: 'intermediate',
      public_reactions_count: '75',
      comments_count: '10'
    },
    {
      name: "Seaborn",
      link: "https://seaborn.pydata.org/",
      icon: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg",
      page_views_count: '130',
      level: 'intermediate',
      public_reactions_count: '65',
      comments_count: '9'
    }
  ];
  
  
  const certifications = [
    {
      link: "websitelink",
      name: "PH526x: Python for Research by Harvard University",
      level:' HarvardX | edX',
      icon: "https://upload.wikimedia.org/wikipedia/commons/8/8f/EdX.svg",
      page_views_count: '200',
      public_reactions_count: '100',
      comments_count: '15'
    },
    {
      link: "websitelink",
      name: "Data Science Certification",
      level: "IBM Coursera",
      icon: "https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg",
      page_views_count: '180',
      public_reactions_count: '90',
      comments_count: '12'
    },
    {
      name: "Databases and SQL for Data Science with Python and Advanced SQL for Data Engineering (Honors)",
      link: "websitelink",
      icon: "https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg",
      level: "IBM | Coursera",
      page_views_count: '220',
      public_reactions_count: '110',
      comments_count: '18'
    },
    {
      name: "Foundations: Data of Google Data Analytics Professional Certificate",
      link: "websitelink",
      icon: "https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg",
      level: "Google | Coursera",
      page_views_count: '190',
      public_reactions_count: '95',
      comments_count: '14'
    },
    {
      name: "Open-Source Software Development, Linux and Git Specialization",
      link: "websitelink",
      icon: "https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg",
      level: "The Linux Foundation | Coursera",
      page_views_count: '210',
      public_reactions_count: '105',
      comments_count: '16'
    }
  ];
  
  
  const generateData = (items, type) => {
    return items.map((item, index) => ({
      url: item.icon,
      cover_image: item.icon,
      title: item.name,
      description: item.level ,
      page_views_count: item.page_views_count,
      public_reactions_count: item.public_reactions_count,
      comments_count: item.comments_count
    }));
  };
  
  const data1 = generateData(skills, 'Skill');
  const data2 = generateData(certifications, 'Certification');

  return {
    props: { title: 'Articles', skills: data1, certificate: data2 },
    revalidate: 60,
  };
}

export default ArticlesPage;
