function getData(url, cb) {
  fetch(url)
    .then(response => response.json())
    .then(result => cb(result));
}

getData('https://randomuser.me/api/', 
  function (data) {
    console.log( data.results[0] );
    const results=data.results[0];
    /*primero se ajusta el tamaño de los elementos de título en escritorio proporcionalmente al tamaño de la imgan cargada/First we adjust title element´s size in
    desktop proportionally to image size*/
    //vamos a suponer arbitrariamente que el 35% de la población es no binaria||We are going to suppose arbitrarily that a 35% of population is non-binary
    if (Math.random()<0.35) 
    {
        document.getElementById("portrait").src="./non-binary.jpg";
        let port=document.getElementById("portrait");
        port.addEventListener("load", function(){
          topHeight=parseInt(document.getElementById("portrait").height)*(0.30);
          titleHeight=parseInt(document.getElementById("portrait").height)*(0.50);
          document.getElementById("top-md").style.height=topHeight+"px";
          document.getElementById("title-md").style.height=titleHeight+"px";
        }
        )
        document.getElementById("portrait").alt=data.results[0].name.first+" "+data.results[0].name.last;
    }
    else
    {
        if (data.results[0].gender==="male")
         {
          document.getElementById("portrait").src="./male.jpg";
          let port=document.getElementById("portrait");
          port.addEventListener("load", function(){
          topHeight=parseInt(document.getElementById("portrait").height)*(0.30);
          titleHeight=parseInt(document.getElementById("portrait").height)*(0.50);
          document.getElementById("top-md").style.height=topHeight+"px";
          document.getElementById("title-md").style.height=titleHeight+"px";
          }
          )
          document.getElementById("portrait").alt=data.results[0].name.first+" "+data.results[0].name.last;
         }
         else
         {
          document.getElementById("portrait").src="./female.jpg";
          let port=document.getElementById("portrait");
          port.addEventListener("load", function(){
          topHeight=parseInt(document.getElementById("portrait").height)*(0.30);
          titleHeight=parseInt(document.getElementById("portrait").height)*(0.50);
          document.getElementById("top-md").style.height=topHeight+"px";
          document.getElementById("title-md").style.height=titleHeight+"px";
          }
          )
          document.getElementById("portrait").alt=data.results[0].name.first+" "+data.results[0].name.last;
         }
    }
    /*luego ingresamos los datos correspondientes obtenidas de la api en cada elemento/then we set api´s data on each corresponding element*/

    /*index.html:91*/
    document.getElementById("phone-md").innerHTML=results.cell;
    /*index.html:104*/
    document.getElementById("email-md").innerHTML=results.email;
    /*index.html:130*/
    document.getElementById("adress-md").innerHTML=results.location.street.name+" "+results.location.street.number;
    /*index.html:145*/
    document.getElementById("name-md").innerHTML="<b>"+results.name.first+"</b> "+results.name.last;
    /*index.html:258*/
    document.getElementById("city-md").innerHTML=results.location.city;
    /*index.html:266*/
    document.getElementById("country-md").innerHTML=results.location.country;
    /*index.html:274*/
    document.getElementById("pc-md").innerHTML=results.location.postcode;
    /*index.html:282*/
    document.getElementById("state-md").innerHTML=results.location.state;
    /*index.html:296*/
    document.getElementById("name-sm").innerHTML="<b>"+results.name.first+"</b> "+results.name.last;
    /*index.html:460*/
    document.getElementById("phone-sm").innerHTML=results.cell;
    /*index.html:473*/
    document.getElementById("email-sm").innerHTML=results.email;
    /*index.html:499*/
    document.getElementById("adress-sm").innerHTML=results.location.street.name+" "+results.location.street.number;
    /*index.html:515*/
    document.getElementById("city-sm").innerHTML=results.location.city;
    /*index.html:523*/
    document.getElementById("country-sm").innerHTML=results.location.country;
    /*index.html:531*/
    document.getElementById("pc-sm").innerHTML=results.location.postcode;
    /*index.html:539*/
    document.getElementById("state-sm").innerHTML=results.location.state;

    /*Por último hacemos display de la pagina web y seteamos las funciones de comportamiento/finnally we display the web page and we set all behavioral functions*/
    document.getElementById("main").removeAttribute("hidden"); 

    document.getElementById('btn-m-info').onclick = function () {
      if (document.getElementById("m-info").hidden) {
        document.getElementById("m-info").removeAttribute("hidden");
      }
      else{
        document.getElementById("m-info").hidden = true;
      }
    }
  } 
) 