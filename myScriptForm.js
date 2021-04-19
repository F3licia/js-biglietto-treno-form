window.addEventListener("load", function() {
  console.log("pagina caricata completamente")
  onWindowLoad()
})

//★-Refresh della pagina con tasto annulla-★
function refreshPage(){
  window.location.reload();
} 

//★-Generazione numeri random per codice e carrozza-★
var carriage= Math.floor(Math.random() * 11) + 1;
var codeCp = Math.floor(Math.random() * 100000 ) +  90001;


//★-Raccolgo i dati dell'utente-★
function onWindowLoad() {
  var myForm = document.getElementById("myForm");

  //mi ricollego al form in html
 

  myForm.addEventListener("submit", function(event) {
   event.preventDefault(); 

  //recupero i dati del form dai valori "name" nell'html

  var form = event.currentTarget;
  var formElements = form.elements
  var nomeUser = formElements.uName.value;
  var kmUser = formElements.uKm.value;
  var ageUser = formElements.uAge.value;

  console.log(nomeUser)
  console.log(kmUser)
  console.log(ageUser)
  
//★-Elaboro i dati-★

      function price(chilometri){
      var risultato = chilometri * 0.21;
      return risultato;
      }
  price(kmUser);
  var prezzoDefault;
  var prezzoDefault = price(kmUser);

  console.log(prezzoDefault.toFixed(2));

      function discount(age, ticket){
          if (age === "sconto40" ){
              sconto = (ticket / 100) * 60;
              document.getElementById("stampaOfferta").innerHTML = "Sconto over 64";
              return sconto;
          } else if (age === "sconto20" ){
              sconto = (ticket / 100) * 80;   
              document.getElementById("stampaOfferta").innerHTML = "Sconto minorenne";
              return sconto
          }else{
              document.getElementById("stampaOfferta").innerHTML = "Non disponibile"
              return ticket  
          }
      }
  discount(ageUser.value, prezzoDefault)
  var finalPrice
  var finalPrice = discount(ageUser, prezzoDefault);

//★-Stampo le informazioni elaborate-★  
if( isNaN(kmUser)){
  document.getElementById("stampaPrezzo").innerHTML = "errore";      
}else{
  document.getElementById("stampaPrezzo").innerHTML = finalPrice.toFixed(2) + "&#8364; ";
}
console.log(finalPrice.toFixed(2));

document.getElementById("stampaNome").innerHTML = nomeUser;
document.getElementById("stampaCarr").innerHTML = carriage;
document.getElementById("stampaCode").innerHTML = codeCp;

//★-Animazione finale-★  
var animazione = document.getElementById("saluto")
animazione.className = "animated"
})
}