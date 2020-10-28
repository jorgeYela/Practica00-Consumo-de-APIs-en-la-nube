function startedF() {
    console.log('se cargo pagina 4...');
    console.log(document.cookie);
    var newSearchF = document.cookie;
    cargarDatosSF(newSearchF);
}
function cargarDatosSF(search) {
    let url = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${search}`;
    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();
    api.onreadystatechange =function() {
        if(this.status == 200 && this.readyState == 4){
            let datos = JSON.parse(this.responseText);
            console.log(datos);
            var detalles = "";
            for(var prop in datos.artists){

                var img1 = document.getElementById("galer1");
                img1.src = `${datos.artists[prop].strArtistFanart2}`;

                var img2 = document.getElementById("galer2");
                img2.src = `${datos.artists[prop].strArtistFanart3}`;

                var img2 = document.getElementById("galer3");
                img2.src = `${datos.artists[prop].strArtistBanner}`;

                let bioEN = document.getElementById("articleBioEN");
                bioEN.innerHTML = '';
                bioEN.innerHTML = `${datos.artists[prop].strBiographyEN}`;

                let bioIT = document.getElementById("articleBioIT");
                bioIT.innerHTML = '';
                bioIT.innerHTML = `${datos.artists[prop].strBiographyIT}`;

                let bioFR = document.getElementById("articleBioFR");
                bioFR.innerHTML = '';
                bioFR.innerHTML = `${datos.artists[prop].strBiographyFR}`;

                let bioCN = document.getElementById("articleBioCN");
                bioCN.innerHTML = '';
                bioCN.innerHTML = `${datos.artists[prop].strBiographyCN}`;

                let bioJP = document.getElementById("articleBioJP");
                bioJP.innerHTML = '';
                bioJP.innerHTML = `${datos.artists[prop].strBiographyJP}`;

                let bioRU = document.getElementById("articleBioRU");
                bioRU.innerHTML = '';
                bioRU.innerHTML = `${datos.artists[prop].strBiographyRU}`;
            }
        }
    }
}