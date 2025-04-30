// profile image
const emotions = ["images/face-happy.svg", "images/face-sad.svg", "images/face-excited.png", "images/face-angry.svg", "images/face-scared.png"]
let currentEmotionIndex  = 0;

const face = document.getElementById("face");
const nextPicBtn = document.getElementById("nextPicBtn");

// change pic function
const changePic = () =>{
    currentEmotionIndex++;

    // to loop the images once reaching final image
    if(currentEmotionIndex >= emotions.length) {
        currentEmotionIndex = 0
    }
    face.src = emotions[currentEmotionIndex]
}

nextPicBtn.addEventListener("click", changePic);

//double click face to reset the mood description
face.addEventListener("dblclick", () => {
    moodDisplay.textContent = "Mood: Happy";
  });




//moods
const differentMoods = ["Happy", "Sad", "Excited", "Angry", "Scared"];

const changeMood = () => {
return differentMoods[Math.floor(Math.random() * differentMoods.length)];

}

const moodButton = document.getElementById("moodButton")
const moodDisplay = document.getElementById("moodDisplay")

moodButton.addEventListener("click", () => {
moodDisplay.textContent = "Mood: " + changeMood()
})

// keypress detection
document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "m") {
      moodDisplay.textContent = "Mood: " + changeMood();
    }
  });


//tabs
showTab = (tabName) => {
const tabs = document.querySelectorAll(".tab-button");
tabs.forEach(tab => tab.classList.remove("active"))

const activeTab = document.querySelector(`.tab-button[onclick="showTab('${tabName}')"]`)
activeTab.classList.add('active');

const tabContents = document.querySelectorAll('.tab-pane');
tabContents.forEach(content => content.classList.remove('active'));

const selectedTabContent = document.getElementById(tabName);
selectedTabContent.classList.add('active');

}
showTab('about');


// form
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const sendBtn = document.querySelector("form button");

sendBtn.addEventListener("click", () => {
  let errors = [];

  if (nameInput.value.trim() === "") {
    errors.push("Name is required.");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    errors.push("Enter a valid email.");
  }

  if (passwordInput.value.length < 8) {
    errors.push("Password must be at least 8 characters.");
  }

  if (errors.length > 0) {
    alert(errors.join("\n"));
  } else {
    alert("Form submitted successfully!");
  }
});

// Real-time feedback example:
passwordInput.addEventListener("input", () => {
  passwordInput.style.borderColor = passwordInput.value.length < 8 ? "red" : "green";
});






