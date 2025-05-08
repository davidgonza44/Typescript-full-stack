interface hasLength {
    length : number;
}

function getLength<T extends hasLength>(arg : T) : number {
    return arg.length
}


console.log(getLength('Hello world'))