'use strict';



//Strict Definitions
const salmonPage = document.getElementById('salmon-Page');
const hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];
const tabElem = document.createElement('table');
salmonPage.appendChild(tabElem);

//Cities Storage//
let cities = [];
let hoursstore = [];
for (let i = 0; i < hours.length; i++) {
  hoursstore.push(0);
}



//City Definitions
function City(cityName, salemin, salemax, avgcke) {
  this.name = cityName;
  this.min = salemin;
  this.max = salemax;
  this.avg = avgcke;
  this.total = 0;
  this.hours = [];
  cities.push(this);

}
//City Definer
new City('Seattle', '23', '65', '6.3');
new City('Tokyo', '3', '24', '1.2');
new City('Dubai', '11', '38', '3.7');
new City('Paris', '20', '38', '2.3');
new City('Lima', '2', '16', '4.6');




let blnk = document.createElement('th');
blnk.textContent = 'Time';
tabElem.appendChild(blnk);





for (let i = 0; i < hours.length; i++) {
  let lbldta = document.createElement('th');
  lbldta.textContent = `${hours[i]}`;
  tabElem.appendChild(lbldta);
}

let blnk2 = document.createElement('th');
blnk2.textContent = 'Daily Location Total';
tabElem.appendChild(blnk2);
// totalHours();

//Cities Render Logic//
City.prototype.render = function () {

  let tbrw = document.createElement('tr');
  tabElem.appendChild(tbrw);

  let cityth = document.createElement('th');
  cityth.textContent = `${this.name}`;
  tbrw.appendChild(cityth);
  for (let i = 0; i < hours.length; i++) {
    let prhr = document.createElement('td');
    prhr.textContent = `${this.hours[i]}`;
    tbrw.appendChild(prhr);
  }
  let totd = document.createElement('td');
  totd.textContent = `${this.name} Total: ${this.total}`;
  tbrw.appendChild(totd);
},
// City Sales Average Logic//
City.prototype.saleAvg = function () {
  for (let i = 0; i < hours.length; i++) {
    let avgsales = Math.floor(Math.random() * this.avg * ((this.max) - (this.min) + 1));
    this.hours.push(avgsales);
    this.total += avgsales;
    hoursstore[i] += avgsales;
    console.log(this.total);
  }
};
function totalHours() {
  let row2 = document.createElement('tr');
  tabElem.appendChild(row2);

  let blnk2 = document.createElement('th');
  blnk2.textContent = '';
  row2.appendChild(blnk2);

  for (let data of hoursstore) {
    let hrtl = document.createElement('th');
    hrtl.textContent = data;
    row2.appendChild(hrtl);
  }

}

//Seattles
cities[0].saleAvg();
cities[0].render();

//Tokyo
cities[1].saleAvg();
cities[1].render();
//Dubai
cities[2].saleAvg();
cities[2].render();
//Paris
cities[3].saleAvg();
cities[3].render();
//Lima
cities[4].saleAvg();
cities[4].render();
console.log(cities);
totalHours();


