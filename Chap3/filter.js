var filterItems = [
    { name: 'sally', age: 20 },
    { name: 'linda', age: 22 },
    { name: 'john', age: 40 }
];
var results = filterItems.filter(function (item) { return item.age === 22; });
console.log(results);
