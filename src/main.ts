import './style.css'


window.onload = function() {

const myName: string = "Philip"

let output = ""; 

for (let i = 0; i < myName.length; i++) {
  output += `<p>${myName[i]}</p>`;

      
      if (i < myName.length - 1) {
        output += " ";

        console.log(myName);
        
    }
}





}


