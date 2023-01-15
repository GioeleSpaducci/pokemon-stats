export let cardContainer = {
  cards: {},

  //filters
  sortByHeight() {
    const entries = [];
    for (let [key, value] of Object.entries(cardContainer.cards)) {
      entries.push([key, value.height])
    }
    entries.sort((a, b) => a[1] - b[1]);
    for (let [index, entry] of entries.entries()) {
      document.getElementById(entry[0]).style.order = index + 1
    }
  },
  sortByWeight() {
    let entries = [];
    for (let [key, value] of Object.entries(cardContainer.cards)) {
      entries.push([key, value.weight])
    }
    entries.sort((a, b) => a[1] - b[1]);
    for (let [index, entry] of entries.entries()) {
      document.getElementById(entry[0]).style.order = index + 1
    }
  },
  sortByHp() {
    let entries = [];
    for (let [key, value] of Object.entries(cardContainer.cards)) {
      entries.push([key, value.hp])
    }
    entries.sort((a, b) => a[1] - b[1]);
    for (let [index, entry] of entries.entries()) {
      document.getElementById(entry[0]).style.order = index + 1
    }
  }
}