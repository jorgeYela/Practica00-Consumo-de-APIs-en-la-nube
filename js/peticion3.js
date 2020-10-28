function started(){
    console.log('se cargo pagina 3...');
    console.log(document.cookie);
    var newSearch = document.cookie;
    cargarDatosST(newSearch);
}
function cargarDatosST(search) {
    let url = `https://theaudiodb.com/api/v1/json/1/discography.php?s=${search}`;
    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();
    api.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
            let datos = JSON.parse(this.responseText);
            console.log(datos);
            var detalles = "";
            for(var prop in datos.album){
                detalles += 
                "<tr>" +
                    "<th id='albumD'>" + validacion(datos.album[prop].strAlbum) + "</th>" +
                    "<th id='yearD'>" + validacion(datos.album[prop].intYearReleased) + "</th>" +
                "</tr>";
            }
            document.getElementById("disc").innerHTML = detalles;
        }
    }
    let urlA = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${search}`;
    const apiA = new XMLHttpRequest();
    apiA.open('GET', urlA, true);
    apiA.send();
    apiA.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4) {
            let data = JSON.parse(this.responseText);
            console.log(data.artists)
            for(var i in data.artists){
                var img = document.getElementById("img3");
                img.src = `${data.artists[i].strArtistClearart}`;
            }
        }
    }
}
function validacion(valor) {
    if(String(valor) == "null") {
        valor = "No Data";
        return valor;
    } else if (String(valor) == "") {
        valor = "No Data";
        return valor;
    } else {
        return valor;
    }
}