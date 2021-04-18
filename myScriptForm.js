window.addEventListener("load", function() {
    console.log("pagina caricata completamente")

    onWindowLoad()
})

function onWindowLoad() {
    var myForm = document.getElementById("myForm");

//★-Raccolgo i dati dell'utente-★

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
        return ticket  
    }
}
discount(ageUser.value, prezzoDefault)
var finalPrice
var finalPrice = discount(ageUser, prezzoDefault);

console.log(finalPrice.toFixed(2));

//★-Stampo le informazioni elaborate-★






document.getElementById("stampaNome").innerHTML = nomeUser;

document.getElementById("stampaPrezzo").innerHTML = finalPrice.toFixed(2) + "&#8364; ";


 })
}


