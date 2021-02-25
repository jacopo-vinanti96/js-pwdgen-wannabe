var surname = prompt("Inserisci il tuo nome"), name = prompt("Inserisci il tuo cognnome"), favcolor = prompt("Inserisci il tuo colore preferito");

var control = confirm("I dati inseriti sono corretti?\n" + "Nome: " + surname + "\nCognome: " + name + "\nColore preferito: " + favcolor);
if (control == true) {
  document.getElementById('password').innerHTML = "La tua password è: " + surname + name + favcolor + "27";
} else {
  alert("Ricarica la pagina");
}
