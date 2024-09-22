var myModal = document.getElementById("myModal");
var windowTitle = document.getElementById("windowTitle");
var btns = document.getElementsByClassName("modalButton");
var span = document.getElementsByClassName("closeButton")[0];

for (var i = 0; i < btns.length; i++) {
  btns[i].onclick = function () {
    myModal.classList.remove("hidden");
    windowTitle.textContent = `Hello, I'm the ${this.textContent}`;
  };
}


span.onclick = function () {
  myModal.classList.add("hidden");
};


window.onclick = function (event) {
  if (event.target == myModal) {
    myModal.classList.add("hidden");
  }
};
