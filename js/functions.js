function getData(url, cb) {
  fetch(url)
    .then(response => response.json())
    .then(result => cb(result));
}

getData('https://randomuser.me/api/', 
  function (data) {
    console.log( data.results[0] );
    //vamos a suponer arbitrariamente que el 35% de la población es no binaria||We are going to suppose arbitrarily that a 35% of population is non-binary
    if (Math.random()<0.35) 
    {
        document.getElementById("portrait").src="./non-binary.jpg";
        document.getElementById("portrait").alt=data.results[0].name.first+" "+data.results[0].name.last;
    }
    else
    {
        if (data.results[0].gender==="male")
         {
          document.getElementById("portrait").src="./male.jpg";
          document.getElementById("portrait").alt=data.results[0].name.first+" "+data.results[0].name.last;
         }
         else
         {
          document.getElementById("portrait").src="./female.jpg";
          document.getElementById("portrait").alt=data.results[0].name.first+" "+data.results[0].name.last;
         }
    }
    
    document.getElementById("main").removeAttribute("hidden");
  } 
)  