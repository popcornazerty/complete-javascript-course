const pi = 3.1415;
const roundedPi = pi.toFixed(2);
console.log(roundedPi);


const body = document.body;
console.log(body);

// step 1
const ul = document.createElement("ul");
console.log(ul);

// step 2
body.appendChild(ul);
console.log(body);

//  step 3
const li = document.createElement("li");
console.log(li);

// step 4
ul.appendChild(li);

//  step 5
li.innerText = pi;

//  step 6
const li_two = document.createElement("li");

//  step 7 
ul.appendChild(li_two);

//  step 8 
li_two.innerText = roundedPi;


// Création de la modal
function openModal() {
    // creation du conteneur 
    const container = document.createElement("div");
    container.innerText = "Je suis une modale";
    body.appendChild(container);
    // creation du bouton fermer la modale
    const buttonClose = document.createElement("button");
    buttonClose.innerText = "fermer la modal";
    container.appendChild(buttonClose);
    // Ajouter un evenement sur le bouton fermer la modale
    buttonClose.addEventListener("click", function() {
        // Code qui s'execute lorsque je clique sur le bouton fermer la modale
        closeModal(container);
    });

    // Ajouter des styles
    container.style.background = "white";
    container.style.width = 150 + "px";
    
}

function closeModal(container) {
    //container.style.display = "none";
    body.removeChild(container);
}

/*
    <body> <!-- Parent -->
        <ul> <!-- Enfant -->
            <li>3.1415</li>
            <li>3.14</li>
        </ul>
    </body>

    - 3.1415
    - 3.14
*/
