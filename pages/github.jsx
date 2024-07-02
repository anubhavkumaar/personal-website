import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import RepoCard from '../components/RepoCard';
import styles from '../styles/GithubPage.module.css';

const GithubPage = ({ repos, user }) => {
  const theme = {
    level0: '#161B22',
    level1: '#0e4429',
    level2: '#006d32',
    level3: '#26a641',
    level4: '#39d353',
  };
  const githubApiKey = process.env.API_KEY_GITHUB;
  const githubUsername = process.env.NEXT_PUBLIC_GITHUB_USERNAME;


  return (
    <>
      <div className={styles.user}>
        <div>
          <Image
            src={user.avatar_url}
            className={styles.avatar}
            alt={user.login}
            width={50}
            height={50}
          />
          <h3 className={styles.username}>{user.login}</h3>
        </div>
        <div>
          <h3>{user.public_repos} public repos</h3>
        </div>
        <div>
          <h3>22 private repos</h3>
        </div>
      </div>
      <div className={styles.contributions}>
        <GitHubCalendar
          username={githubUsername}
          theme={theme}
          hideColorLegend
          showWeekdayLabels
        />
      </div>
      <div className={styles.container}>
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const githubApiKey = process.env.API_KEY_GITHUB;
  const githubUsername = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
  const userRes = await fetch(
    `https://api.github.com/users/${githubUsername}`,
    {
      headers: {
        Authorization: `token ${githubApiKey}`,
      },
    }
  );
  const user = await userRes.json();

  const repoRes = await fetch(
    `https://api.github.com/users/${githubUsername}/repos?per_page=100`,
    {
      headers: {
        Authorization: `token ${githubApiKey}`,
      },
    }
  );
  let allowedRepo = ["DarakhTech/Discord-Helper-Bot", "DarakhTech/vscode-portfolio", "DarakhTech/India-State-Cities-Database","DarakhTech/OCR-Calculus","DarakhTech/PH526x-Hardvard-Using-Python-for-Research","DarakhTech/Save-As-PDF","DarakhTech/visa-autofill-security-questions-extension","DarakhTech/Web-Scrapping-Python","DarakhTech/yt-chat-analysis"]
  let repos = await repoRes.json();

  // Ensure repos is an array
  if (Array.isArray(repos)) {
    repos = repos
      .filter(r => allowedRepo.includes(r.full_name))
      .sort((a, b) => b.full_name - a.full_name)
      .slice(0, 8);
  } else {
    console.error('Fetched repos data is not an array:', repos);
    repos = [];
  }

  return {
    props: { title: 'GitHub', repos, user },
    revalidate: 10,
  };
}


export default GithubPage;
