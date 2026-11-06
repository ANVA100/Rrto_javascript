
const formulario = document.getElementById('formulario');
const mensaje = document.getElementById('mensaje');

const formulario = document.getElementById('formulario');
const mensaje = document.getElementById('mensaje');


const perfilGuardado = JSON.parse(localStorage.getItem('perfil'));
if (perfilGuardado) {
  document.getElementById('nombre').value = perfilGuardado.nombre;
  document.getElementById('correo').value = perfilGuardado.correo;
  document.getElementById('telefono').value = perfilGuardado.telefono;
  document.getElementById('descripcion').value = perfilGuardado.descripcion;
}
formulario.addEventListener('submit', function (evento) {
  evento.preventDefault();

  const perfil = {
    nombre: document.getElementById('nombre').value,
    correo: document.getElementById('correo').value,
    telefono: document.getElementById('telefono').value,
    descripcion: document.getElementById('descripcion').value

  }
}

