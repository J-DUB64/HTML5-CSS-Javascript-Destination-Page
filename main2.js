document.getElementById("destination_details_form").addEventListener("submit", handleFormSubmit);
document.getElementById("loginBtn").addEventListener("click", showLoginModal);
document.getElementById("submitLogin").addEventListener("click", handleLoginSubmit);
document.getElementById("closeModal").addEventListener("click", closeLoginModal);
document.getElementById("signUp").addEventListener("click", closeLoginModal);

function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const destinationName = form.elements["name"].value;
  const destinationLocation = form.elements["location"].value;
  const destinationPhoto = form.elements["photo"].value;
  const destinationDesc = form.elements["description"].value;

  resetFormValues(form);

  const destinationCard = createDestinationCard(destinationName, destinationLocation, destinationPhoto, destinationDesc);

  const wishListContainer = document.querySelector("#destinations_container");
  if (wishListContainer.children.length === 0) {
    document.querySelector("#title").innerHTML = "Bucket List";
  }

  wishListContainer.appendChild(destinationCard);
}

function handleLoginSubmit() {
  const username = document.getElementById("modalUsername").value;
  const password = document.getElementById("modalPassword").value;

  if (username === "test" && password === "test") {
    window.location.href = "/dashboard.html";
  } else {
    alert("Incorrect username or password");
  }
}

function showLoginModal() {
  document.getElementById("loginModal").style.display = "block";
}

function closeLoginModal() {
  document.getElementById("loginModal").style.display = "none";
}

function resetFormValues(form) {
  for (let i = 0; i < form.length; i++) {
    form.elements[i].value = "";
  }
}

function createDestinationCard(name, location, photoUrl, description) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.width = "15rem";
  card.style.height = "fit-content";
  card.style.margin = "20px";

  const img = document.createElement("img");
  img.classList.add("card-img-top");
  img.alt = name;
  img.src = photoUrl.length === 0 ? "./Images/Flying.jpeg" : photoUrl;
  card.appendChild(img);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  cardBody.innerHTML = `
    <h5 class="card-title">${name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${location}</h6>
    <p class="card-text">${description}</p>
  `;

  const buttonsContainer = document.createElement("div");

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



















// Show the login modal when the login button is clicked
document.getElementById("loginBtn").addEventListener("click", function() {
  document.getElementById("loginModal").style.display = "block";
});

document.getElementById("closeModal").addEventListener("click", function(){
  document.getElementById("loginModal").style.display = "none";
});

// Listen to the form being submitted
document.getElementById("destination_details_form").addEventListener("submit", handleFormSubmit);
document.getElementById("destination_details_form").addEventListener("submit", handleFormSubmit);
document.getElementById("submitLogin").addEventListener("click", handleLoginSubmit);
document.getElementById("closeModal").addEventListener("click", closeLoginModal);
document.getElementById("signUp").addEventListener("click", closeLoginModal);


// Handle the login submit button
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

