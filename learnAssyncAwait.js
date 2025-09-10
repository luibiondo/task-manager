async function getRepos(userName) {
    const response = await fetch(`https://api.github.com/users/${userName}/repos`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    })
    const data = await response.json()

    for (const item of data) {
        console.log(item.name)    
    } 
}

getRepos("luibiondo")