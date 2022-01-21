import { getGithubReposRequest, getGithubRepoLanguageRequest, GITHUB_LOGIN } from "/js/Github_Request.js";

const extractRepoData = (element) => {

    let GithubRepo = {
        name: element.name,
        description: element.description,
        url: element.html_url,
        languages: [],
    };

    let repoDiv = document.createElement('div');
    repoDiv.setAttribute("class", "repo");

    getGithubRepoLanguageRequest(GITHUB_LOGIN, element.name).then((data) => {
        
        Object.keys(data).forEach((language) => {
            if(language === "C++") {
                GithubRepo.languages.push("cpp");
            } else {
                GithubRepo.languages.push(language.toLowerCase()); 
            }
        });
        
        let githubRepoNameP = document.createElement("h4");
        githubRepoNameP.setAttribute("class", "githubRepoName");
        let githubRepoName = document.createElement("a");
        githubRepoName.setAttribute("href", `${GithubRepo.url}`);
        githubRepoName.textContent = `${GithubRepo.name}`;
        githubRepoNameP.appendChild(githubRepoName);
        repoDiv.appendChild(githubRepoNameP);
    
        let githubRepoDescription = document.createElement("p");
        githubRepoDescription.textContent = `${GithubRepo.description}`;
        repoDiv.appendChild(githubRepoDescription);
    
        let repoLanguagesDiv = document.createElement("div");
        let languageTitle = document.createElement("p");
        languageTitle.textContent = "languages: ";
        repoLanguagesDiv.appendChild(languageTitle);
        let languageList = document.createElement("ul");
        repoLanguagesDiv.appendChild(languageList);
        GithubRepo.languages.forEach((language) => {
            let languageListItem = document.createElement("li");
            let languageNameP =  document.createElement("p");
            languageNameP.textContent = `${language}`;
            languageListItem.appendChild(languageNameP);
            let githubRepoLanguageImg = document.createElement("img");
            githubRepoLanguageImg.setAttribute("src", `/language_icons/${language}.svg`);
            githubRepoLanguageImg.setAttribute("alt", `${language} Icon`);
            githubRepoLanguageImg.setAttribute("height", "96");
            githubRepoLanguageImg.setAttribute("width", "96");
            languageListItem.appendChild(githubRepoLanguageImg);
            languageList.appendChild(languageListItem);            
        })
        repoDiv.appendChild(repoLanguagesDiv);
    });

    return repoDiv; 
}; 

let data = getGithubReposRequest(GITHUB_LOGIN);
data.then((Data) => {
   
    //<section id="githubRepos">
    let githubReposSection = document.createElement("section");
    githubReposSection.setAttribute("id", "githubRepos");
    
    //<h2 id="githubReposTitle">Github Repositories</h2>
    let githubReposTitle = document.createElement('h2');
    let gethubReposUrl = document.createElement('a');
    gethubReposUrl.textContent = "Github Repositories";
    gethubReposUrl.setAttribute("href", "https://github.com/TylerAdamMartinez?tab=repositories&type=public");
    githubReposTitle.setAttribute("id", "githubReposTitle");
    githubReposTitle.appendChild(gethubReposUrl);
    githubReposSection.appendChild(githubReposTitle);

    //An array of <div class="repo">{github repo element object}</div>
    Data.forEach(element => {
        githubReposSection.appendChild(extractRepoData(element));  
    });

   let container = document.querySelector(".container");
   container.append(githubReposSection);
    //</section>
});

