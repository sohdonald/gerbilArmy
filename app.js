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
  
//fetch request first, 
const fetchGerbilP = fetch("http://localhost:3000/gerbilPrivates/")
 .then((response) => response.json())
 .then((data) => console.log(data))

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
    
    .then(() => {
      // with toytale lab, we were calling back a function

      // function newPrivate() {
      //   // what does newPrivate do? Do we even need it?
      //   const getId = object.id;
      //   const getPrivateName = object.name;
      //   const getPrivateAge = object.age;
      //   const getPrivateYears = object.yearsServed;
      // }
     
      // console.log(newPrivate);
      // document.body.append(newPrivate);

     
        
        console.log(postPrivUserInput);
        //console log is not working
        // we need something to get access to the user input
  
    }) // the second .then ends here


    
    .catch(function (error) {
      document.body.append(error);
    }) //this ends .catch

  } //function postGPrivates ends here

  postGPrivates();

  function postPrivUserInput() {
    // might be a good idea to consolidate all this into postPrivUserInput function

  const addPrivName = document.querySelector("#gerbilPrivateName")
  // data type of addPrivName is html input
  // we want the private's name from this input element
  const postPrivName = addPrivName.value;
  // the user input is not showing in db.json

  const addPrivAge = document.querySelector("#gerbilPrivateAge")
  // we want the private's age from this input element
  // something is wrong with addPrivAge.value
  const postPrivAge = addPrivAge.value;

  const addPrivYears = document.querySelector("#gerbilPrivateYears")
  // we want the private's yearsServed from this input element
  // something is wrong with .value
  const postPrivYears = addPrivYears.value;

  } // end of postPrivUserInput

  document
  .getElementById("gerbil-private-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    // what is e.target doing?
    console.log(e.target);
    // name, age, yearsServed render
    // use querySelector to get 3 inputs
    // use querySelector to get privateName input
  }) // addEventListener ends here
    
  

  
  //dry don't repeat yourself
  // tech art called this implementation
  // tech act use dry to reduce mouse click


// [] patch method makes changes or updates to object

// How do we move an object from one list into another list?

// 1. it removes the object from one list
// 2. it pushes it into another
