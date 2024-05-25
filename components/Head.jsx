import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="I am a dedicated and dynamic individual with a passion for problem-solving. Through my experience as a software developer and data analyst during internships, I have cultivated a patient and consistent approach to tackling challenges. I possess expertise in tech management, public speaking, problem-solving, and team building, complemented by excellent communication and computer skills. These qualities make me a valuable asset."
      />
      <meta
        name="keywords"
        content="portfolio, aveg-ganorkar"
      />
      <meta property="og:title" content="Aveg Ganorkar's Portfolio" />
      <meta
        property="og:description"
        content="A developer building solutions for real life problems."
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Aveg Ganorkar',
};
