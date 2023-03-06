// Show the login modal when the login button is clicked
document.getElementById("loginBtn").addEventListener("click", function () {
  document.getElementById("loginModal").style.display = "block";
});

document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("loginModal").style.display = "none";
});

// Listen to the form being submitted
document
  .getElementById("destination_details_form")
  .addEventListener("submit", handleFormSubmit);
document
  .getElementById("submitLogin")
  .addEventListener("click", handleLoginSubmit);
document
  .getElementById("closeModal")
  .addEventListener("click", closeLoginModal);
document.getElementById("signUp").addEventListener("click", closeLoginModal);

// Handle the login submit button
document
  .getElementById("submitLogin")
  .addEventListener("click", handleLoginSubmit);

function handleLoginSubmit() {
  const username = document.getElementById("modalUsername").value;
  const password = document.getElementById("modalPassword").value;

  if (username === "test" && password === "test") {
    window.location.href = "/dashboard.html";
  } else {
    alert("Incorrect username or password");
  }

  // Add your code here to submit the form data to the server
}

document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("loginModal").style.display = "none";
});

function handleFormSubmit(event) {
  event.preventDefault();
}

function handleLoginSubmit() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "test" && password === "test") {
    window.location.href = "/dashboard.html";
  } else {
    alert("Incorrect username or password");
  }
}

$(document).ready(function () {
  $("#loginBtn").click(function () {
    $("#loginModal").show();
  });

  $("#closeModal").click(function () {
    $("#loginModal").hide();
  });

  $("#submitLogin").click(function () {
    const username = $("#modalUsername").val();
    const password = $("#modalPassword").val();

    // Add your code here to submit the form data to the server
  });
});

function handleFormSubmit(event) {
  // rest of the code

  // Function to handle the #destination_details_form being submitted

  event.preventDefault(); // stop the form from refreshing the page

  // Extract the values of the different elements of the form and store them in variables
  let destinationName = event.target.elements["name"].value;
  let destinationLocation = event.target.elements["location"].value;
  let destinationPhoto = event.target.elements["photo"].value;
  let destinationDesc = event.target.elements["description"].value;

  // Reset the form elements values for a new entry
  resetFormValues(event.target);

  // Use the form elements values to create a destination card
  let destinationCard = createDestinationCard(
    destinationName,
    destinationLocation,
    destinationPhoto,
    destinationDesc
  );

  let wishListContainer = document.querySelector("#destinations_container");

  // Change wishlist title if the Bucket List was empty
  if (wishListContainer.children.length === 0) {
    document.querySelector("#title").innerHTML = "Bucket List";
  }

  // Appended the destinationCard in the #destinations_container div
  document
    .querySelector("#destinations_container")
    .appendChild(destinationCard);
}

function resetFormValues(form) {
  // Go through all the form values and reset their values
  for (var i = 0; i < form.length; i++) {
    form.elements[i].value = "";
  }
}

async function createDestinationCard(name, location, photoUrl, description) {
  // Call the function to get the image from the API
  const imageUrl = await getImageFromAPI(name, location);
  // Use the image URL from the API instead of the default image
  const card = document.createElement("div");
  card.setAttribute("class", "card");
  const img = document.createElement("img");
  img.setAttribute("class", "card-img-top");
  img.setAttribute("src", imageUrl);
  card.appendChild(img);
}

//get image from Unsplash
function getImage(newCard, name) {
  const url = `https://api.unsplash.com/search/photos?query=${name}&client_id=_eG_tNCMVdfemrLhM77_qu_ZGahNzGQJcQ9LI5iLvQg`;
  photoPromise = fetch(url)
    .then((response) => response.json())
    .then((data) =>
      newCard
        .querySelector(".card-img-top")
        .setAttribute("src", data.results[0].urls.small)
    );
}

function createDestinationCard(name, location, photoUrl, description) {
  // Use the passed arguments to create a bootstrap card with destination details

  const card = document.createElement("div");
  card.setAttribute("class", "card");
  card.style.width = "15rem";
  card.style.height = "fit-content";
  card.style.margin = "20px;";

  // Create the destination photo element and append it to the card
  const img = document.createElement("img");
  img.setAttribute("class", "card-img-top");
  img.setAttribute("alt", name);

  // Check to make sure that the photo url was entered since it's optional
  // if the user didn't enter a photo url, show a constant photo.
  const constantPhotoUrl = "./Images/Flying.jpeg";
  img.setAttribute("src", photoUrl.length === 0 ? constantPhotoUrl : photoUrl);
  card.appendChild(img);

  const cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");

  cardBody.innerHTML = `
    <h5 class="card-title">${name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${location}</h6>
  `;

  card.appendChild(cardBody);

  // Only add description text if the user entered some
  if (description.length !== 0) {
    var cardText = document.createElement("p");
    cardText.setAttribute("class", "card-text");
    cardText.innerText = description;
    cardBody.appendChild(cardText);
  }

  var buttonsContainer = document.createElement("div");
  buttonsContainer.setAttribute("class", "buttons_container");

  // Card edit and delete buttons
  var cardEditBtn = document.createElement("button");
  cardEditBtn.setAttribute("class", "btn btn-warning");
  cardEditBtn.innerText = "Edit";
  cardEditBtn.addEventListener("click", editDestination);

  var cardDeleteBtn = document.createElement("button");
  cardDeleteBtn.setAttribute("class", "btn btn-danger");
  cardDeleteBtn.innerText = "Remove";
  cardDeleteBtn.addEventListener("click", removeDestination);

  buttonsContainer.appendChild(cardEditBtn);
  buttonsContainer.appendChild(cardDeleteBtn);

  cardBody.appendChild(buttonsContainer);

  card.appendChild(cardBody);

  return card;
}

function editDestination(event) {
  const cardBody = event.target.parentElement.parentElement;
  const title = cardBody.querySelector(".card-title");
  const subTitle = cardBody.querySelector(".card-subtitle");

  const card = cardBody.parentElement;
  const photo = card.querySelector("img");

  const newTitle = window.prompt("Enter new name");
  const newSubtitle = window.prompt("Enter new location");
  const newPhotoUrl = window.prompt("Enter new photo url");

  if (newTitle.length > 0) {
    title.innerText = newTitle;
  }

  if (newSubtitle.length > 0) {
    subTitle.innerText = newSubtitle;
  }

  if (newPhotoUrl.length > 0) {
    photo.setAttribute("src", newPhotoUrl);
  }
}

function removeDestination(event) {
  const cardBody = event.target.parentElement.parentElement;
  const card = cardBody.parentElement;
  card.remove();
}
