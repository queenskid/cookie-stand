'use strict';

var hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am','12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', ];
var locations = [];
var storeTable = document.getElementById('stores')
var totalCookiesArray = [];
var finalTotal = 0;

var theForm = document.getElementById('new-location')
var simulatedLocations = document.getElementById('simulated-locations');
// var inputs = [];

function Store(locationName, minCustomers, maxCustomers, cookiesPerAverage) {
  this.locationName = locationName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.cookiesPerAverage = cookiesPerAverage;
  this.customersEachHour = [];
  this.cookiesPerHourArray = [];
  this.totalDailyCookies = 0;
  this.cookiesPerHour();
  locations.push(this);
  // Store.all.push(this);

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
     this.totalDailyCookies = this.totalDailyCookies + cookies;
  }
};

function hourlyTotal() {
   for (var i = 0; i < hours.length; i++) {
     var storeTotal = 0;
     for ( var j = 0; j < locations.length; j++) {
       storeTotal = storeTotal + locations[j].cookiesPerHourArray[i];
     }
     totalCookiesArray.push(storeTotal);
  }
};

Store.prototype.render = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.locationName;
  trEl.appendChild(tdEl);

  for (var i = 0; i < hours.length; i++){
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerHourArray[i] + ' cookies';
    trEl.appendChild(tdEl);
    storeTable.appendChild(trEl);
  }
  var thEl = document.createElement('th');
  thEl.textContent = this.totalDailyCookies;
  trEl.appendChild(thEl);
  storeTable.appendChild(trEl);
};

//Helper function to create random
// Store.random = function(min, max){
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

function makeHeaderRow(){
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Locations';
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
 thEl.textContent = 'Totals';
 trEl.appendChild(thEl);
 storeTable.appendChild(trEl);


hourlyTotal();

finalTotal = 0

 for (var i = 0; i < hours.length; i++){
   thEl = document.createElement('th');
   thEl.textContent = totalCookiesArray[i];
   finalTotal = finalTotal + totalCookiesArray[i];
   trEl.appendChild(thEl);
   storeTable.appendChild(trEl);
 }

 thEl = document.createElement('th');
 thEl.textContent = finalTotal;
 trEl.appendChild(thEl);
 storeTable.appendChild(trEl);
};

Store.handleForm = function(e) {
  e.preventDefault();
  var loc = e.target.locName.value;
  var min = parseInt(e.target.min.value);
  var max = parseInt(e.target.max.value);
  var avg = parseInt(e.target.avg.value);

  for (var i = 0; i < locations.length; i++) {
    if(loc === locations.length[i].locationName) {
    locations[i].minCustomers = min;
    locations[i].maxCustomers = max;
    locations[i].cookiesPerAverage = avg;

    locations[i].customersEachHour = [];
    locations[i].totalDailyCookies = 0;
    locations[i].cookiesPerHourArray = [];

    locations[i].cookiesPerHour();
    clearForm();
    // Store.render();
    return;
  }
}

new Store(loc, min, max, avg);
function clearForm() {
  e.target.locName.value = null;
  e.target.min.value = null;
  e.target.max.value = null;
  e.target.avg.value = null;
  Store.render();
 }
};



function storeRows(){
  for (var i in locations){
    locations[i].render();
  }
};

new Store('First And Pike', 23, 65, 6.3);
new Store('Seatac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);
// console.table(locations);

makeHeaderRow();
storeRows();
makeFooterRow();
Store.theForm.addEventListener('submit', Store.handleForm);


// this.random = function(this.minCustomers, this.maxCustomers){
// return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
// }
