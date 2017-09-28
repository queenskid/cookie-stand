'use strict';

var hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am','12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', ];
var locations = [];
var storeTable = document.getElementById('stores')
var cookiesPerHourArray = [];
var cookiesTotal = [];

function Store(storeLocation, minimumCustomers, maximumCustomers, cookiesPer) {
  this.storeLocation = storeLocation;
  this.minimumCustomers = minimumCustomers;
  this.maximumCustomers = maximumCustomers;
  this.cookiesPer = cookiesPer;
  locations.push(this);


  Store.prototype.customersPerHour = function(){
    return Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers + 1) + this.minimumCustomers);
   };

  Store.prototype.cookiesPerHour = function(){
    for (var i = 0; i < hours.lenght; i++)
    return Math.floor(Math.random() * (this.customersPerHour(this.minimumCustomers,this.maximumCustomers)) * this.cookiesPer);
    cookiesPerHourArray.push(cookiesPerHour);

   };

  Store.prototype.hourlyTotal = function() {
    for (var i = 0; i < hours.length; i++) {
      // cookiesPerHour.push(locations[0].cookiesPerHour[i] + locations[1].cookiesPerHour[i] + locations[2].cookiesPerHour[i] + locations[3].cookiesPerHour[i] + locations[4].cookiesPerHour[i]);

    }
   }
 };

  Store.prototype.render = function() {
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = this.storeLocation;
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
   thEl.textContent = cookiesPerHour[i];
   trEl.appendChild(thEl);
   storeTable.appendChild(trEl);
 }
};


new Store('First And Pike', 23, 65, 6.3);
new Store('Seatac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

function storeRows(){
  for (var i in locations){
    locations[i].render();
  }
}

makeHeaderRow();
storeRows();
makeFooterRow();



// this.render = function(){
//   for (var i = 0; i < hours.length; i++) {
//     var PatsStore1 = document.getElementById('firstAndPike');
//     var liEl = document.createElement('li');
//     var cookiesPerHour = Math.floor((this.averageCustomersPerHour(this.minimumCustomers,this.maximumCustomers)) * this.cookiesPer);
//     liEl.textContent = hours[i] + ' - Sold ' + cookiesPerHour + ' Cookies';
//     PatsStore1.appendChild(liEl);






// var firstAndPike = {
//   minimumCustomers: 23,
//   maximumCustomers: 65,
//   cookiesPer: 6.3,
//   averaageCustomersPerHour: function() {
//     return Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers + 1) + this.minimumCustomers);
//   },
//
//   render: function(){
//     for (var i = 0; i < hours.length; i++) {
//
//       var PatsStore1 = document.getElementById('firstAndPike');
//       var liEl = document.createElement('li');
//       var cookiesPerHour = Math.floor((this.averaageCustomersPerHour(this.minimumCustomers,this.maximumCustomers)) * this.cookiesPer);
//       liEl.textContent = hours[i] + ' - Sold ' + cookiesPerHour + ' Cookies';
//       PatsStore1.appendChild(liEl);
//     }
//   }
// };
//
//
//
// var PatsStore2 = document.getElementById('seaTacAirport');
//
// var seaTacAirport = {
//   minimumCustomers: 3,
//   maximumCustomers: 24,
//   cookiesPer: 1.2,
//   averaageCustomersPerHour: function() {
//     return Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers + 1) + this.minimumCustomers);
//
//   },
//
//   render: function() {
//     for (var i = 0; i < hours.length; i++) {
//
//       var liEl = document.createElement('li');
//       var cookiesPerHour = Math.floor((this.averaageCustomersPerHour(this.minimumCustomers,this.maximumCustomers)) * this.cookiesPer);
//       liEl.textContent = hours[i] + ' - Sold ' + cookiesPerHour + ' Cookies';
//       PatsStore2.appendChild(liEl);
//     }
//
//   }
// };
//
//
//
// var PatsStore3 = document.getElementById('seattleCenter');
//
// var seattleCenter = {
//   minimumCustomers: 11,
//   maximumCustomers: 38,
//   cookiesPer: 3.7,
//   averaageCustomersPerHour: function() {
//     return Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers + 1) + this.minimumCustomers);
//   },
//
//   render: function() {
//     for (var i = 0; i < hours.length; i++) {
//
//       var liEl = document.createElement('li');
//       var cookiesPerHour = Math.floor((this.averaageCustomersPerHour(this.minimumCustomers,this.maximumCustomers)) * this.cookiesPer);
//       liEl.textContent = hours[i] + ' - Sold ' + cookiesPerHour + ' Cookies';
//       PatsStore3.appendChild(liEl);
//     }
//   }
// };
//
//
//
// var PatsStore4 = document.getElementById('capitolHill');
//
// var capitolHill = {
//   minimumCustomers: 20,
//   maximumCustomers: 38,
//   cookiesPer: 2.3,
//   averaageCustomersPerHour: function() {
//     return Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers + 1) + this.minimumCustomers);
//   },
//
//   render: function() {
//     for (var i = 0; i < hours.length; i++) {
//
//       var liEl = document.createElement('li');
//       var cookiesPerHour = Math.floor((this.averaageCustomersPerHour(this.minimumCustomers,this.maximumCustomers)) * this.cookiesPer);
//       liEl.textContent = hours[i] + ' - Sold ' + cookiesPerHour + ' Cookies';
//       PatsStore4.appendChild(liEl);
//     }
//   }
// };
//
//
//
// var PatsStore5 = document.getElementById('alki');
//
// var alki = {
//   minimumCustomers: 2,
//   maximumCustomers: 16,
//   cookiesPer: 4.6,
//   averaageCustomersPerHour: function() {
//     return Math.floor(Math.random() *(this.maximumCustomers - this.minimumCustomers + 1) + this.minimumCustomers);
//
//   },
//
//   render: function() {
//     for (var i = 0; i < hours.length; i++) {
//
//       var liEl = document.createElement('li');
//       var cookiesPerHour = Math.floor((this.averaageCustomersPerHour(this.minimumCustomers,this.maximumCustomers)) * this.cookiesPer);
//       liEl.textContent = hours[i] + ' - Sold ' + cookiesPerHour + ' Cookies';
//       PatsStore5.appendChild(liEl);
//     }
//
//   }
// }
//
//
//
//
// firstAndPike.render();
// seaTacAirport.render();
// seattleCenter.render();
// capitolHill.render();
// alki.render();
