'use strict';

var hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am','12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];

var PatsStore1 = document.getElementById('firstAndPike');

var firstAndPike = {
  minimumCustomers: 23,
  maximumCustomers: 65,
  cookiesPer: 6.3,
  averaageCustomersPerHour: function(minimumCustomers, maximumCustomers) {
    return Math.floor(Math.random() * (maximumCustomers - minimumCustomers + 1) + minimumCustomers);
  },

  cookiesPerHour: function(){
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ' - Sold ' + Math.floor((firstAndPike.averaageCustomersPerHour(23, 65)) * 6.3) + ' Cookies';
      //console.log(hours[i]);
      PatsStore1.appendChild(liEl);
    }
  }
};

firstAndPike.cookiesPerHour();

var PatsStore2 = document.getElementById('seaTacAirport');

var seaTacAirport = {
  minimumCustomers: 3,
  maximumCustomers: 24,
  cookiesPer: 1.2,
  averaageCustomersPerHour: function(minimumCustomers, maximumCustomers) {
    return Math.floor(Math.random() * (maximumCustomers - minimumCustomers + 1) + minimumCustomers);

  },

  cookiesPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ' - Sold ' + Math.floor((seaTacAirport.averaageCustomersPerHour(3, 24)) * 6.3) + ' Cookies';
      PatsStore2.appendChild(liEl);
    }

  }
};

seaTacAirport.cookiesPerHour();

var PatsStore3 = document.getElementById('seattleCenter');

var seattleCenter = {
  minimumCustomers: 11,
  maximumCustomers: 38,
  cookiesPer: 3.7,
  averaageCustomersPerHour: function(minimumCustomers, maximumCustomers) {
    return Math.floor(Math.random() * (maximumCustomers - minimumCustomers + 1) + minimumCustomers);
  },

  cookiesPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ' - sold ' + Math.floor((seattleCenter.averaageCustomersPerHour(11, 24)) * 3.7) + ' Cookies';
      PatsStore3.appendChild(liEl);
    }

  }
};

seattleCenter.cookiesPerHour();
