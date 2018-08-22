const btn = document.getElementById('send')



btn.onclick = function(e){
    e.preventDefault();
    btn.setAttribute("disabled", true);
    document.getElementById('message').innerHTML = 'Sending email...';
    //Wraper of the vanilla JS to send request the server
    fetch('http://142.93.115.171:8999', {
        method: 'POST',
        headers:{
            'accept': 'application/json',
            'content-type': 'application/json'
        },
        credentials: 'include', //allows cookies where we store the sesiones and keep ir alive
        body: JSON.stringify({
            from: document.getElementById('from').value,
            destination: document.getElementById('destination_email').value,
            subject: document.getElementById('subject').value
        })

    })
    .then(result => result.json())
    .then(result => {
        document.getElementById('message').innerHTML = result.message;
        btn.removeAttribute("disabled");
        document.getElementById("form").reset();
    })
    .catch(err => {document.getElementById('message').innerHTML = err.message;
    btn.removeAttribute("disabled")
});
}