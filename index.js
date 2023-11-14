const arrowIcons = document.querySelectorAll(".arrow-down-icon");
const questions = document.querySelectorAll(".questions");
const hiddenAnswers = document.querySelectorAll(".hidden-answer");





arrowIcons.forEach((arrowIcon, index) => {
  arrowIcon.addEventListener("click", () => {
    if(hiddenAnswers[index].style.display === "block"){
      arrowIcon.style.transform = "rotate(0deg)";
      hiddenAnswers[index].style.display = "none";
      questions[index].style.color = "hsl(240, 6%, 50%)";
    } else {
      arrowIcon.style.transform = "rotate(180deg)";
      hiddenAnswers[index].style.display = "block";
      questions[index].style.color = "black";
    }
  });
});

