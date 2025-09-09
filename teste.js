async function getRepos(userName) {
    const response = fetch(`https://api.github.com/users/${userName}/repos`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    })
}