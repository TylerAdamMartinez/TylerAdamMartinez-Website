export const GITHUB_LOGIN = "tyleradammartinez";

export const getGithubReposRequest = async (githubUser) => {
    let GitHubResponse = await fetch(`https://api.github.com/users/${githubUser}/repos`);
    let GitHubResponseinJSON = await GitHubResponse.json();
    return GitHubResponseinJSON;
};

export const getGithubRepoLanguageRequest = async (githubUser, githubRepo) => {
    let languages = await fetch(`https://api.github.com/repos/${githubUser}/${githubRepo}/languages`)
    let languagesJSON = languages.json();
    return languagesJSON;
};


export default getGithubReposRequest;