const cardsContainer = document.getElementById("cardsContainer");
const bandsFromLocalStorage = JSON.parse(localStorage.getItem("Bands"));
let bands = bandsFromLocalStorage != null ? bandsFromLocalStorage : [];


showBands();
addListeners();
  
function handleAddBandButtonClick() {
  // Improvements, get all the values from the form instead of get every input in the from
  const inputName = document.getElementById("name");
  const inputCategory = document.getElementById("category");
  const inputAuthor = document.getElementById("author");
  const inputPrice = document.getElementById("price");
  const inputYear = document.getElementById("year");

  const bandInformation = {
    name: inputName.value,
    category: inputCategory.value,
    author: inputAuthor.value,
    price: inputPrice.value,
    year: inputYear.value,
  };

  bands.push(bandInformation);
  localStorage.setItem("Bands", JSON.stringify(bands));
  
  alertAddButton();
  showBands();


}

function showBands() {
  const allCards = bands.reduce(
    (finalCards, { name, category, author, price, year }) => {
      finalCards += `
				<div id="cardContainer">
						<P>${name}</p>
						<p>${category}</p>
						<p>${author}</p>
						<p>$ ${price}</p>
						<p>${year}</p><br>
				<div />
		`;

      return finalCards;
    },
    ""
  );

  cardsContainer.innerHTML = allCards;
}

function handleDeleteBandButtonClick() {
  localStorage.clear("Bands");
  cardsContainer.innerHTML = "";
  alerDeleteButton();
}

function addListeners() {
  const buttonAdd = document.getElementById("add");
  const buttonDelete = document.getElementById("clear");

  buttonAdd.addEventListener("click", handleAddBandButtonClick);
  buttonDelete.addEventListener("click", handleDeleteBandButtonClick);
}

function alerDeleteButton() {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'warning',
    title: 'Se han limpiado las listas'
  })
}

function alertAddButton() {
  Swal.fire({
    icon: "success",
    title: "agregaste una banda",
    confirmButtonText: "OK",
  });
}


