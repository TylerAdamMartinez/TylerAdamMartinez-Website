const getGithubPeopleRequest = async (githubUser) => {
    let GitHubResponse = await fetch(`https://api.github.com/users/${githubUser}`);
    let GitHubResponseinJSON = await GitHubResponse.json();
    return GitHubResponseinJSON;
};

const topBar = ((githubUser) => {
    let GithubProfile = getGithubPeopleRequest(githubUser);
    GithubProfile.then((GithubPeoplesData) => {
        let public_repos = document.querySelector("#topBar h4");
        let public_reposURL = document.createElement('a');
        public_reposURL.setAttribute("href", `${GithubPeoplesData.html_url}?tab=repositories&type=public`);
        public_reposURL.textContent = `Public Repos: ${GithubPeoplesData.public_repos}`;
        public_repos.appendChild(public_reposURL);
    });
})("TylerAdamMartinez");