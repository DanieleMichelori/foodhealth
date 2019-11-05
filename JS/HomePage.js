/*NEWSLETTER*/
function inizializzaStorageIscritti() {  //RISOLTO.
  localStorage.iscritti="[]"; 
}

function inserisciIscritto() {  //RISOLTO.
  if(document.getElementById("email").value == "") {
    swal("Oops...", "Inserire un indirizzo email valido", "error");
    document.getElementById("email").focus();
    return false;
  }
  var u = JSON.parse(localStorage.iscritti);  //mail salvata nello storage
  var nextpos = u.length;
  var o = document.getElementById("email").value;  //mail inserita
    for(i=0; i<nextpos; i++) {
        if(u[i] == o) {
          swal("Warning", "Utente già iscritto", "warning");
          document.getElementById("email").value="";
          return false;
        }
    }
    u[nextpos]=o;
    localStorage.iscritti = JSON.stringify(u);
    swal("Good job", "Abbiamo inviato una e-mail all'indirizzo specificato", "success");
    document.getElementById("email").value="";
    return true;
 }


 