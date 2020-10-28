function startedF() {
    console.log('se cargo pagina 5...');
    console.log(document.cookie);
    var newSearchV = document.cookie;
    cargarDatosSF(newSearchV);
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
                img1.src = `${datos.artists[prop].strArtistClearart}`;

                var img2 = document.getElementById("galer2");
                img2.src = `${datos.artists[prop].strArtistWideThumb}`;

                var img2 = document.getElementById("galer3");
                img2.src = `${datos.artists[prop].strArtistFanart}`;

                let bioES = document.getElementById("articleBioES");
                bioES.innerHTML = '';
                bioES.innerHTML = `${datos.artists[prop].strBiographyES}`;

                let bioPT = document.getElementById("articleBioPT");
                bioPT.innerHTML = '';
                bioPT.innerHTML = `${datos.artists[prop].strBiographyPT}`;

                let bioRU = document.getElementById("articleBioRU");
                bioRU.innerHTML = '';
                bioRU.innerHTML = `${datos.artists[prop].strBiographyRU}`;

                let bioJP = document.getElementById("articleBioJP");
                bioJP.innerHTML = '';
                bioJP.innerHTML = `${datos.artists[prop].strBiographyJP}`;
            }
        }
    }
}