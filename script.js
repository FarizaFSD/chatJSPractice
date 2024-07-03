let mesajlar = JSON.parse(localStorage.getItem("mesajlar")) || [];

window.onload = () => list();

const mesaj = (param) => {
  let obj;

  if (param) {
    obj = {
      id: Date.now(),
      rol: 1,
      mesaj: document.getElementById("mesaj1").value,
    };
    document.getElementById("form1").reset();
  } else {
    obj = {
      id: Date.now(),
      rol: 0,
      mesaj: document.getElementById("mesaj0").value,
    };
    document.getElementById("form0").reset();
  }

  mesajlar.push(obj);
  localStorage.setItem("mesajlar", JSON.stringify(mesajlar));
  list();
};

const list = () => {
  let alan = document.getElementById("alan");
  alan.innerHTML = "";

  mesajlar.forEach((el) => {
    let div = document.createElement("div");

    if (el.rol) {
      div.classList = "bg-dark text-light p-2 card mt-2 right-text edit";
      div.innerHTML = `<input id="new-${el.id}" type="text" class="form-control bg-dark border-0 text-light" value="${el.mesaj}" onchange="editMessage(${el.id})"></input>
        <button type="button" class="btn  btn-danger" onclick="deleteMessage(${el.id})">Delete</button>

`;
    } else {
      div.classList = "bg-primary text-light p-2 card mt-2 left-text edit";
      div.innerHTML = `<input id="new-${el.id}" type="text" class="form-control bg-primary border-0 text-light" value="${el.mesaj}" onchange="editMessage(${el.id})"></input>
        <button type="button" class="btn  btn-danger" onclick="deleteMessage(${el.id})">Delete</button>

`;
    }

    alan.appendChild(div);
  });
};

const deleteMessage = (id) => {
  mesajlar = mesajlar.filter((data) => data.id != id);
  localStorage.setItem("mesajlar", JSON.stringify(mesajlar));
  list();
};

const editMessage = (id) => {
    let inp = document.getElementById(`new-${id}`).value;
    let index = mesajlar.findIndex(data => data.id == id)
    mesajlar[index].mesaj = inp
    localStorage.setItem("mesajlar", JSON.stringify(mesajlar));
    list();
};
