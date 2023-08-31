document.addEventListener("DOMContentLoaded", function () {
	const cards = document.querySelectorAll(".card");
  
	cards.forEach((card) => {
	  card.addEventListener("click", function () {
		this.querySelector(".card-inner").classList.toggle("flipped");
	  });
	});
  });
  