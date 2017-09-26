'use strict';

var hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am','12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', ];


var Locations = [];
var storeTable = document.getElementById('stores')
function Store(storeLocation, minimumCustomers, maximumCustomers, cookiesPer) {
  this.storeLocation = storeLocation;
  this.minimumCustomers = minimumCustomers;
  this.maximumCustomers = maximumCustomers;
  this.cookiesPer = cookiesPer;
  this.averageCustomersPerHour = function(){
    return Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers + 1) + this.minimumCustomers);
   };
  this.cookiesPerHour = function(){
    return Math.floor(Math.random() * (this.averageCustomersPerHour(this.minimumCustomers,this.maximumCustomers)) * this.cookiesPer);
 };
  Locations.push(this);
};

  Store.prototype.render = function() {

    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = this.storeLocation;
    trEl.appendChild(tdEl);

    for (var i = 0; i < hours.length; i++){
      tdEl = document.createElement('td');
      tdEl.textContent = this.cookiesPerHour();
      trEl.appendChild(tdEl);
    storeTable.appendChild(trEl);
  }
};

    // tdEl = document.createElement('td');
    // tdEl.textContent = this.cookiesPerHour();
    // trEl.appendChild(tdEl);
    //
    // tdEl = document.createElement('td')
    // tdEl.textContent = this.cookiesPerHour();
    // trEl.appendChild(tdEl);
    //
    // tdEl = document.createElement('td');
    // tdEl.textContent = this.cookiesPerHour();
    // trEl.appendChild(tdEl);
    //
    // tdEl = document.createElement('td');
    // tdEl.textContent = this.cookiesPerHour();
    // trEl.appendChild(tdEl);
    //
    // tdEl = document.createElement('td');
    // tdEl.textContent = this.cookiesPerHour();
    // trEl.appendChild(tdEl);
    //
    // tdEl = document.createElement('td');
    // tdEl.textContent = this.cookiesPerHour();
    // trEl.appendChild(tdEl);
    //
    // tdEl = document.createElement('td');
    // tdEl.textContent = this.cookiesPerHour();
    // trEl.appendChild(tdEl);
    //
    // tdEl = document.createElement('td');
    // tdEl.textContent = this.cookiesPerHour();
    // trEl.appendChild(tdEl);
    //
    // tdEl = document.createElement('td');
    // tdEl.textContent = this.cookiesPerHour();
    // trEl.appendChild(tdEl);
    //
    // tdEl = document.createElement('td');
    // tdEl.textContent = this.cookiesPerHour();
    // trEl.appendChild(tdEl);
    //
    // tdEl = document.createElement('td');
    // tdEl.textContent = this.cookiesPerHour();
    // trEl.appendChild(tdEl);
    //
    // tdEl = document.createElement('td');
    // tdEl.textContent = this.cookiesPerHour();
    // trEl.appendChild(tdEl);
    //
    // tdEl = document.createElement('td');
    // tdEl.textContent = this.cookiesPerHour();
    // trEl.appendChild(tdEl)

function makeHeaderRow(){
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    trEl.appendChild(thEl);

    for (var i = 0; i < hours.length; i++){
      thEl = document.createElement('th');
      thEl.textContent = hours[i];
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
  for (var i in Locations){
    Locations[i].render();
  }
}

makeHeaderRow();
storeRows();


  // thEl = document.createElement('th');
  // thEl.textContent = '7:00 AM';
  // trEl.appendChild(thEl);
  //
  // thEl = document.createElement('th');
  // thEl.textContent = '8:00 AM';
  // trEl.appendChild(thEl);
  //
  // thEl = document.createElement('th');
  // thEl.textContent = '9:00 AM';
  // trEl.appendChild(thEl);
  //
  // thEl = document.createElement('th');
  // thEl.textContent = '10:00 AM';
  // trEl.appendChild(thEl);
  //
  // thEl = document.createElement('th');
  // thEl.textContent = '11:00 AM';
  // trEl.appendChild(thEl);
  //
  // thEl = document.createElement('th');
  // thEl.textContent = '12:00 PM';
  // trEl.appendChild(thEl);
  //
  // thEl = document.createElement('th');
  // thEl.textContent = '1:00 PM';
  // trEl.appendChild(thEl);
  //
  // thEl = document.createElement('th');
  // thEl.textContent = '2:00 PM';
  // trEl.appendChild(thEl);
  //
  // thEl = document.createElement('th');
  // thEl.textContent = '3:00 PM';
  // trEl.appendChild(thEl);
  //
  // thEl = document.createElement('th');
  // thEl.textContent = '4:00 PM';
  // trEl.appendChild(thEl);
  //
  // thEl = document.createElement('th');
  // thEl.textContent = '5:00 PM';
  // trEl.appendChild(thEl);
  //
  // thEl = document.createElement('th');
  // thEl.textContent = '6:00 PM';
  // trEl.appendChild(thEl);
  //
  // thEl = document.createElement('th');
  // thEl.textContent = '7:00 PM';
  // trEl.appendChild(thEl);
  //
  // thEl = document.createElement('td');
  // thEl.textContent = '8:00 PM';
  // trEl.appendChild(thEl);
  // storeTable.appendChild(trEl);
//console.log(Locations);



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
