function filterFunction() {

  hearthstoneBattlegroundsOjbect.forEach((element) => {
    const toHide = document.getElementById(`minion-name-${element.name}`);
    toHide.classList.add("none");
  }) 

  const filterTextUpper = document.getElementById("filter-minions").value.toUpperCase();
  const filterText = document.getElementById("filter-minions").value;

  hearthstoneBattlegroundsOjbect.forEach((element) => {
    console.log("1", element.type.toUpperCase(), "2", filterTextUpper, element.type.toUpperCase() == filterTextUpper)
    if ((element.type.toUpperCase() == filterTextUpper)){
      const toShow = document.getElementById(`minion-name-${element.name}`);
      toShow.classList.remove("none");
    } else if (element.tier == filterTextUpper) {
      const toShow = document.getElementById(`minion-name-${element.name}`);
      toShow.classList.remove("none");
    } else if (element.keywords.includes(`${filterText}`)) {
      const toShow = document.getElementById(`minion-name-${element.name}`);
      toShow.classList.remove("none");
    } 
  })
}


function clearFilter() {
  hearthstoneBattlegroundsOjbect.forEach((element) => {
      const toHide = document.getElementById(`minion-name-${element.name}`);
      toHide.classList.add("none");
    }) 
  }


document.addEventListener('DOMContentLoaded', () => {
  createMinionList();

  function createMinionList() {
    const minionsListBox = document.getElementById("list-box");
    for (let i = 0; i < hearthstoneBattlegroundsOjbect.length; i++) {
      let minionListItem = document.createElement("img");
      minionListItem.setAttribute("id", `minion-name-${hearthstoneBattlegroundsOjbect[i].name}`);
      minionListItem.classList.add("none")
      minionListItem.src = `${minionImages[i]}`;
      minionsListBox.appendChild(minionListItem);
    }
  }
});

