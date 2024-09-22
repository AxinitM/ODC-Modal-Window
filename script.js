// Get the modal
var myModal = document.getElementById("myModal");
var windowTitle = document.getElementById("windowTitle");

// Get all buttons that open the modal
var btns = document.getElementsByClassName("modalButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeButton")[0];

// Loop through all buttons and add an event listener

for (var i = 0; i < btns.length; i++) {
  btns[i].onclick = function () {
    myModal.classList.remove("hidden");
    windowTitle.textContent = `Hello, I'm the ${this.textContent}`;
  };
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  myModal.classList.add("hidden"); // Добавляем класс hidden при закрытии
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == myModal) {
    myModal.classList.add("hidden"); // Добавляем класс hidden при клике снаружи
  }
};
