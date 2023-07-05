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
const showGerbilPrivates = document.querySelector("#gerbilPrivates")
//fetch request first,
fetch("http://localhost:3000/gerbilPrivates/")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // display data in DOM
    //display the names of the gerbils in DOM
    data.forEach(element => {
      console.log(element)
      const privateName = element.name
      console.log(privateName)
      const gerbilPList = document.createElement("li")
      gerbilPList.textContent = privateName
      showGerbilPrivates.append(gerbilPList)

      gerbilPList.addEventListener("click", () => {
        gerbilPList.style.color = "cyan";
      })
    });
  });

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
      const gerbilPrivatesContainer = document.querySelector("#gerbilPrivates");
      const gerbilParagraph = document.createElement("p");
      gerbilParagraph.textContent = newPrivate.name;
      gerbilPrivatesContainer.append(gerbilParagraph);
    }); // the second .then ends here

  // with toytale lab, we were calling back a function
  // function newPrivate() {
  // what does newPrivate do? Do we even need it?
  //   const getId = object.id;
  //   const getPrivateName = object.name;
  //   const getPrivateAge = object.age;
  //   const getPrivateYears = object.yearsServed;
  // }

  // console.log(newPrivate);
  // document.body.append(newPrivate);
  //console log is not working
  // we need something to get access to the user input

  //  .catch(function (error) {
  //    document.body.append(error);
  //  }); //this ends .catch
} //function postGPrivates ends here

const privateForm = document.getElementById("gerbil-private-form");
privateForm.addEventListener("submit", function (e) {
  e.preventDefault();
  // what is e.target doing?
  const newPrivate = Object.fromEntries(new FormData(e.target));
  //console.log(FormData(e.target));

  postGPrivates(
    newPrivate.gerbilPrivateName,
    newPrivate.gerbilPrivateAge,
    newPrivate.gerbilPrivateYears
  );
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
