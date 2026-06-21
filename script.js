
//var declaration
const form = document.getElementById("checkInForm");
const nameInput = document.getElementById('attendeeName');
const teamSelect = document.getElementById('teamSelect');
const attendeeCount = document.getElementById("attendeeCount");
const progressBar = document.getElementById("progressBar");
const greeting = document.getElementById("greeting");
const levelUpMessage = document.getElementById("levelUpMessage");
const attendeeList = document.getElementById("attendeeList");

let count = 0;
const maximum = 50;
//handle form submission
form.addEventListener("submit", function (e){
  e.preventDefault();

  //get values
  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;

  console.log(name, team, teamName);
  count++;
  console.log("total checkins", count)

  //update total count
  attendeeCount.textContent = count;

  //update progressbar
  const percentage = Math.min(Math.round((count / maximum) * 100), 100);
  progressBar.style.width = `${percentage}%`;
  console.log('progress: ' , `${percentage}%`)

  //team counter
  const teamCounter = document.getElementById(team +"Count");
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

  //message
  const message = `Welcome, ${name} from ${teamName}`;
  greeting.textContent = message;
  greeting.style.display = "block";
  greeting.classList.add("success-message");

  const attendeeItem = document.createElement("li");
  attendeeItem.className = `attendee-list-item team-${team}`;

  const attendeeName = document.createElement("span");
  attendeeName.className = "attendee-name";
  attendeeName.textContent = name;

  const attendeeTeam = document.createElement("span");
  attendeeTeam.className = "attendee-team";
  attendeeTeam.textContent = teamName;

  attendeeItem.appendChild(attendeeName);
  attendeeItem.appendChild(attendeeTeam);
  attendeeList.appendChild(attendeeItem);

  if (count >= 25) {
    levelUpMessage.textContent = `Congratulations! ${teamName} has won!`;
    levelUpMessage.classList.add("show");
  } else {
    levelUpMessage.textContent = "";
    levelUpMessage.classList.remove("show");
  }

  form.reset();
  console.log(message)
})