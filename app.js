'use strict';

var hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am','12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', ];
var locations = [];
var storeTable = document.getElementById('stores')

function Store(storeLocations, minCustomers, maxCustomers, cookiesPerAverage) {
  this.storeLocations = storeLocations;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.cookiesPerAverage = cookiesPerAverage;
  this.customersEachHour = [];
  this.cookiesPerHourArray = [];
  this.totalDailyCookies = 0;
  this.cookiesPerHour();
  locations.push(this);

};

Store.prototype.customersPerHour = function() {
    // for (var i = 0; i < hours.length; i++) {
      var customers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
      this.customersEachHour.push(customers);
      return customers;

  // }
};

Store.prototype.cookiesPerHour = function(){
   for (var i = 0; i < hours.length; i++) {
     var cookies = Math.floor((this.customersPerHour()) * this.cookiesPerAverage);
     this.cookiesPerHourArray.push(cookies);
     this.totalDailyCookies += cookies;
  }
};

Store.prototype.hourlyTotal = function() {
   for (var i = 0; i < hours.length; i++) {

  }
};

Store.prototype.render = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.storeLocations;
  trEl.appendChild(tdEl);

  for (var i = 0; i < hours.length; i++){
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerHourArray[i] + ' cookies';
    trEl.appendChild(tdEl);
    storeTable.appendChild(trEl);
  }
};

function makeHeaderRow(){
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Stores';
  trEl.appendChild(thEl);

  for (var i = 0; i < hours.length; i++){
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
 }
    thEl = document.createElement('th');
    thEl.textContent = 'Daily Totals';
    trEl.appendChild(thEl);
    storeTable.appendChild(trEl);

};


function makeFooterRow(){
 var trEl = document.createElement('tr');
 var thEl = document.createElement('th');
 thEl.textContent = Store.prototype.hourlyTotal();
 trEl.appendChild(thEl);

 for (var i = 0; i < hours.length; i++){
   thEl = document.createElement('th');
   thEl.textContent = cookiesPerHourArray[i];
   trEl.appendChild(thEl);
   storeTable.appendChild(trEl);
 }
};

function storeRows(){
  for (var i in locations){
    locations[i].render();
  }
}
new Store('First And Pike', 23, 65, 6.3);
new Store('Seatac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);
console.table(locations);

makeHeaderRow();
storeRows();

// makeFooterRow();


// this.random = function(this.minCustomers, this.maxCustomers){
// return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
// }
