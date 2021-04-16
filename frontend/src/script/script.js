const token = localStorage.getItem('token')

if (token) {
    window.location.href = "info.html";
}

function login() {
    var immatr = document.getElementById("immatr").value;
    var password = document.getElementById("password").value;

    axios.post('http://localhost:5000/employee/login',{
        immatr : immatr,
        password : password
    })
     .then( response => {
         localStorage.setItem('token',response.data)
        window.location.href = "info.html";
     }).catch(err => {
         console.log(err);
     })
}