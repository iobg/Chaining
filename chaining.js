var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
var sortedNumbers = integers.sort(function(first,second) {
	return second-first}).filter(function(integer){
		return integer < 19
	}).map(function(int){
		return (int*1.5) -1
	}).reduce(function(prev,cur){
		return prev+cur

	});
console.log(sortedNumbers);