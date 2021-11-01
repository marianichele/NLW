const linksSocialMedia = {
  github: "marianichele",
  instagram: "dunichele"
} 

function changeSocialMediaLinks() {
        
  for(let li of socialLinks.children){
  const social = li.getAttribute('class')

    li.children [0].href = `http://${social}.com/${linksSocialMedia[social]}`
         
  } 
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json() ) 
    .then( data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage = data.avatar_url
      userLogin.textContent = data.login

    })
} 


getGitHubProfileInfos() 
