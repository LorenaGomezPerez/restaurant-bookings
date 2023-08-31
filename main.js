"use strict";

const mainCardOne = document.getElementById('mainCardOne');
const mainCardTwo = document.getElementById('mainCardTwo');
const mainCardThree = document.getElementById('mainCardThree');
const mainCardFour = document.getElementById('mainCardFour');

const date = document.getElementById('date'); 
const time = document.getElementById('time');
const persons = document.getElementById('persons'); 
const formReset = document.getElementById('reservationForm');
const buttonReset = document.getElementById('buttonReset');


// Función para voltear la tarjeta de cada restaurante


[mainCardOne, mainCardTwo, mainCardThree, mainCardFour].forEach(card => {
	card.addEventListener('click', () => {
		card.classList.toggle('clicked');
		card.childNodes[1].classList.toggle('hideCard');
		card.childNodes[3].classList.toggle('hideCard');
	})
})

// Función para eliminar datos en el formulario

function handleReset(event) {
	event.preventDefault();
	date.value = "";
	time.value = "";
	persons.value = "";
	formReset.reset();
}

buttonReset.addEventListener("click", handleReset);
