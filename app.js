'use strict';




//Strict Definitions
const salmonPage = document.getElementById('salmon-Page');
const hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];


// Seattle //

let City1 = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  total: 0,
  //Storage for total logic
  hours: [],





  //Seattle Render Logic//
  render: function () {
    let aElem = document.createElement('article');
    salmonPage.appendChild(aElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    aElem.appendChild(h2Elem);

    let pElem = document.createElement('p');
    pElem.textContent = `${this.name}'s hourly sales are:`;
    aElem.appendChild(pElem);
  },
  //Seattle Sales Logic//
  salesAvg: function () {

    for (let i = 0; i < hours.length; i++) {
      let avgsales = Math.floor(Math.random() * this.avg * ((this.max) - (this.min) + 1));
      this.hours.push(avgsales);
      this.total += avgsales;
      console.log(this.total);
      //this.total = this.total +


      let res = `${hours[i]}: ${avgsales}`;


      let liElem = document.createElement('li');
      liElem.textContent = res;
      let ulid = document.getElementById(this.name);
      ulid.appendChild(liElem);
    }
  }
};


// Tokyo
let City2 = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  total: 0,
  //Storage for total logic
  hours: [],

  //Tokyo Render Logic//
  render: function () {
    let aElem = document.createElement('article');
    salmonPage.appendChild(aElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    aElem.appendChild(h2Elem);

    let pElem = document.createElement('p');
    pElem.textContent = `${this.name}'s hourly sales are:`;
    aElem.appendChild(pElem);
  },
  //Tokyo Sales Logic//
  salesAvg: function () {

    for (let i = 0; i < hours.length; i++) {
      let avgsales = Math.floor(Math.random() * this.avg * ((this.max) - (this.min) + 1));
      this.hours.push(avgsales);
      this.total += avgsales;
      console.log(this.total);
      let res = `${hours[i]}: ${avgsales}`;
      console.log(res);

      let liElem = document.createElement('li');
      liElem.textContent = res;
      let ulid = document.getElementById(this.name);
      ulid.appendChild(liElem);
    }
  }
};


//Dubai
let City3 = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  total: 0,
  //Storage for total logic
  hours: [],

  //Dubai Render Logic//
  render: function () {
    let aElem = document.createElement('article');
    salmonPage.appendChild(aElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    aElem.appendChild(h2Elem);

    let pElem = document.createElement('p');
    pElem.textContent = `${this.name}'s hourly sales are:`;
    aElem.appendChild(pElem);
  },
  //Dubai Sales Logic//
  salesAvg: function () {

    for (let i = 0; i < hours.length; i++) {
      let avgsales = Math.floor(Math.random() * this.avg * ((this.max) - (this.min) + 1));
      this.hours.push(avgsales);
      this.total += avgsales;
      let res = `${hours[i]}: ${avgsales}`;

      let liElem = document.createElement('li');
      liElem.textContent = res;
      let ulid = document.getElementById(this.name);
      ulid.appendChild(liElem);
    }
  }

};

// Paris
let City4 = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  total: 0,
  //Storage for total logic
  hours: [],

  //Paris Render Logic//
  render: function () {
    let aElem = document.createElement('article');
    salmonPage.appendChild(aElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    aElem.appendChild(h2Elem);

    let pElem = document.createElement('p');
    pElem.textContent = `${this.name}' hourly sales are:`;
    aElem.appendChild(pElem);
  },
  //Paris Sales Logic//
  salesAvg: function () {

    for (let i = 0; i < hours.length; i++) {
      let avgsales = Math.floor(Math.random() * this.avg * ((this.max) - (this.min) + 1));
      let res = `${hours[i]}: ${avgsales}`;
      this.hours.push(avgsales);
      this.total += avgsales;
      console.log(res);

      let liElem = document.createElement('li');
      liElem.textContent = res;
      let ulid = document.getElementById(this.name);
      ulid.appendChild(liElem);
    }
  }

};

// Lima
let City5 = {
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  total: 0,
  //Storage for total logic
  hours: [],

  //Lima Render Logic//
  render: function () {
    let aElem = document.createElement('article');
    salmonPage.appendChild(aElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    aElem.appendChild(h2Elem);

    let pElem = document.createElement('p');
    pElem.textContent = `${this.name}'s hourly sales are:`;
    aElem.appendChild(pElem);
  },
  //Lima Sales Logic//
  salesAvg: function () {

    for (let i = 0; i < hours.length; i++) {
      let avgsales = Math.floor(Math.random() * this.avg * ((this.max) - (this.min) + 1));
      let res = `${hours[i]}: ${avgsales}`;
      this.hours.push(avgsales);
      this.total += avgsales;
      
      console.log(res);

      let liElem = document.createElement('li');
      liElem.textContent = res;
      let ulid = document.getElementById(this.name);
      ulid.appendChild(liElem);
    }
  }

};


//UL Maker
let cities = [City1, City2, City3, City4, City5];


for (let i = 0; i < cities.length; i++) {
  cities[i].render();
  let ulid = document.createElement('ul');
  ulid.id = cities[i].name;
  salmonPage.appendChild(ulid);

  cities[i].salesAvg();
  let total = document.createElement('li');
  total.textContent = ('The total for ' + cities[i].name + '=' + cities[i].total);
  salmonPage.appendChild(total);
}

