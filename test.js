class user {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    talk() {
        console.log("I can tal");
    }
}
const user1 = new user("Suada", 8);
const user2 = new user("Amina", 15);
const user3 = new user("Fuad", 19);
user3.talk();


//zad 2
//1
function isSymmetric(num) {
    if (typeof num !== 'number') {
      return false;
    }
    const str = num.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  console.log(isSymmetric(4444));       
console.log(isSymmetric(43879)); 

//2

function plusHash(str) {
    let hash = 0;
    let plus = 0;

    for (let i = 0; i < str.length; i++) {
      if (str[i] === '#') {
        hash += 1;
      } else if (str[i] === '+') {
        plus += 1;
      }
    }

    return [hash, plus];
}
console.log(plusHash("### +"));                           

//3

function secret(name) {
    const firstLetter = name.map(name => name[0].toUpperCase());
    return firstLetter.sort().join('');
}
console.log(secret(["Ayla", "Suada", "Fuad"])); 

//4

function Letters(a) {

    let rev = '';

    for (let i = 0; i < a.length; i++) {
      const char = word[i];
    if (char === char.toUpperCase()) {
        rev += char.toLowerCase();
    } else {
        rev += char.toUpperCase();
    }
    }
    return rev;
}
console.log(Letters("Happy Birthday"));  

