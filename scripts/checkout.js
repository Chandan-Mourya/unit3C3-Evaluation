// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let wallet = JSON.parse(localStorage.getItem("amount")) 
console.log("wallet: ", wallet);

let movie = JSON.parse(localStorage.getItem("movie"))
console.log("movie: ", movie);

movie.map(function(el){
    let box = document.createElement("div")
    
    let name = document.createElement("h2")
     name.innerText = el.name1;

     let img = document.createElement("img")
     img.src = el.poster

     box.append(name,img)
     document.getElementById("movie").append(box)
    
    })
    let count = document.getElementById("wallet");
    count.innerText=wallet;
function submit(){

    let seats = document.getElementById("number_of_seats").value;
    seats = seats *100;
    if(seats == wallet || seats < wallet){
        alert("Booking successful!")
    }else if(seats > wallet){
        alert("Insufficient Balance!")
    }

    let remain = wallet - seats;
 
    localStorage.setItem("amount",JSON.stringify(remain))
    window.location.reload()

}
