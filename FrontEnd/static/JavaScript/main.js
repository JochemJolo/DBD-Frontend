const killeritems = [
    { name: "Huntress", img:"Images/Killers/Huntress-pfp.png", id:"huntress", text:"This is the Huntress, she uses hatches that she throws in a zurve. You can recognize her bij her specific whistle."},
    { name: "Trapper", img:"Images/Killers/Trapper-pfp.png", id:"trapper", text:"This is the Trapper, he places beartraps on the ground to trap you. You can recognize him when there are beartraps on the ground."},
    { name: "Wraith", img:"Images/Killers/Wraith-pfp.png", id:"wraith", text:"This is the Wraith, he uses a bell that makes him invisible or visible. You can't recognize him, when you see him it's already too late."},
    { name: "Cannibal", img:"Images/Killers/Cannibal-pfp.png", id:"cannibal", text:"This is the Cannibal, he uses a chainsaw for movement or to catch you. You recognize him bij de sound of a chainsaw, just like The HillBilly."},
    { name: "Doctor", img:"Images/Killers/Doctor-pfp.png", id:"doctor", text:"This is the Doctor, he uses electricity to make the people around him scream. You recognize him bij the sound of an elctric shock."},
    { name: "Hill-Billy", img:"Images/Killers/Hill_Billy-pfp.png", id:"hillBilly", text:"This is the HillBilly, he uses a chainsaw for movement or to catch you. You recognize him bij de sound of a chainsaw, just like The Cannibal."},
    { name: "Nurse", img:"Images/Killers/Nurse-pfp.png", id:"nurse", text:'This is the Nurse, she uses the spell "Blink" to teleport a certain distance in an instance. You can hear her from a distant when she makes a high pitch scream.'},
    { name: "The Hag", img:"Images/Killers/The_Hag-pfp.png", id:"theHag", text:"This is the Hag, she uses dirt to make a spell on the ground where she can teleport to when someone walks over it. You recognize her when she suddenly teleports right infornt of you or if you see the spell on the ground."},
];  // A item list that is being use in a function below here

const survivoritems = [
  {name:"Ace Visconti" ,img:"Images/Survivors/Ace_Visconti-pfp.png", id:"aceVisconti", text:"This is Ace Visconti, he was a gambler when he suddely came here. How unlucky of him."},
  {name:"Claudette Morel" ,img:"Images/Survivors/Claudette_Morel-pfp.png", id:"claudetteMorel", text:"This is Claudette Morel, she was studying botania. After she studied the wrong plants she woke up in this cursed place."},
  {name:"Dwight Fairfield" ,img:"Images/Survivors/Dwight_Fairfield-pfp.png", id:"dwightFairfield", text:"This is Dwight Fairfield, he was a good team-leader. After a long work day he somehow stumbled into this place."},
  {name:"Feng Min" ,img:"Images/Survivors/Feng_Min-pfp.png", id:"fengMin", text:"This is Feng Min, she was an athlete before she came here. She competed against Meg Thomas"},
  {name:"Jake Park" ,img:"Images/Survivors/Jake_Park-pfp.png", id:"jakePark", text:"This is Jake Park, he was survivalist. He came here when he was exploring an unidentified cave."},
  {name:"Meg Thomas" ,img:"Images/Survivors/Meg_Thomas-pfp.png", id:"megThomas", text:"This is Meg Thomas, she was an athlete before she came here. She competed againts Feng Min."},
  {name:"Nea Karlsson" ,img:"Images/Survivors/Nea_Karlsson-pfp.png", id:"neaKarlsson", text:"This is Nea Karlsson, she is a street artist. After escaping the police she fell into here."},
  {name:'William "Bill" Overbeck' ,img:"Images/Survivors/William_Overbeck-pfp.png", id:"williamOverbeck", text:'This is William "Bill" Overbeck, he was a retired veteran. He suddenly found him self here after waking up from an amazing nap.'},
];  // A item list that is being use in a function below here

const killerlist = document.getElementById("boxListsKiller")
const survivorlist = document.getElementById("boxListsSurvivor")
const dialog = document.getElementById("itemDialog");
const dialogImg = document.getElementById("dialogImg");
const dialogName = document.getElementById("dialogName");

function setupList(container, items) {
  container.innerHTML = items.map(item => `
    <li class="Box" data-id="${item.id}">
      <img id="${item.id}" class="Image-Box" src="${item.img}" alt="${item.name}">
      ${item.name}
    </li>
  `).join("");

  container.addEventListener("click", (event) => {
    const li = event.target.closest(".Box");
    if (!li) return;

    const item = items.find(i => i.id === li.dataset.id);
    dialogImg.src = item.img;
    dialogImg.alt = item.name;
    dialogName.textContent = item.text;
    dialog.showModal();    // Shows a Dialog about that Charactor to know more about what that Character does inside the game
  });
}

setupList(killerlist, killeritems);
setupList(survivorlist, survivoritems);

document.getElementById("dialogClose").addEventListener("click", () => dialog.close());  // This closes the Dialog when you click on the Close Button

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();  // This closes the Dialog when you click anywhere else on the darkend background
});

function VisibilityChange() {
  const VisibilityKiller = document.querySelector(".Killer-Front")
  const VisibilitySurvivor = document.querySelector(".Survivor-Front")
  
  VisibilityKiller.classList.toggle("Hiding")
  VisibilitySurvivor.classList.toggle("Hiding")
};    // changes the visibility of the two main divs that show the "Killers" or "Survivors"