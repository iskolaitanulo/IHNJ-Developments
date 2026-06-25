function get_random() {
  const checked = [...document.querySelectorAll('input[type="checkbox"]:checked')]
    .map(cb => cb.nextElementSibling.textContent.trim());

  if (checked.length === 0) {
    return "None";
  }

  return checked[Math.floor(Math.random() * checked.length)];
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

const allTank=document.querySelector("#allTank");

const tankOptions=document.querySelectorAll(".tank");

function selectAllTank() {
  const tankIsChecked=allTank.checked;
  for(let i=0;i<tankOptions.length;i++){
    tankOptions[i].checked = tankIsChecked;
  }
}

const allDuelist=document.querySelector("#allDuelist");

const duelistOptions=document.querySelectorAll(".duelist");

function selectAllDuelist() {
  const duelistIsChecked=allDuelist.checked;
  for(let i=0;i<duelistOptions.length;i++){
    duelistOptions[i].checked = duelistIsChecked;
  }
}

const allSupport=document.querySelector("#allSupport");

const supportOptions=document.querySelectorAll(".support");

function selectAllSupport() {
  const supportIsChecked=allSupport.checked;
  for(let i=0;i<supportOptions.length;i++){
    supportOptions[i].checked = supportIsChecked;
  }
}