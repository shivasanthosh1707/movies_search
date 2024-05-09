console.log("test")

var input =document.getElementById("input")
var button =document.getElementById("button")
var wrapper =document.getElementById("wrapper")
var para =document.getElementById("para")
var loading =document.getElementById("loading")
button.addEventListener("click",function(){
    loading.innerText="Loading...."
    wrapper.innerHTML=""
    para.innerText=" "
    console.log("buton is clicked")
    axios.get(`https://www.omdbapi.com/?apikey=45f0782a&s=${input.value}`)
    .then((Res)=>{
       if(Res.data.Response == "True"){
        loading.innerText=""
      Res.data.Search.map((movie, i)=>{
        console.log(movie)

        wrapper.innerHTML+=`
        <div id="movie-card">
        <img src=${movie.Poster}>
        <p>Title:${movie.Title} </br>
        [${movie.Type}]</p>
        <p>Relased Year ${movie.Year} </p>

        </div>`
      })
       }
       else(
       
        para.innerText=  `404 Movies not found ${loading.innerText="Please try again!!"}  `
        
       )
    })
})