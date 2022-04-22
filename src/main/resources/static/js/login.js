$(document).ready(function() {
});


async function  login(){
    let datos={};
    datos.email = document.getElementById('email').value;
    datos.password = document.getElementById('password').value;

    const request = await fetch('api/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(datos)
    });
    const res = await request.text();
    if (res != 'fallo'){
        localStorage.token = res;
        localStorage.email = datos.email;
        window.location.href = 'usuarios.html';
    }else{
        alert("Credenciales incorrectas");
    }
}
