const numbers = [
  ["1", "2"],
  ["1", "1"],
  ["2", "1"],
  ["1", "2"]
];
const foods = [
	["apple", "pine", "banana", "orange"],
	["apple", "pine", "banana", "orange"],
	["carrot", "broccoli", "celery", "lettuce"],
	["carrot", "broccoli", "celery", "lettuce"],
	["coffee", "tea", "wine", "beer"],
	["apple", "pine", "banana", "orange"],
  ["apple", "pine"],
  ["pine", "apple"]
];
let new_array = foods.filter(i => {
	if (!this[i[1]]) {
		return this[i[1]] = true;
	}
});
console.log(new_array)