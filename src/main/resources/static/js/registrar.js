$(document).ready(function() {
});


async function  registrarUsuarios(){
    let datos={};
    datos.nombre = document.getElementById('nombre').value;
    datos.apellido = document.getElementById('apellido').value;
    datos.email = document.getElementById('email').value;
    datos.telefono = document.getElementById('telefono').value;
    datos.password = document.getElementById('password').value;
    let repetirpassword = document.getElementById('repetirpassword').value;

    if (repetirpassword != datos.password){
        alert('Las contraseñas deben de ser iguales');
        return;
    }

    const request = await fetch('api/usuarios', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(datos)
    });
    alert('Cuenta creada con éxito');
    window.location.href = 'login.html';
}
