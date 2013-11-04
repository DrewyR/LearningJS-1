/*
	Numbers 03. Next Prime Number - Have the program find prime numbers until the user chooses to stop asking for the next one.
*/

var isPrim = function (n) {
	"use strict";
	var i;

	for (i = 2; i <= Math.sqrt(n); i++) {
		if(n % i === 0) {
			return false;
		}
	}

	return true;
};

var getNextPrimeNumber = (function () {
	"use strict";

	var currentPrimeNumber = 2;

	return function () {
		while (!isPrim(currentPrimeNumber)) {
			currentPrimeNumber++;
		}

		return currentPrimeNumber++;
	};
}());

// Just call the function for getting the next number.
this.console.log(getNextPrimeNumber());