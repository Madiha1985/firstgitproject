import './style.css'
const firstName = document.createElement("p");
firstName.innerHTML="Madiha";
const div = document.getElementById("app");
if (div){
  div.appendChild(firstName);
}
