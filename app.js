
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
      renderGerbils(showGerbilPrivates, element)
    }); //forEach end
  }); // 2nd .then end
fetch("http://localhost:3000/gerbilCorporals/")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((element) => {
      gerbilCNames(element);
    }); //forEach end
  }); // 2nd .then end

fetch("http://localhost:3000/gerbilSergents/")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((element) => {
      gerbilSNames(element);
    }); //forEach end
  }); // 2nd .then end

function renderGerbils(html,element) {
console.log(html)
  let privateName = element.name;
  let gerbilServed =element.yearsServed
  let gerbilList = document.createElement("li");
  let findAge = document.querySelector("#gerbilAge")
  let findName = document.querySelector("#gerbilName")
  let placeGerbilPic = document.querySelector("#gerbilPic")
  let findServed = document.querySelector("#yearsServed")
  gerbilList.textContent = privateName;
  html.append(gerbilList);
  gerbilList.addEventListener("click", () => {
    gerbilList.style.color = "navy";
    let ageNumber = element.age
    findAge.textContent= ageNumber
    findServed.textContent = gerbilServed
    // display image on screen when name is clicked
    let getGerbilPic = element.picture;
    findName.textContent = privateName
    placeGerbilPic.setAttribute("src", getGerbilPic);
  });
}

//renderGerbils(showGerbilPrivates)
//renderGerbils(showGerbilCorporals)




// function gerbilPNames(element) {
//   const privateName = element.name;
//   let gerbilServed =element.yearsServed
//   let gerbilList = document.createElement("li");
//   let findAge = document.querySelector("#gerbilAge")
//   let findName = document.querySelector("#gerbilName")
//   let placeGerbilPic = document.querySelector("#gerbilPic")
//   let findServed = document.querySelector("#yearsServed")
//   let findRank = document.querySelector("#gerbilRank")
//   gerbilList.textContent = privateName;
//   showGerbilPrivates.append(gerbilList);
//   gerbilList.addEventListener("click", () => {
//     gerbilList.style.color = "navy";
//     let ageNumber = element.age
//     findAge.textContent= ageNumber
//     findServed.textContent = gerbilServed
//     // display image on screen when name is clicked
//     let getGerbilPic = element.picture;
//     findName.textContent = privateName
//     placeGerbilPic.setAttribute("src", getGerbilPic);
//   });
//   // display age
// } //gerbilPNames end


/* tried to make it it's own function, but looks like it's 
either a scope or sync issue */

//  function gerbilImg(element) {
//   const getGerbilPic = element.picture;
//   makeGerbilPic.setAttribute("src", getGerbilPic)
//    makeGerbilPic.setAttribute("class", "gerbilImg")
//    gerbilList.append(makeGerbilPic)
//  }

function gerbilCNames(element) {
  const corporalName = element.name;
  console.log(corporalName);
  let gerbilList = document.createElement("li");
  gerbilList.textContent = corporalName;
  showGerbilCorporals.append(gerbilList);
  gerbilList.addEventListener("click", () => {
    gerbilList.style.color = "purple";
  });
} // gerbilCNames end

function gerbilSNames(element) {
  const sergentName = element.name;
  console.log(sergentName);
  let gerbilList = document.createElement("li");
  gerbilList.textContent = sergentName;
  showGerbilSergents.append(gerbilList);
  gerbilList.addEventListener("click", () => {
    gerbilList.style.color = "brown";
  });
} // gerbilCNames end
//showGerbilCorporals.append(gerbilPList);
//showGerbilSergents.append(gerbilPList)

function postGPrivates(privateName, privateAge, privateYears) {
  fetch("http://localhost:3000/gerbilPrivates/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    //.stringify transforms the object into strings
    // converts a JavaScript value to a JSON string
    body: JSON.stringify({
      name: privateName,
      age: privateAge,
      yearsServed: privateYears,
    }),
  }) //this ends the fetch
    .then(function (response) {
      return response.json();
    }) //first .then ends here
    // second .then is important
    .then((newPrivate) => {
      gerbilPNames(newPrivate);
    }); // the second .then ends here
} // postGPrivates ends

function postGCorporals(corporalName, corporalAge, corporalYears) {
  fetch("http://localhost:3000/gerbilCorporals/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: corporalName,
      age: corporalAge,
      yearsServed: corporalYears,
    }),
  }) //this ends the fetch
    .then(function (response) {
      return response.json();
    }) //first .then ends here
    // second .then is important
    .then((newCorporal) => {
      gerbilCNames(newCorporal);
    }); // the second .then ends here
} //function postGCorporals ends here

function postGSergents(sergentName, sergentAge, sergentYears) {
  fetch("http://localhost:3000/gerbilSergents/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: sergentName,
      age: sergentAge,
      yearsServed: sergentYears,
    }),
  }) //this ends the fetch
    .then(function (response) {
      return response.json();
    }) //first .then ends here
    // second .then is important
    .then((newSergent) => {
      gerbilSNames(newSergent);
    }); // the second .then ends here
} //function postGCorporals ends here

const recruitForm = document.getElementById("recruit-form");
const getRank = document.querySelector("#gerbilRank");

recruitForm.addEventListener("submit", function (e) {
  e.preventDefault();
  // what is e.target doing?
  const newRecruit = Object.fromEntries(new FormData(e.target));
  //console.log(FormData(e.target));
  // actually, an if/else statement should do the job
  if (getRank.value === "Private") {
    postGPrivates(
      newRecruit.gerbilPrivateName,
      newRecruit.gerbilPrivateAge,
      newRecruit.gerbilPrivateYears
    );
  } else if (getRank.value === "Corporal") {
    postGCorporals(
      newRecruit.gerbilPrivateName,
      newRecruit.gerbilPrivateAge,
      newRecruit.gerbilPrivateYears
    );
  } else {
    postGSergents(
      newRecruit.gerbilPrivateName,
      newRecruit.gerbilPrivateAge,
      newRecruit.gerbilPrivateYears
    );
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
