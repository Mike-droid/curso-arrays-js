const numbers = [1,2,2,2,6,7,7,7,7,7,9,9,9];

let range1_5 = 0;
let range6_8 = 0;
let range9_10 = 0;

const result = numbers.reduce((obj, number) => {
	if(number <= 5){
		range1_5 += 1;
	} else if(number >= 6 && number <= 8){
		range6_8 += 1;
	} else {
		range9_10 += 1;
	}

	obj['range1_5'] = range1_5;
	obj['range6_8'] = range6_8;
	obj['range9_10'] = range9_10;
	return obj;
}, {})

console.log(result)
