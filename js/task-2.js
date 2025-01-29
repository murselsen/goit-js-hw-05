console.log('~~~~~~~~~ Task 2: ~~~~~~~~~');

<<<<<<< HEAD
//Görev 2. Arkadaşı olan kullanıcılar
 
const getUsersWithFriend = (users, friendName) => {
  let friends = users.filter(user => user.friends.includes(friendName));
  return friends;
};
=======
// Görev 2. Depo

class Storage {
  #items;
  constructor(items) {
    this.#items = items;
  }
  getItems() {
    return this.#items;
  }
  addItem(newItem) {
    this.#items.push(newItem);
  }
  removeItem(itemToRemove) {
    let newItemList = this.#items.filter(item => item !== itemToRemove);
    this.#items = newItemList;
  }
}
>>>>>>> 4dd9ec0f649a3a7bacfbf7153ae76566774d3350

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
