let form = document.querySelector(".check_in");

function check_data(data, pattern) {
  let flag;
  if (!data.value.match(pattern)) {
    data.style.border = "2px solid red";
    flag = false;
  } else {
    data.style.border = "2px solid green";
    flag = true;
  }
  return flag;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let pattern_pib = /^[A-ZА-Я][a-zA-ZА-Яа-я]+ [A-ZА-Я]\.[A-ZА-Я]\.$/;
  let pattern_var = /\d{2}$/;
  let pattern_group = /[A-ZА-Я]{2}[-]\d{2}$/;
  let pattern_phone = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
  let pattern_idNum = /^[A-ZА-Я]{2} №\d{6}$/;

  let pib = document.getElementById("pib");
  let result_pib = check_data(pib, pattern_pib);

  let variant = document.getElementById("variant");
  let result_var = check_data(variant, pattern_var);

  let group = document.getElementById("group");
  let result_group = check_data(group, pattern_group);

  let phone = document.getElementById("phone");
  let result_phn = check_data(phone, pattern_phone);

  let idCard = document.getElementById("idCard");
  let result_idNum = check_data(idCard, pattern_idNum);

  if (result_pib && result_var && result_group && result_phn && result_idNum) {
    info.innerHTML = "";
    info.innerHTML +=
      "ПІБ: " +
      pib.value +
      "<br>" +
      "Варіант: " +
      variant.value +
      "<br>" +
      "Група: " +
      group.value +
      "<br>" +
      "Телефон: " +
      phone.value +
      "<br>" +
      "ID-card: " +
      idCard.value;
  } else {
    alert("Неправильний формат вводу");
  }
});

const TaskNum = 1;

function generateTable() {
  Table_Gen = document.getElementById("table_con");
  let table = document.createElement("table");

  for (let i = 0; i < 6; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < 6; j++) {
      cell = document.createElement("td");
      let value = i * 6 + j + 1;
      cell.innerHTML = value;
      cell.id = value;
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  Table_Gen.appendChild(table);
}

function rand() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function cellRand(cell) {
  cell.style.backgroundColor = rand();
}

function cellRgb(cell) {
  const rgbB = document.getElementById("rgbB");
  cell.style.backgroundColor = rgbB.value;
}

function cellsRgb() {
  const v = TaskNum;
  for (let j = v; j < 7; j += 1) {
    document.getElementById(j).style.backgroundColor = rgbB.value;
  }
}

generateTable();

my_cell = document.getElementById(TaskNum);
my_cell.addEventListener("mouseover", () => cellRand(my_cell));
my_cell.addEventListener("click", () => cellRgb(my_cell));
my_cell.addEventListener("dblclick", () => cellsRgb());
