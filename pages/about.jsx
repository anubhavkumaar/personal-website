const AboutPage = () => {
  return (
    <>
    <h3>🔭I am a dedicated and dynamic individual with a passion for problem-solving. 
      <br></br>Through my experience as a software developer and data analyst, 
      <br></br><br></br>🤝I have cultivated a composed and consistent approach to tackling challenges.
      <br></br>I possess expertise in tech management, public speaking, problem-solving, 
      and team building, complemented by excellent communication and computer skills.</h3>

    <h3><br></br>🌱 I’m currently learning Data Science</h3>
    
    <h3><br></br>📫 How to reach me avegganorkar@gmail.com</h3>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
