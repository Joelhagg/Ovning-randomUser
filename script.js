let users = document.getElementById("users");
let userName = document.createElement("h3");
let userGender = document.createElement("h3");
let userAge = document.createElement("h3");
let userCountry = document.createElement("h3");
let userEmail = document.createElement("h3");
let userImg = document.createElement("img");

async function getNewUser() {
  let user = await call("https://randomuser.me/api/");
  savedUser(user);
}

async function call(url) {
  let response = await fetch(url);
  let result = await response.json();
  return result;
}

function savedUser(user) {
  console.log(user);

  userName.innerHTML = `${user.results[0].name.title} ${user.results[0].name.first} ${user.results[0].name.last}`;
  users.append(userName);

  userGender.innerHTML = `${user.results[0].gender}`;
  users.append(userGender);

  userAge.innerHTML = `Ålder: ${user.results[0].dob.age}`;
  users.append(userAge);

  userCountry.innerHTML = `Från: ${user.results[0].location.country}`;
  users.append(userCountry);

  userEmail.innerHTML = `Email: ${user.results[0].email} <br>`;
  users.append(userEmail);

  userImg.src = user.results[0].picture.large;
  users.append(userImg);
}

let getNewUserBtn = document.getElementById("getNewUser");
getNewUserBtn.addEventListener("click", getNewUser);
