import api from './api'

async function userLogin(email, password){

    console.log(email, password)

    const req = await fetch(`${api}/user/signin`, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        senha: password
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type' : 'application/json'
      }
    })
    const res = await req.json()

    if(res.token){
        localStorage.setItem('token', res.token)
        window.location.href = '/home'
    }else{
        window.location.href = '/'
    }
    
}

export default userLogin