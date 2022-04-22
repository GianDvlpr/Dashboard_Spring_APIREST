// Call the dataTables jQuery plugin
$(document).ready(function() {
  cargarUsuarios();
  $('#usuarios').DataTable();
  actualizarEmail();
});

function actualizarEmail(){
  document.getElementById('email-user').outerHTML = localStorage.email;
}

function getHeaders(){
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': localStorage.token
  };
}

async function  cargarUsuarios(){
  const request = await fetch('api/usuarios', {
    method: 'GET',
    headers: getHeaders(),
  });
  const usuarios = await request.json();

  let listadoHTML = '';

  for (let usuario of usuarios){

    let botonEliminar = '<a href="#" onclick="eliminarUsuario('+usuario.id+')" class=\"btn btn-danger btn-circle btn-sm\"><i class="fas fa-trash"></i></a>';

    let telefonotxt = usuario.telefono == null ? '-' : usuario.telefono;

    let usuarioHTML = '<tr><td>'+usuario.id+'</td><td>'+usuario.nombre+' '+usuario.apellido+'</td>' +
        '<td>'+usuario.email+'</td>' +
        '<td>'+telefonotxt+'</td>' +
        '<td>'+botonEliminar+'</td>' +
        '</tr>'
        listadoHTML += usuarioHTML;
  }
  document.querySelector('#usuarios tbody').outerHTML = listadoHTML;
}



async function eliminarUsuario(id){
  if (!confirm('Desea eliminar este usuario?')){
    return;
  }
  const request = await fetch('api/usuarios/' + id,  {
    method: 'DELETE',
    headers: getHeaders(),
  });
  document.location.reload();
}