document.getElementById("closeModal").addEventListener("click", function(){
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

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#button').addEventListener('click', function() {
    document.querySelector('#text').style.display = 
      document.querySelector('#text').style.display === 'none' ? 'block' : 'none';
  });

  $("#closeModal").click(function() {
    $("#loginModal").hide();
  });

  $("#submitLogin").click(function() {
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

async function getImageFromAPI(destinationName) {
  try {
    // Make the fetch request to the API and store the response
    const response = await fetch(`https://api.unsplash.com/photos/?client_id=n2GBy3QzdL5QdVHAAIQtALNlNWOP0qkji3JlU23RUY8`);
    // Convert the response to JSON
    const data = await response.json();
    // Return the image URL from the data
    return data.imageUrl;
  } catch (error) {
    console.error(error);
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

async function getImageFromAPI(name, location) {
  const API_KEY = "CS-sH-_2PlH9EUbInV8rqdeU30Gwwv11iPvk416RfQg";
  const API_URL = `https://api.unsplash.com/photos/?client_id=$CS-sH-_2PlH9EUbInV8rqdeU30Gwwv11iPvk416RfQg&query=${name}+${location}`;
  const response = await fetch(API_URL);
  const data = await response.json();
  return data[0].urls.regular;
}


function createDestinationCard(name, location, photoUrl, description) {
  // Call the function to get the image from the API
  getImageFromAPI(name).then(imageUrl => { `https://api.unsplash.com/photos/?client_id=CS-sH-_2PlH9EUbInV8rqdeU30Gwwv11iPvk416RfQg&query=location`});
    // Use the image URL from the API instead of the default image
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    const img = document.createElement("img");
    img.setAttribute("class", "card-img-top");
    img.setAttribute("src", imageUrl);
    card.appendChild(img);
  }

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

function editDestination(event) {
  const cardBody = event.target.parentElement.parentElement;
  const title = cardBody.querySelector(".card-title");
  const subTitle = cardBody.querySelector(".card-subtitle");

  const card = cardBody.parentElement;
  const photo = card.querySelector("img");

  const newTitle = window.prompt("Enter new name");
  const newSubtitle = window.prompt("Enter new location");
  const newPhotoUrl = window.prompt("Enter new photo url");
}

  if (newTitle.length > 0) {
    title.innerText = newTitle;
  }

  if (newSubtitle.length > 0) {
    subTitle.innerText = newSubtitle;
  }

  if (newPhotoUrl.length > 0) {
    photo.setAttribute("src", newPhotoUrl);
  }

function removeDestination(event) {
  const cardBody = event.target.parentElement.parentElement;
  const card = cardBody.parentElement;
  card.remove();
}


https://api.unsplash.com/photos/?client_id=CS-sH-_2PlH9EUbInV8rqdeU30Gwwv11iPvk416RfQg&query=location
































































































//Speech Synthesizer:

    //Populating the voice selector
    function populateVoiceList() {
      if (typeof speechSynthesis === 'undefined') {
        return;
      }
    

      const voices = speechSynthesis.getVoices();
    
      for (let i = 0; i < voices.length; i++) {
        const option = document.createElement('option');
        option.textContent = `${voices[i].name} (${voices[i].lang})`;
    
        if (voices[i].default) {
          option.textContent += ' — DEFAULT';
        }

        option.setAttribute('data-lang', voices[i].lang);
        option.setAttribute('data-name', voices[i].name);
        document.getElementById("voiceSelect").appendChild(option);
      }
    }
  


    populateVoiceList();
    if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = populateVoiceList;
    }
    

        // Text-To Speech Setup:
    speechForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const msg = useFormInputs(event);
        speechSynthesis.speak(msg);
    });
    


      // Code to trigger the speech synth will go here
    function useFormInputs(event) {
        let msg = new SpeechSynthesisUtterance();
        const voices = window.speechSynthesis.getVoices();
        msg.voice = voices[voiceSelect.selectedIndex];
        msg.text = speechText.value;
        msg.rate = rateRange.value;
        msg.pitch = pitchRange.value;
        msg.volume = volumeRange.value;
        return msg;
    }
  


    function playSpeech() {
      var speechText = document.getElementById("speechText").value;
      var rateRange = document.getElementById("rateRange").value;
      var pitchRange = document.getElementById("pitchRange").value;
      var volumeRange = document.getElementById("volumeRange").value;
      var voiceSelect = document.getElementById("voiceSelect").value;
    }
    


    //  function for the button event to trigger the speech synth.
    document.getElementById("HideButton").addEventListener("click", function() {
      let speechSynthContainer = document.getElementById("speech_synth_container");
      if (speechSynthContainer.style.display === "none") {
        speechSynthContainer.style.display = "block";
      } else {
        speechSynthContainer.style.display = "none";
      }
    });   



    document.getElementById("useFormInputs").onclick = playSpeech;

    window.onload = function() {
      document.getElementById("speechFormContainer").style.display = "none";
    };


    function toggleForm() {
      var speechFormContainer = document.getElementById("speechFormContainer");
      if (speechFormContainer.style.display === "none") {
        speechFormContainer.style.display = "block";
      } else {
        speechFormContainer.style.display = "none";
      }
    }

    document.getElementById("HideButton").onclick = toggleForm;










  checkbox.addEventListener('change', function() {
  if (this.checked) {
    console.log("Checkbox is checked..");
  } else {
    console.log("Checkbox is not checked..");
  }
});







    // Text-To Speech Setup:
    if ('speechSynthesis' in window) {
      let repeatSpeech = null;
      let isRepeatSpeechRunning = false;
    
      speechForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const msg = useFormInputs(event);
        const loopCheckbox = document.querySelector("#loop_box");

        speechSynthesis.speak(msg);
      });

    loopCheckbox.addEventListener('change', function() {
        if (loopCheckbox.checked) {
          console.log("Checked is checked..");
          if (!isRepeatSpeechRunning) {
            repeatSpeech = setInterval(function() {
              speechSynthesis.speak(msg);
            }, 5);
            isRepeatSpeechRunning = true;
          }
        } else {
          console.log("Checkbox is not checked..");
          if (repeatSpeech) {
            clearInterval(repeatSpeech);
            isRepeatSpeechRunning = false;
          } else {
          
          }
        }
      });
    } else {
      console.log('Speech synthesis is not supported in your browser');
    }
  





















    const form = document.getElementById('speechForm');
    const speechText = document.getElementById('speechText').value;
    const rateRange = document.getElementById('rateRange');
    const pitchRange = document.getElementById('pitchRange');
    const volumeRange = document.getElementById('volumeRange');
    const voiceSelect = document.getElementById('voiceSelect');
    const loopBox = document.getElementById('loop_box');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const speechText = document.getElementById('speechText').value;
      if (speechText) {
        if (loop_Box.checked) {
          while (loop_Box.checked) {
            // code to repeat speech
          }
        } else {
          // code to speak once
        }
      }
    });
  




