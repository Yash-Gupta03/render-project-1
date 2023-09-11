function resetpassword(event){
    event.preventDefault();
    const id = req.headers('id')
    const pass = document.getElementById('password').value;
    const res = axios.post('https://finance-tracker-6m0j.onrender.com/user/resetpassword', {pass}, {headers:{
        id:id,
    }});
    if(res.status == 200){
        alert("Your password has been updated, redirecting to login page");
        window.location.href = "./login.html";

    }

}