const msg = document.getElementById("vote-msg");

function submitVote(choice) {
  if (!msg) return;

  if (choice === "yes") {
    msg.textContent = "Still needs more innovation, but there is hope.";
  } else if (choice === "no") {
    msg.textContent = "The roar of dead dinosaurs engines cannot be beaten!!";
  }
}
