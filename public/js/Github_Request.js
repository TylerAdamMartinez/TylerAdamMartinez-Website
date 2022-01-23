export const GITHUB_LOGIN = "tyleradammartinez";
import GitHubReposJSON from "../assets/files/github_repos.json" assert { type: "json" };

export const getGithubReposRequest = async (githubUser) => {
    let GitHubResponseinJSON;
    await fetch(`https://api.github.com/users/${githubUser}/repos`)
    .then((response) => {
        if(response.ok) {
            GitHubResponseinJSON = response.json();
        }
    })
    .catch(() => {
        console.log(`Github API failed to load ${githubUser}'s repos. Load ${githubUser}'s Github repos from local .json file`);
        GitHubResponseinJSON = GitHubReposJSON;
    });
    return GitHubResponseinJSON;
};

let repoCount = 0;
export const getGithubRepoLanguageRequest = async (githubUser, githubRepo) => {
    let languagesJSON;
    await fetch(`https://api.github.com/repos/${githubUser}/${githubRepo}/languages`)
    .then((response) => {
        if(response.ok) {
            languagesJSON = response.json();
        }
    })
    .catch(() => {
        console.log(`Github API failed to load ${githubRepo} from user ${githubUser}`);
        console.log(`Load ${githubUser}'s Github repos (${githubRepo}) from local .json file`);
        let languageKey = GitHubReposJSON[repoCount]['language'];
        languagesJSON =  {};
        languagesJSON[languageKey] = repoCount;        
        repoCount++;
    });
    return languagesJSON;
};

export default getGithubReposRequest;