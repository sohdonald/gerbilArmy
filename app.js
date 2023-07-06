// wait for user to submit form
// function for user to submit form, or make patchGPrivates a callback
// pass the privateName, privateAge and privateYears into the function
// call/invoke the function
// with toytale lab, we were calling back a function

// fetch data from db.json
//const fetchGerbilP = fetch("http://localhost:3000/gerbilPrivates/")
// fetchGerbilP will have a promise object value
//console.log(fetchGerbilP);
// fetch returns promise, promise is object data type
/* Js uses promises to represent completion or failure
  of asynchronous operation*/
// promises have 3 states, pending, fulfilled, and rejected
//pending is initial state, determined later
// fulfilled is state that meets what the code requested
// rejected does not meet the request

/* Asynchronous programming is a way to perform
  a long-running task while other parts of the 
  program are running
  */

// trying to get data from gerbilPrivate object list
const showGerbilPrivates = document.querySelector("#gerbilPrivates");
const showGerbilCorporals = document.querySelector("#gerbilCorporals");
const showGerbilSergents = document.querySelector("#gerbilSergents");
let gerbilList;

//fetch request first,
fetch("http://localhost:3000/gerbilPrivates/")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // display data in DOM
    //display the names of the gerbils in DOM
    data.forEach((element) => {
      gerbilPNames(element);
    }); //forEach end
  }); // 2nd .then end

fetch("http://localhost:3000/gerbilCorporals/")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // display data in DOM
    //display the names of the gerbils in DOM
    data.forEach((element) => {
      gerbilCNames(element);
    }); //forEach end
  }); // 2nd .then end

function gerbilPNames(element) {
  const privateName = element.name;
  console.log(privateName);
  let gerbilList = document.createElement("li");
  gerbilList.textContent = privateName;
  showGerbilPrivates.append(gerbilList);
  gerbilList.addEventListener("click", () => {
    gerbilList.style.color = "cyan";
  });
} //gerbilPNames end

function gerbilCNames(element) {
  const corporalName = element.name;
  console.log(corporalName);
  let gerbilList = document.createElement("li");
  gerbilList.textContent = corporalName;
  showGerbilCorporals.append(gerbilList);
  gerbilList.addEventListener("click", () => {
    gerbilList.style.color = "purple";
  })
}
//showGerbilCorporals.append(gerbilPList);
//showGerbilSergents.append(gerbilPList)

// can we add the corporals and sergeants too?
//lets give corporals a purple color when their name is clicked
// sergents can have gold
// if (getRank.option.value === "Private") {
//   gerbilPList.style.color = "cyan";
// } else if (getRank.option.value === "Corporal") {
//   gerbilPList.style.color = "purple";
// } else {
//   gerbilPList.style.color = "gold";
// }

// gerbilPList.addEventListener("click", () => {
//   gerbilPList.style.color = "cyan";
// });

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
  if (getRank.option.value === "Private") {
    postGPrivates(
      newRecruit.gerbilPrivateName,
      newRecruit.gerbilPrivateAge,
      newRecruit.gerbilPrivateYears
    );
  } else if (getRank.option.value === "Corporal") {
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
