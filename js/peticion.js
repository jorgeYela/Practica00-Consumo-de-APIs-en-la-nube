document.querySelector('#look').addEventListener('click', function(){
    var search = document.getElementById("search").value;
    obtenerDatos(search);
    crearCookie(search);
});
function obtenerDatos(search){
    let url = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${search}`;
    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();
    api.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
            let datos = JSON.parse(this.responseText);
            console.log(datos);
            var detalles = "";
            for(var prop in datos.artists){
                var img = document.getElementById("img");
                img.src = `${datos.artists[prop].strArtistLogo}`;
                
                let codigo = document.getElementById("artistID");
                codigo.innerHTML = '';
                codigo.innerHTML = `${validacion(datos.artists[prop].idArtist)}`;

                let artistNAME = document.getElementById("artistNAME");
                artistNAME.innerHTML = '';
                artistNAME.innerHTML = `${validacion(datos.artists[prop].strArtist)}`;

                let artistSTRIPPED = document.getElementById("artistSTRIPPED");
                artistSTRIPPED.innerHTML = '';
                artistSTRIPPED.innerHTML = `${validacion(datos.artists[prop].strArtistStripped)}`;

                let artistALTERNATE = document.getElementById("artistALTERNATE");
                artistALTERNATE.innerHTML = '';
                artistALTERNATE.innerHTML = `${validacion(datos.artists[prop].strArtistAlternate)}`;

                let artistLABEL = document.getElementById("artistLABEL");
                artistLABEL.innerHTML = '';
                artistLABEL.innerHTML = `${validacion(datos.artists[prop].strLabel)}`;

                let FormedYear = document.getElementById("FormedYear");
                FormedYear.innerHTML = '';
                FormedYear.innerHTML = `${validacion(datos.artists[prop].intFormedYear)}`;

                let BornYear = document.getElementById("BornYear");
                BornYear.innerHTML = '';
                BornYear.innerHTML = `${validacion(datos.artists[prop].intBornYear)}`;

                let DiedYear = document.getElementById("DiedYear");
                DiedYear.innerHTML = '';
                DiedYear.innerHTML = `${validacion(datos.artists[prop].intDiedYear)}`;

                let youtube = document.getElementById("linkY");
                youtube.innerHTML = '';
                youtube.innerHTML = `<a href='https://www.youtube.com/results?search_query=${search}' target='_blank'>The best of your favorite band here !!</a>`;
                
                let music = document.getElementById("music");
                music.src = `${validacion(datos.artists[prop].strArtistWideThumb)}`;
                
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
function crearCookie(search){
    document.cookie = search;
    console.log(document.cookie)
}
function cargarConCookies() {
    var newSearch = document.cookie;
    let url = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${newSearch}`;
    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();
    api.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
            let datos = JSON.parse(this.responseText);
            console.log(datos);
            var detalles = "";
            for(var prop in datos.artists){

                var img = document.getElementById("img");
                img.src = `${datos.artists[prop].strArtistLogo}`;

                let codigo = document.getElementById("artistID");
                codigo.innerHTML = '';
                codigo.innerHTML = `${validacion(datos.artists[prop].idArtist)}`;

                let artistNAME = document.getElementById("artistNAME");
                artistNAME.innerHTML = '';
                artistNAME.innerHTML = `${validacion(datos.artists[prop].strArtist)}`;

                let artistSTRIPPED = document.getElementById("artistSTRIPPED");
                artistSTRIPPED.innerHTML = '';
                artistSTRIPPED.innerHTML = `${validacion(datos.artists[prop].strArtistStripped)}`;

                let artistALTERNATE = document.getElementById("artistALTERNATE");
                artistALTERNATE.innerHTML = '';
                artistALTERNATE.innerHTML = `${validacion(datos.artists[prop].strArtistAlternate)}`;

                let artistLABEL = document.getElementById("artistLABEL");
                artistLABEL.innerHTML = '';
                artistLABEL.innerHTML = `${validacion(datos.artists[prop].strLabel)}`;

                let FormedYear = document.getElementById("FormedYear");
                FormedYear.innerHTML = '';
                FormedYear.innerHTML = `${validacion(datos.artists[prop].intFormedYear)}`;

                let BornYear = document.getElementById("BornYear");
                BornYear.innerHTML = '';
                BornYear.innerHTML = `${validacion(datos.artists[prop].intBornYear)}`;

                let DiedYear = document.getElementById("DiedYear");
                DiedYear.innerHTML = '';
                DiedYear.innerHTML = `${validacion(datos.artists[prop].intDiedYear)}`;

                let Disbanded = document.getElementById("Disbanded");
                Disbanded.innerHTML = '';
                Disbanded.innerHTML = `${validacion(datos.artists[prop].strDisbanded)}`;

                let youtube = document.getElementById("linkY");
                youtube.innerHTML = '';
                youtube.innerHTML = `<a href='https://www.youtube.com/results?search_query=${search}' target='_blank'>The best of your favorite band here !!</a>`;
                
                let music = document.getElementById("music");
                music.src = `${validacion(datos.artists[prop].strArtistWideThumb)}`;
            }
        }
    }
}