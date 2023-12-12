const addButton = document.getElementById("addButton");
const user = document.getElementById("user");

addButton.addEventListener("click", () => {
  let person = document.createElement("div");
  person.className = "person";
  user.appendChild(person);
  findUserInfo(person);
});

function findUserInfo(person) {
  let link = "https://randomuser.me/api";
  fetch(link)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      newUser(data, person);
    });
}

function newUser(data, person) {
  let userData = data?.results[0];

  let picture = document.createElement("img");
  picture.src = userData?.picture?.large;
  person.appendChild(picture);

  let email = document.createElement("div");
  email.innerText = `Email: ${userData?.email}`;
  person.appendChild(email);

  let name = document.createElement("div");
  name.innerText = `Name: ${Object.values(userData?.name).join(" ")}`;
  person.appendChild(name);

  let cell = document.createElement("div");
  cell.innerText = `Phone: ${userData?.cell}`;
  person.appendChild(cell);

  let city = document.createElement("div");
  city.innerText = `City: ${userData?.location?.city}`;
  person.appendChild(city);
}
