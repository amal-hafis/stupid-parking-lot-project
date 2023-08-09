const draggables = document.querySelectorAll(".draggable")
const free = document.querySelector(".freespot")
const container = document.querySelector(".parking-free")
const timer = document.querySelector("#timer")
const occupied = document.querySelector(".occupied")
const unoccupied = document.querySelector(".unoccupied")

draggables.forEach(draggable => {
    draggable.addEventListener("dragstart", () => {
        draggable.classList.add("dragging")

        draggable.addEventListener("dragend", () => {
            draggable.classList.remove("dragging")
        })
    })
})



function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    const interval = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
  
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
  
      display.textContent = minutes + ":" + seconds;
  
      if (--timer < 0) {
        clearInterval(interval);
        display.textContent = "free tier over - it'll cost 10$/min from now on";
        alert("10$/min charging fees deducted");
      }
      
    }, 1000);
    
  }
  
  
  container.addEventListener("dragover", e => {
    e.preventDefault()
    const draggable = document.querySelector(".dragging")
    container.appendChild(draggable)
    container.removeChild(free)
    occupied.textContent = 6;
    unoccupied.textContent = 0;

    startTimer(60, timer);
    
    
})