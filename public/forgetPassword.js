async function forgetpassworddata(event){
    event.preventDefault();
    const email = document.getElementById('email').value;

    const res = await axios.post('https://finance-tracker-6m0j.onrender.com/password/forgotpassword', {email});
    if(res.response == 200){
        alert('Mail sent');
    }
    }