

async function LoginUserDto(){
    let endpoint = 'https://tele2quiz.store/api/auth/login';
    const data = [document.getElementById('email').value, document.getElementById('password')];
    const email_ret = JSON.stringify(data);
    const request = await fetch(endpoint, {
        method: 'POST', 
        body: JSON.stringify(data) });
    const response = await request.json();
    console.log(response)

}

// async function logInPassword{
//     id = document.getElementById('').value
//     let endpoint = 'https://tele2quiz.store/api/users/{id}';
//     const request = await fetch(endpoint, {method: 'GET'});
//     const response = await request.json();
//     console.log(response)
// }

async function CreateUserDto(){
    let endpoint = 'https://tele2quiz.store/api/auth/register'
    const data = [document.getElementById('username').value, document.getElementById('email').value, document.getElementById('password')];
    const json = JSON.stringify(data);
    const request = await fetch(endpoint, {
        method: 'POST', 
        body: JSON.stringify(data)
    })
    const response = await request.json()
    console.log(response)
}