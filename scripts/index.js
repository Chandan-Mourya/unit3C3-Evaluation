// Store the wallet amount to your local storage with key "amount"

//url1 = https://www.omdbapi.com/?apikey=6a41ddca&s=om_shanti_om

let n=JSON.parse(localStorage.getItem("amount")) || []

let wallet = document.getElementById("wallet")




wallet.innerText=n;
// wallet.innerText=n;

function addToWallet(){
    wallet.innerHTML = null;
    wallet.innerText=n;

   // console.log("hii")
    n=+document.getElementById("amount").value;
   console.log("n: ",typeof n);
   n+=n;
  localStorage.setItem("amount",JSON.stringify(n))


}
