/*function sayHello(firstname)
{
console.log("Bonjour " + firstname + " !")
}

let myName = "Beyonce"
let yourName = "Delphine"

sayHello(myName)
sayHello(yourName)
*/

const firstNameUser = prompt("Quel est ton prénom ?")

function sayHello(firstname, hour) {
    let message;
    if (hour >= 18) {
      message = "Bonsoir " + firstname + " !";
    } else {
      message = "Bonjour " + firstname + " !";
    }
    document.querySelector('h1').innerText = message
    }

    sayHello(firstNameUser);
    