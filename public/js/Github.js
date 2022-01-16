const populateGithubProfile = (GithubProfileData) => {
    let githubImgDiv = document.createElement("div");
    githubImgDiv.setAttribute("id", "githubImg");

    let githubInfoDiv = document.createElement("div");
    githubInfoDiv.setAttribute("id", "githubInfo");
    
    let githubImg = document.createElement("img");
    githubImg.setAttribute("src", `${GithubProfileData.avatar_url}`);
    githubImg.setAttribute("alt", `${GithubProfileData.name}'s Profile Picture`);
    githubImg.setAttribute("height", "460");
    githubImg.setAttribute("width", "460");
    githubImgDiv.appendChild(githubImg);

    let githubBio = document.createElement('p');
    githubBio.textContent = `${GithubProfileData.bio}`;
    githubInfoDiv.append(githubBio);
    
    let githubUsername = document.createElement('p');
    githubUsername.textContent = "Github: ";
    let githubUsernameURL = document.createElement('a');
    githubUsernameURL.setAttribute("href", `${GithubProfileData.html_url}`);
    githubUsernameURL.textContent = `@${GithubProfileData.login}`;
    githubUsername.appendChild(githubUsernameURL);
    githubInfoDiv.append(githubUsername);
    
    let githubCompanyURL = document.createElement('a');
    githubCompanyURL.setAttribute("href", "https://www.codestreamstudios.com/");
    let githubCompany = document.createElement('p');
    githubCompany.textContent = "Company: ";
    githubCompanyURL.textContent = `${GithubProfileData.company}`;
    githubCompany.appendChild(githubCompanyURL);
    githubInfoDiv.append(githubCompany);

    let linkedIn = document.createElement('p');
    linkedIn.innerHTML = `LinkedIn: <a href="https://www.linkedin.com/in/tyleradammartinez/">tyleradammartinez</a>`;
    githubInfoDiv.append(linkedIn);

    let email = document.createElement('p');
    email.innerHTML = `Email: <a href="mailto:tyleradammartinez@outlook.com">tyleradammartinez@outlook.com</a>`;
    githubInfoDiv.append(email);

    let githubTitle = document.querySelector('#github');
    githubTitle.append(githubImgDiv);
    githubTitle.append(githubInfoDiv);

};

const GithubProfile = ((githubUser) => {
    let GithubProfile = getGithubPeopleRequest(githubUser);
    GithubProfile.then((GithubPeoplesData) => {
        populateGithubProfile(GithubPeoplesData);
    });
})("TylerAdamMartinez");