# Practica00-Consumo-de-APIs-en-la-nube

<h2><strong>OBJETIVOS: </strong></h2>
<ul>
  <li>Conocer las arquitecturas y patrones arquitectónicos web para el diseño de aplicaciones web.</li>
  <li>Interactuar con servicios web de plataformas en la nube.</li>
</ul>

<h2>1. Identificar gráficamente la arquitectura y el patrón de diseño de la aplicación a
desarrollar.</h2>

<p><strong>Arquitectura Web:</strong> Para el diseño de la arquitectura web, se utilizo el muy conocido Cliente - Servidor, colgando nuestra pagina web en el SRV para que los cilentes puedan acceder a el.</p>

![arquitecturaWEB](https://user-images.githubusercontent.com/51842123/97502610-774c7480-1941-11eb-9e05-f99d255992e9.png)

<p><strong>Arquitectura App:</strong> Para el diseño de la arquitectura de la aplicacion, me he basado el ya tratado durante toda la carrera, modelo, vista y controlador.</p>

![arquitecturaAPP](https://user-images.githubusercontent.com/51842123/97502789-de6a2900-1941-11eb-9c70-02775fe2dead.png)

<h2>2. Generar una llave para consumir los servicios web de la API.</h2>

<p>La API utilizada es theaudiodb.com <br> La URL generada es: https://www.theaudiobd.com/api/v1/json/1/search.php?s=${search}</p>

<h2>3. Desarrollar una aplicación con HTML + CSS + JavaScript + Web Services para
buscar información y visualizarla toda a través de la API.</h2>

<p>a) index.html</p>

![Code_4EROcKKETg](https://user-images.githubusercontent.com/51842123/97503155-83850180-1942-11eb-91b2-2ad22e07690f.png)

<p>En este archivo se estructura el menu principal de la pagina web, integrando un input y un boton, pues es segun el valor ingresado por el usuario en el input que se realizara las busquedas a la API. Tambien se define la tabla que posteriormente con los datos arrojados por la API seran llenados.</p>

<p>b) data2.html</p>

![Code_4EROcKKETg](https://user-images.githubusercontent.com/51842123/97503486-1b82eb00-1943-11eb-85d3-363dd52e18a4.png)

<p>El archivo data2.html, tendrá mas datos importantes acerca del artista o de la banda, de la misma manera que en el archivo de index.html se predefine la tabla de datos que seran rellenados posteriormente por la informacion obtenida de la API.</p>

<p>c) data3.html</p>

![Code_yH9YgiVohy](https://user-images.githubusercontent.com/51842123/97503575-466d3f00-1943-11eb-8ee2-2696590365b1.png)

<p>Se estructura la tabla que contendra los datos discograficos de la bando o ya sea el caso del artista buscado o requerido.</p>

<p>d) data4.html - data5.html</p>

![Code_ieuHpt6MGB](https://user-images.githubusercontent.com/51842123/97503652-6d2b7580-1943-11eb-990c-ab1ba9a54548.png)

![Code_JPEyCuCTIW](https://user-images.githubusercontent.com/51842123/97503716-8cc29e00-1943-11eb-8fc6-a9895c966a52.png)

<p>En este ultimo par de archivos, se ha estructurado el menu de biografias, ya que la API pone a nuestra disposicion la biografia del grupo o artista en varios idiomas. Cuatro idiomas estaran presentes en el archivo data4.html y los 4 idomas restantes seran colocados en el archivo data5.html.</p>

<p>e) peticion.js</p>

![Code_QEd5sRdLp3](https://user-images.githubusercontent.com/51842123/97503815-c0052d00-1943-11eb-9020-7d545cd15db8.png)

<p>En este archivo en primer lugar se define la llave mediante la cual vamos a obtener informacion desde la API, ademas se escribe en el archivo html los resultados obtenidos (innerHTML)</p>

<p>f) peticion2.js</p>

![Code_LpXFUipSo6](https://user-images.githubusercontent.com/51842123/97503922-f04ccb80-1943-11eb-93d6-a9660f82d027.png)

<p>En esta, el segundo archivo de petición, en primer lugar, obtengo la cookie para que se pueda realizar todas las acciones bajo el mismo criterio de búsqueda en todas las
páginas. Acto seguido paso todos los datos recuperados a la pagina data2.html</p>

<p>g) peticion3.js</p>

![Code_ymB251i5wt](https://user-images.githubusercontent.com/51842123/97503988-107c8a80-1944-11eb-8e3e-7cbea7eb332f.png)

<p>Esta petición recuperará datos acerca de la discografía del artista o bando buscada, datos como el
nombre del disco y su año de publicación, además se obtendrá varias fotografías disponibles en la API.</p>

<p>h) peticion4.js - peticion5.js</p>

![Code_Jp8AIRuWrw](https://user-images.githubusercontent.com/51842123/97504104-43268300-1944-11eb-889b-18f348976665.png)

<p>En este último par de peticiones se recupera los datos biográficos del artista o banda en los idiomas disponibles</p>

<p>i) estilos.css</p>

![Code_6eolnPXRNR](https://user-images.githubusercontent.com/51842123/97504218-736e2180-1944-11eb-874c-abf22b3402ca.png)

<p>Lo mas importante dentro del diseño de esta aplicacion es a mi entender el menu de biografia, el cual fue realizado con el fin de no saturar la pagina con demasiado texto, mas bien este menu dividira un bloque por cada idioma.</p>

<h2><strong>RESULTADOS OBTENIDOS:</strong></h2>

<p> Mediante esta practica he logrado consumir de manera exitosa una API, obteniendo los datos en su totalidad y adaptándola a una interfaz amigable para el usuario, aplicando un modelo bastante conocido en arquitecturas web (Cliente - Servidor), también he aprendido a manejar datos del tipo JSON. </p>

<h2><strong>CONCLUSIONES:<strong></h2>
  
<p> El uso de una API es muy importante a la hora de personalizar nuestro aplicativo y adaptar los datos arrojados por la API a las funciones de determinado proyecto, de esta manera la ya mencionada aplicación obtendrá datos y los manejará según sus necesidades. Podemos decir entonces que el consumir una API es muy beneficioso ya que integramos los beneficios de determinada web a nuestro propio sistema.</p>

<h2><strong>RECOMENDACIONES:</strong></h2>

<p>Revisar el material facilitado por el docente y asistir a las horas de clase. </p>
