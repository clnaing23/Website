var modal = document.getElementsByClassName("modal")[0];

var btn = document.getElementsByClassName("project-button")[0];

var closeBtn = document.getElementsByClassName("closeBtn")[0];

var items = document.querySelectorAll('.project-item');

btn.onclick = function OpenModal() {
  modal.style.display = "block";
  items.forEach(item => item.style.display='none');
};

closeBtn.onclick = function CloseModal() {
  console.log("close");
  modal.style.display = "none";
  items.forEach(item => item.style.display='');
};

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.key == "Escape" && modal.style.display == "block") {
        modal.style.display = "none";
        items.forEach(item => item.style.display='');
    }
};

