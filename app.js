// wait for user to submit form
// function for user to submit form, or make patchGPrivates a callback
 // pass the privateName, privateAge and privateYears into the function
 // call/invoke the function

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
  })
    .then(function (response) {
      return response.json();
    })

    // second .then is important
    
    .then(function (object) {
      // with toytale lab, we were calling back a function

      document
      .getElementById("gerbil-private-form")
      .addEventListener("submit", function (e) {
        e.preventDefault();
        console.log(e.target);
        // name, age, yearsServed render
        // use querySelector to get 3 inputs
        // use querySelector to get privateName input
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
    
        console.log(postPrivName);
        //console.log(postPrivAge);
        // we need something to get access to the user input
        
        postGPrivates();
    })

    .catch(function (error) {
      document.body.append(error);
    });
}
  //dry don't repeat yourself
  // tech art called this implementation
  // tech act use dry to reduce mouse clicks



function patchGPrivates() {

};

// [] patch method makes changes or updates to object

// How do we move an object from one list into another list?

// 1. it removes the object from one list
// 2. it pushes it into another
