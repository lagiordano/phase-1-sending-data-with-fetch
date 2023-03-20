// Add your code here

function submitData (name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({ name: `${name}`, email: `${email}`})
    })
        .then(res => res.json())
        .then(user => document.body.textContent = user.id)
        .catch(error => {
            alert("Whoops, there's been an error!");
            document.body.textContent = error.message;
        })
}