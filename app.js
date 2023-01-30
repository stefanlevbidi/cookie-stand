// Seattle Shop //---------------------------

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const seattle = {
  name: "Seattle",
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  custPerHour: [],
  getCustPerHour: function() {
    for(let i = 0; i < hours.length; i++) {
      let numCusts = randomNum(this.minCust, this.maxCust);
      this.custPerHour.push(numCusts);
    }
    this.calcCookiesPerHour();
  }
  calcCookiesPerHour: function(){
    for(let i = 0; < seattle.custPerHour.length; i++){
        this.calcCookiesPerHour.push(this.custPerHour[i] * 6.3)
    }
  }
}

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

seattle.getCustPerHour();
console.log(seattle)

const seattleDiv = document.getElementbyID("seattle")

const h2 = document.createElement("h2")
h2.textContent = seattle.name;
seattleDiv.appendChild(h2);

for(let i = 0; < seattle.custPerHour.length; i++) {
}


















// Tokyo Shop //------------------------------

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const tokyo = {
  name: "Tokyo",
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  custPerHour: [],
  getCustPerHour: function() {
    for(let i = 0; i < hours.length; i++) {
      let numCusts = randomNum(this.minCust, this.maxCust);
      this.custPerHour.push(numCusts)
    }
  }
}

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

seattle.getCustPerHour();
console.log(tokyo)

// Dubai Shop //--------------------------


const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const dubai = {
  name: "Dubai",
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  custPerHour: [],
  getCustPerHour: function() {
    for(let i = 0; i < hours.length; i++) {
      let numCusts = randomNum(this.minCust, this.maxCust);
      this.custPerHour.push(numCusts)
    }
  }
}

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

seattle.getCustPerHour();
console.log(dubai)

// Paris Shop //--------------------------


const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const paris = {
  name: "Paris",
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  custPerHour: [],
  getCustPerHour: function() {
    for(let i = 0; i < hours.length; i++) {
      let numCusts = randomNum(this.minCust, this.maxCust);
      this.custPerHour.push(numCusts)
    }
  }
}

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

seattle.getCustPerHour();
console.log(paris)

// Lima Shop //-----------------------------


const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const lima = {
  name: "Lima",
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  custPerHour: [],
  getCustPerHour: function() {
    for(let i = 0; i < hours.length; i++) {
      let numCusts = randomNum(this.minCust, this.maxCust);
      this.custPerHour.push(numCusts)
    }
  }
}

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

seattle.getCustPerHour();
console.log(lima)