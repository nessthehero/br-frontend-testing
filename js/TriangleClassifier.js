var TriangleClassifier = function() {

  this.classify = function(a,b,c) {

  	var sumab = a + b;
  	var sumac = a + c;
  	var sumbc = b + c;

  	if (sumbc <= a || sumab <= c || sumac <= b) {
  		throw "invalid";
  	}

  	if (a * b * c <= 0 || (a < 0 || b < 0 || c < 0)) {
  		throw "invalid";
  	}

  	if (a === b && b === c && a === c) {
  		return "equilateral";
  	}

  	if (a === b || b === c || c === a) {
  		return "isosceles";
  	}

    return "scalene";
  };
};
