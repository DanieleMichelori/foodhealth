function addToCart(){
    var u = JSON.parse(sessionStorage.cart); 
    var nextpos = u.length;
    var o = {n:document.getElementById("prod").value,
             p:document.getElementById("sp").value,
             m:parseFloat(document.getElementById("prezzo").value)
             }
    for(i=0;i<nextpos;i++){
         if(ugualix(u[i],o)){
            swal("Warning","Prodotto già nel carrello","warning");
            return false;
        }
    }
    u[nextpos]=o;
    sessionStorage.cart=JSON.stringify(u);
    swal("Good job","Prodotto aggiunto al carrello","success");
    return true;
}

 
function ugualix(u,o){
    if(u.n==o.n && u.p == o.p) return true;
    return false;
}



function inizializzaStorageCarrello(){
    if(typeof(sessionStorage.cart)=="undefined"){
        sessionStorage.cart="[]"; 
    } 
}

function resetStorageCarrello(){
    sessionStorage.cart="[]";
    swal("Good Job","il tuo carrello ora è vuoto","success");
    }

function printCart(){
    var u = JSON.parse(sessionStorage.cart);
    var l = u.length;
        
    var s = new String("");
    s +="<table width='100%' border=1><tr><th class='text-center tval'>PRODOTTO</th><th class='text-center tval'>PESO</th><th class='text-center tval'>PREZZO (IN €)</th></tr>";
    for (i=0;i<l;i++){
        s += "<tr><td class='text-center val'>"+u[i].n+"</td>"+" "+"<td class='text-center val'>"+u[i].p+"</td><td class='text-center val'>"+u[i].m+"</td></tr>";
    }
    s+="<tr><td class='text-center val'>Totale: "+"</td><td> </td><td class='text-center val'>"+sum()+"</tr>";
    document.getElementById("vistaStorage").innerHTML = s;
    return true;
}

function sum(){
    var u = JSON.parse(sessionStorage.cart);
    var l = u.length;
    var tot = 0.00;
    for(i=0;i<l;i++){
        tot+=parseFloat(u[i].m,);
    }
    return round(tot,2);
}

function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }


function checkCart(){
    if(sessionStorage.cart=="[]") {
        swal("Warning","Il carrello è vuoto","warning");
        return false;
    }
    window.location.href="/HTML/Checkout.html";
    return true;
}


function checkout(){
    var u = JSON.parse(sessionStorage.cart);
    var l = u.length;
        
    var s = new String("");
    
    s +="<ul style='margin-right: 6%; font-size: 20px; font-family: Roboto-light' >";
    for (i=0;i<l;i++){
        s += "<li class='val'>"+u[i].n+' da '+u[i].p+":  "+u[i].m+"€</li>";
    }
    s+="<ul style='margin-right: 6%; font-size: 30px; font-family: Roboto-regular'><br><p>TOTALE: "+sum()+"€</p>";
    document.getElementById("resoconto").innerHTML = s;
    return true;

}

function paid(){
    var s = new String('Pagamento riuscito! Abbiamo inviato la ricevuta al tuo indirizzo e-mail');
   // swal("Good Job", s,"success");
   alert(s);
   resetStorageCarrello();
    return true;
}