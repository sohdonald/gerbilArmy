const showGerbilPrivates = document.querySelector("#gerbilPrivates");
const showGerbilCorporals = document.querySelector("#gerbilCorporals");
const showGerbilSergents = document.querySelector("#gerbilSergents");

//let gerbilList;

//fetch request first,
fetch("http://localhost:3000/gerbilPrivates/")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // display data in DOM
    //display the names of the gerbils in DOM
    data.forEach((element) => {
      //gerbilPNames(element);
      renderGerbils(showGerbilPrivates, element);
    }); //forEach end
  }); // 2nd .then end
fetch("http://localhost:3000/gerbilCorporals/")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((element) => {
      renderGerbils(showGerbilCorporals, element);
    }); //forEach end
  }); // 2nd .then end

fetch("http://localhost:3000/gerbilSergents/")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((element) => {
      renderGerbils(showGerbilSergents, element);
    }); //forEach end
  }); // 2nd .then end

function renderGerbils(html, element) {
  console.log(html);
  let privateName = element.name;
  let gerbilServed = element.yearsServed;
  let gerbilList = document.createElement("li");
  let findAge = document.querySelector("#gerbilAge");
  let findName = document.querySelector("#gerbilName");
  let placeGerbilPic = document.querySelector("#gerbilPic");
  let findServed = document.querySelector("#yearsServed");
  gerbilList.textContent = privateName;
  html.append(gerbilList);
  gerbilList.addEventListener("click", () => {
    gerbilList.style.color = "navy";
    let ageNumber = element.age;
    findAge.textContent = ageNumber;
    findServed.textContent = gerbilServed;
    // display image on screen when name is clicked
    let getGerbilPic = element.picture;
    findName.textContent = privateName;
    placeGerbilPic.setAttribute("src", getGerbilPic);
  });
}

function addRecruit(url, nameGerbil, ageGerbil, servedYears) {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: nameGerbil,
      age: ageGerbil,
      yearsServed: servedYears,
    }),
  }) //fetch ends
    .then(function (response) {
      return response.json();
    })
    .then((newGerbil) => {
      renderGerbils(newGerbil);
    });
}

const recruitForm = document.getElementById("recruit-form");
const getRank = document.querySelector("#gerbilRank");

recruitForm.addEventListener("submit", function (e) {
  e.preventDefault();
  // what is e.target doing?
  const newRecruit = Object.fromEntries(new FormData(e.target));
  //console.log(FormData(e.target));
  // actually, an if/else statement should do the job
  if (getRank.value === "Private") {
    addRecruit("http://localhost:3000/gerbilPrivates/",
    newRecruit.Name,
    newRecruit.Age,
    newRecruit.Years
    )
  } else if (getRank.value === "Corporal") {
    addRecruit("http://localhost:3000/gerbilCorporals/",
    newRecruit.Name,
    newRecruit.Age,
    newRecruit.Years
    )
  } else {
    addRecruit("http://localhost:3000/gerbilSergents/",
     newRecruit.Name,
     newRecruit.Age,
     newRecruit.Years
     ); // addRecruit ends
  }
}); // addEventListener ends here()

// change the name's color to red

// display all gerbil names

// we want to post data from newPrivate
// name, age, yearsServed render
// use querySelector to get 3 inputs
// use querySelector to get privateName input
// we have Object.fromEntries, make array of arrays into an object
// is this code in the right place?

//dry don't repeat yourself
// tech art called this implementation
// tech act use dry to reduce mouse click

// [] patch method makes changes or updates to object

// How do we move an object from one list into another list?

// 1. it removes the object from one list
// 2. it pushes it into another
