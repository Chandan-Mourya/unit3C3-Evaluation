// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

//const url =" https://www.omdbapi.com/?apikey=6a41ddca&s=om_shanti_om"

let amt = JSON.parse(localStorage.getItem("amount"))
console.log("amt: ", amt);

document.getElementById("wallet").innerText=amt;

async function searchMovies(){
let q=document.getElementById("search").value;

    let url = `https://www.omdbapi.com/?apikey=6a41ddca&s=${q}`
   let  res = await fetch(url)
    let data = await res.json()
    console.log("data: ", data);

    let movies= data.Search
    console.log("movies: ", movies);

    append(movies)

   
}
let arr = []

function append(movies){
   
    let cont = document.getElementById("movies")
    cont.innerHTML=null;
    movies.map(function(el,index){
       let box=document.createElement("div")

       
       let name=document.createElement("h3")
        name.innerText=el.Title;

        let img = document.createElement("img")
        img.src = el.Poster

        let  btn = document.createElement("button")
        btn.innerText = "Book Now";
        btn.setAttribute("class","book_now")
        btn.onclick = function(){
           
            //    console.log("fhhhhhhhhhhhhhjkg",el.Title,el.Poster)
            let obj = {
                 name1 : el.Title,
                 poster : el.Poster,
            }
            arr.splice(index-1,1)
            arr.push(obj)
            localStorage.removeItem("movie")
            localStorage.setItem("movie",JSON.stringify(arr))
            window.location.href = "checkout.html"
            
           }
    
        box.append(name , img, btn);

        cont.append(box)
    })
}

let id;
function debounce(func,delay){
    
    if(id){
        clearTimeout(id)
    }
    id = setTimeout(function(){
        func()
    },delay)
}