// Possible solution

       //Populating the voice selector

//Speech Synthesizer:
document.querySelector("#speechForm").addEventListener("submit", function(event){
  event.preventDefault();

  const speechText = document.querySelector("#speechText").value;
  const loopCheckbox = document.querySelector("#loop_box");
  const rateRange = document.querySelector("#rateRange").value;
  const pitchRange = document.querySelector("#pitchRange").value;
  const volumeRange = document.querySelector("#volumeRange").value;
  const voice = window.speechSynthesis.getVoices()[voiceSelect.selectedIndex] 
  });

  let speech = new SpeechSynthesisUtterance();
  speech.text = speechText;
  speech.rate = rateRange;
  speech.pitch = pitchRange;
  speech.volume = volumeRange;
  speech.voice = voice;
  
  function loopCheckbox(loopCheckbox)
    if (loopCheckbox.checked) {
      const repeatSpeech = function() {
          speechSynthesis.speak(speech);
          setTimeout(repeatSpeech, 1000);
      };
      repeatSpeech();
  } else {
      speechSynthesis.speak(speech);
  }          


    //Populating the voice selector
    function populateVoiceList() {
        if (typeof speechSynthesis === 'undefined') {
          return;
        }
      
        const speechText = document.querySelector("#speechText");
        const looper = document.querySelector("#loop_box");
        let intervalId;
      
        function speak(text) {
        const voices = speechSynthesis.getVoices();
      
        for (let i = 0; i < voices.length; i++) {
          const option = document.createElement('option');
          option.textContent = `${voices[i].name} (${voices[i].lang})`;
      
          if (voices[i].default) {
            option.textContent += ' — DEFAULT';
          }

          option.setAttribute('data-lang', voices[i].lang);
          option.setAttribute('data-name', voices[i].name);
          document.getElementById("voiceSelect").appendChild(option);
        }
      }
    }

      populateVoiceList();
      if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoiceList;
      }
 
          // Text-To Speech Setup:
      speechForm.addEventListener("submit", (event) => {
          event.preventDefault();
          const msg = useFormInputs(event);
          speechSynthesis.speak(msg);
      });
      


        // Code to trigger the speech synth will go here
      function useFormInputs(event) {
          let msg = new SpeechSynthesisUtterance();
          const voices = window.speechSynthesis.getVoices();
          msg.voice = voices[voiceSelect.selectedIndex];
          msg.text = speechText.value;
          msg.rate = rateRange.value;
          msg.pitch = pitchRange.value;
          msg.volume = volumeRange.value;
          return msg;
      }
    
     
      function playSpeech() {
        var speechText = document.getElementById("speechText").value;
        var rateRange = document.getElementById("rateRange").value;
        var pitchRange = document.getElementById("pitchRange").value;
        var volumeRange = document.getElementById("volumeRange").value;
        var voiceSelect = document.getElementById("voiceSelect").value;
      }
      


      //  function for the button event to trigger the speech synth.
      document.getElementById("HideButton").addEventListener("click", function() {
        let speechSynthContainer = document.getElementById("speech_synth_container");
        if (speechSynthContainer.style.display === "none") {
          speechSynthContainer.style.display = "block";
        } else {
          speechSynthContainer.style.display = "none";
        }
      });   



      document.getElementById("useFormInputs").onclick = playSpeech;

      window.onload = function() {
        document.getElementById("speechFormContainer").style.display = "none";
      };


      function toggleForm() {
        var speechFormContainer = document.getElementById("speechFormContainer");
        if (speechFormContainer.style.display === "none") {
          speechFormContainer.style.display = "block";
        } else {
          speechFormContainer.style.display = "none";
        }
      }

      document.getElementById("HideButton").onclick = toggleForm;

  




//Working on
                // Text-To Speech Setup:
                speechForm.addEventListener("submit", (event) => {
                  event.preventDefault();
                  const msg = useFormInputs(event);
                  const loopCheckbox = document.querySelector("#loop_box");
                  loopCheckbox(loopCheckbox)
                  speechSynthesis.speak(msg);
              });
              
              function loopCheckbox(loopCheckbox) {
              if (loopCheckbox.checked) {
                const repeatSpeech = function() {
                    speechSynthesis.speak(speech);
                    setTimeout(repeatSpeech, 1000);
                };
                repeatSpeech();
            } else {
                speechSynthesis.speak(speech);
            }          
          }

          let repeatId;

          function loopCheckbox(loopCheckbox) {
              if (loopCheckbox.checked) {
                  repeatId = setTimeout(function repeatSpeech() {
                      speechSynthesis.speak(speech);
                      repeatId = setTimeout(repeatSpeech, 1000);
                  }, 1000);
              } else {
                  clearTimeout(repeatId);
                  speechSynthesis.speak(speech);
              }          
          }



