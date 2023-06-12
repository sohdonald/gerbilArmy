// wait for user to submit form
// function for user to submit form, or make patchGPrivates a callback

function postGPrivates(privateName, privateAge, privateYears) {
  console.log("postGPrivates");
  fetch("http://localhost:3000/gerbilPrivates/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },

    body: JSON.stringify({
      name: privateName,
      age: privateAge,
      yearsServed: privateYears,
    }),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      function newPrivate() {
        const getId = object.id;
        const getPrivateName = object.name;
        const getPrivateAge = object.age;
        const getPrivateYears = object.yearsServed;
      }
     
      console.log(newPrivate);
      document.body.append(newPrivate);

    })

    .catch(function (error) {
      document.body.append(error);
    });
}
  //dry don't repeat yourself
  // tech art called this implementation
  // tech act use dry to reduce mouse clicks

document
  .getElementById("gerbil-private-form")
  .addEventListener("submit", function (e) {
    console.log(e.target);
    patchGPrivates(e.target);
  });

//patchGPrivates();
