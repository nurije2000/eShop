var emri = prompt("Emri", "");
var mbiemri = prompt("Mbiemri", "");
var mosha = prompt("Mosha", "");
var email = prompt("E - Mail", "");
var adresa = prompt("Adresa", "");

while(emri == ""){
    emri = prompt("Emri", "");
}
document.getElementById("emri").innerText = emri;

while(mbiemri == ""){
    mbiemri = prompt("Mbiemri", "");
}
document.getElementById("mbiemri").innerText = mbiemri;

while(mosha == ""){
    mosha = prompt("Mosha", "");
}
document.getElementById("mosha").innerText = mosha;

while(email == ""){
    email = prompt("E - Mail", "");
}
document.getElementById("email").innerText = email;

while(adresa == ""){
    adresa = prompt("Adresa", "");
}
document.getElementById("adresa").innerText = adresa;