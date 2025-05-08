const allTrucks = [1 , 2, 3, 9 , 20]
const inicitialCapacity = 0

const allTonnage = allTrucks.reduce((acum, num) => {
    totalCapacity = acum + num
    return totalCapacity
}, inicitialCapacity)

console.log(allTonnage)