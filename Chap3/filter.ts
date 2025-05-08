const filterItems = [
    {name : 'sally', age : 20},
    {name : 'linda', age : 22},
    {name : 'john', age : 40}
]

const results = filterItems.filter((item) => {return item.age === 22} )
console.log(results)