$(function (){
   const gitHubCall = fetch('https://api.github.com/users/fernandolopez32/events/public', {
        headers: {
            'Authorization': 'token' + GIT_HUB_TOKEN
        }
   }).then(response => response.json())
        .then( data => console.log(data[0].created_at.split("T")[0]))
        .catch( error => console.error(error));

    function getLastCommit(username){
        fetch(`https://api.github.com/users/${username}/events/public`, {
            headers: {'Authorization': 'GIT_HUB_TOKEN'}
        }).then( response => response.json())
            .then( username => { console.log(username[0].created_at)
                console.log(username[0].payload.commits[0].message)})
            .catch( error => console.error(error));
    }

    console.log(getLastCommit(fernandolopez32))


});







