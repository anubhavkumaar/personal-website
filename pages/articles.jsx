import ArticleCard from '../components/ArticleCard';
import styles from '../styles/ArticlesPage.module.css';
import { getSkills } from './api/skills.js';
import { getCertificates } from './api/certificates.js';

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

  try {
    const api_skills = await getSkills();
    const api_certificates = await getCertificates();
    
    // const generateData = (items, type) => {
    //   return items.map((item, index) => ({
    //     url: item.icon,
    //     cover_image: item.icon,
    //     title: item.name,
    //     description: item.level ,
    //     page_views_count: item.page_views_count,
    //     public_reactions_count: item.public_reactions_count,
    //     comments_count: item.comments_count
    //   }));
    // };
    const generateData = (items) => {
      return items
        .map((item) => ({
          url: item.icon,
          cover_image: item.icon,
          title: item.name,
          description: item.level,
          page_views_count: item.page_views_count,
          public_reactions_count: item.public_reactions_count,
          comments_count: item.comments_count,
        }))
        .sort((a, b) => parseInt(a.public_reactions_count)- parseInt(b.public_reactions_count));
    };
    
    const data1 = generateData(api_skills, 'Skill');
    const data2 = generateData(api_certificates, 'Certification');

    return {
      props: { title: 'Articles', skills: data1, certificate: data2 },
      revalidate: 60,
    };


  } catch (err) {
    return {
      props: { title: 'Articles', skills: [], certificate: [] },
      revalidate: 60,
    };
  }
}

export default ArticlesPage;
