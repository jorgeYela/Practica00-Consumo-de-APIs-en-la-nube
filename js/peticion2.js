function start(){
    console.log('se cargo pagina 2...');
    console.log(document.cookie);
    var newSearch = document.cookie;
    cargarDatosS(newSearch);
}
function cargarDatosS(search) {
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
                var img = document.getElementById("img2");
                img.src = `${datos.artists[prop].strArtistThumb}`;

                let Style = document.getElementById("Style");
                Style.innerHTML = '';
                Style.innerHTML = `${validacion(datos.artists[prop].strStyle)}`;

                let Genre = document.getElementById("Genre");
                Genre.innerHTML = '';
                Genre.innerHTML = `${validacion(datos.artists[prop].strGenre)}`;

                let Mood = document.getElementById("Mood");
                Mood.innerHTML = '';
                Mood.innerHTML = `${validacion(datos.artists[prop].strMood)}`;

                let Website = document.getElementById("Website");
                Website.innerHTML = '';
                Website.innerHTML = `${validacion(datos.artists[prop].strWebsite)}`;

                let Facebook = document.getElementById("Facebook");
                Facebook.innerHTML = '';
                Facebook.innerHTML = `${validacion(datos.artists[prop].strFacebook)}`;

                let Twitter = document.getElementById("Twitter");
                Twitter.innerHTML = '';
                Twitter.innerHTML = `${validacion(datos.artists[prop].strTwitter)}`;

                let Gender = document.getElementById("Gender");
                Gender.innerHTML = '';
                Gender.innerHTML = `${validacion(datos.artists[prop].strGender)}`;

                let Members = document.getElementById("Members");
                Members.innerHTML = '';
                Members.innerHTML = `${validacion(datos.artists[prop].intMembers)}`;

                let Country = document.getElementById("Country");
                Country.innerHTML = '';
                Country.innerHTML = `${validacion(datos.artists[prop].strCountry)}`;
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