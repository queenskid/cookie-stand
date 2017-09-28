'use strict';

var hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am','12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', ];
var locations = [];
var storeTable = document.getElementById('stores')

function Store(storeLocations, minimumCustomers, maximumCustomers, cookiesPer) {
  this.storeLocations = storeLocations;
  this.minimumCustomers = minimumCustomers;
  this.maximumCustomers = maximumCustomers;
  this.cookiesPer = cookiesPer;
  this.customersEachHour = [];
  this.cookiesPerHourArray = [];
  this.cookiesTotal = [];
  // this.locations = [];
  locations.push(this);
  customersPerHour.push(this);

};

new Store('First And Pike', 23, 65, 6.3);
new Store('Seatac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

Store.prototype.customersPerHour = function(){
  //  return Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers + 1) + this.minimumCustomers);
    for (var i = 0; i < hours.length; i++) {
  this.customersEachHour.push(Math.random(this.minimumcustomers, this.maxcustomers + 1) + this.minimumcustomers);
}
};

Store.prototype.cookiesPerHour = function(){
   return Math.floor(Math.random() * (this.customersPerHour(this.minimumCustomers,this.maximumCustomers)) * this.cookiesPer);
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
    tdEl.textContent = this.cookiesPerHour() + ' cookies';
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
    storeTable.appendChild(trEl);
 }
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

makeHeaderRow();
storeRows();
makeFooterRow();
