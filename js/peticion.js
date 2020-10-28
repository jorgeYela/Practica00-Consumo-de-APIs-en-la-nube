document.querySelector('#look').addEventListener('click', function(){
    var search = document.getElementById("search").value;
    obtenerDatos(search);
    crearCookie(search);
});