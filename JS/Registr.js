//AJAX LOGIN/SIGN UP
function caricaDocumento(e) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = gestisciResponse;
  httpRequest.open("GET", "Accesso.html", true);
  httpRequest.send();
}

function caricaDocumento1(e) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = gestisciResponse;
  httpRequest.open("GET", "Registr.html", true);
  httpRequest.send();
  inizializzaStorageReg();
}

function gestisciResponse(e) {
  if (e.target.readyState == XMLHttpRequest.DONE && e.target.status == 200) {
  document.getElementById("zonaDinamica").innerHTML = e.target.responseText;
  } 
}

/*ISCRITTI*/
function inizializzaStorageReg() { //RISOLTO.
 if(typeof(localStorage.reg)=="undefined"){
   localStorage.reg="[]"; 
  }

}

function uguali(u,o){
  if(u.e == o.e) return true;
  return false;
}

function inserisciReg() {  //RISOLTO.
  if(document.registration.psw.value != document.registration.cpsw.value) {
  swal("Warning", "Le password non coincidono", "warning");
  //alert("le password non coincidono");
    document.registration.psw.value="";  //document.nomeForm.campoNome.value
    document.registration.cpsw.value="";
    document.registration.psw.focus();
    return false;
  }
  var u = JSON.parse(localStorage.reg);  //mail salvata nello storage
  var nextpos = u.length;
  var o ={e:document.registration.email.value,
          p:document.registration.psw.value
         }
    for(i=0; i<nextpos; i++) {
        if(uguali(u[i],o)) {
          swal("Warning", "Indirizzo e-mail già attivo", "warning");
          document.registration.email.value="";
          document.registration.psw.value="";
          document.registration.cpsw.value="";
          return false;
        }
    }
    u[nextpos]=o;
    localStorage.reg = JSON.stringify(u);
    
    alert("Iscrizione effettuata con successo");
    //swal("Good job", "Iscrizione effettuata con successo!", "success");
    return true;
 }

//LOGIN CHECK
function ugualidue(u,o){
  if(u.e==o.e && u.p==o.p) return true;
  return false;
}

function logCheck(){
  var u = JSON.parse(localStorage.reg);  //mail salvata nello storage
  var nextpos = u.length;
  var o = { e:document.login.email.value,
            p:document.login.psw.value
            }  //mail inserita

  for(i=0; i<nextpos; i++) {
    if(ugualidue(u[i],o)){
      swal("Good job", "Accesso effettuato con successo", "success");
      var x = JSON.parse(localStorage.acc);
      var pos = x.length;
      x[pos]='true';
      localStorage.acc = JSON.stringify(x);
      return true;
      
    }
  }
  swal("Oops...", "Email o password errata", "error");
  document.login.psw.value="";
  return false;
}

function inizializzaStorageAcc(){
  if(typeof(localStorage.acc)=="undefined"){
    localStorage.acc="[]"; 
   }
}

function gestisciAcc(){
  var x = JSON.parse(localStorage.acc);
  if(x!="") {
    document.getElementById("userlog").innerHTML =   '<a class="esc" onclick="resetStorageAcc();resetStorageCarrello()"><i class="esc fas fa-sign-out-alt"></i></a>';
    
   
  }
  
  return true;
}

function resetStorageAcc(){
  var domanda =confirm("Sei sicuro di uscire?")
  if(domanda == true){
  localStorage.acc="[]";
  window.location.reload()
  }
  
}

function gestisciCart(){
    var x = JSON.parse(localStorage.acc);
    if(x=="") {
      var k = confirm("Non hai effettuato l'accesso. Premendo 'ok' verrai reindirizzato alla pagina di Login");
        if(k==true){
        window.location.href="Login.html";
        }
        return false;
       }
     window.location.href="ShoppingCart.html";
     return true;
    }

   
    

    function gestisciCartProd(){
      var x = JSON.parse(localStorage.acc);
      if(x=="") {
        var k = confirm("Non hai effettuato l'accesso. Premendo 'ok' verrai reindirizzato alla pagina di Login");
        if(k==true){
        window.location.href="../Login.html";
        }
        return false;
       }
       window.location.href="../ShoppingCart.html";
       return true;
      }
  