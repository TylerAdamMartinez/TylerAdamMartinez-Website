export const GITHUB_LOGIN = "tyleradammartinez";
import GitHubReposJSON from "../assets/files/github_repos.json" assert { type: "json" };

export const getGithubReposRequest = async (githubUser) => {
    let GitHubResponseinJSON;
    await fetch(`https://api.github.com/users/${githubUser}/repos`)
        .then((response) => {
        if(response.status === 200) {
            GitHubResponseinJSON = response.json();
        } else {
            console.log(`Github API failed to load ${githubUser}'s repos.`);
            console.log(`Load ${ githubUser } 's Github repos from local .json file`);
            GitHubResponseinJSON = GitHubReposJSON;
        }
    })
    .catch(() => {
        console.log(`Github API failed to load ${githubUser}'s repos.`);
        console.log(`Load ${ githubUser } 's Github repos from local .json file`);
        GitHubResponseinJSON = GitHubReposJSON;
    });
    return GitHubResponseinJSON;
};


const GitHubRepoLanguagesJSON = (githubRepo) => {
    let languageKey;

    languageKey = "unknown";

    GitHubReposJSON.forEach((repo) => {
        if (repo.name == githubRepo) {
            languageKey = repo.language;
        }
    });

    let languagesJSON =  {};
    languagesJSON[languageKey] = 0;   

    return languagesJSON;
}

export const getGithubRepoLanguageRequest = async (githubUser, githubRepo) => {
    let languagesJSON = {};
    let returnRequest = [];
    await fetch(`https://api.github.com/repos/${githubUser}/${githubRepo}/languages`)
        .then((response) => {
        if(response.status === 200) {
            languagesJSON = response.json();
            returnRequest.push(languagesJSON.blob());
            returnRequest.push(Object.keys(languagesJSON).length);
        } else {
            console.log(`Github API failed to load ${githubUser}'s repo ${githubRepo}`);
            console.log(`Load ${githubUser}'s Github repo ${githubRepo} main language from local .json file`);
            languagesJSON = GitHubRepoLanguagesJSON(githubRepo);
            returnRequest.push(languagesJSON);
            returnRequest.push(Object.keys(languagesJSON).length);   
        }
    })
    .catch(() => {
        console.log(`Github API failed to load ${githubUser}'s repo ${githubRepo}`);
        console.log(`Load ${githubUser}'s Github repo ${githubRepo} main language from local .json file`);
        languagesJSON = GitHubRepoLanguagesJSON(githubRepo); 
        returnRequest.push(languagesJSON);
        returnRequest.push(Object.keys(languagesJSON).length);
    });

    return returnRequest;
};

export default getGithubReposRequest;