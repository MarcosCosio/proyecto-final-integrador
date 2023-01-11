function getData(url, cb) {
  fetch(url)
    .then(response => response.json())
    .then(result => cb(result));
}

getData('https://randomuser.me/api/', 
  function (data) {
    console.log( data.results[0] );
    document.getElementById("portrait").src= data.results[0].picture.medium;
    document.getElementById("main").removeAttribute("hidden");
  } 
)  