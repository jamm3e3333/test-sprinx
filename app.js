console.log('A',+'2' + 3);
console.log('B','2' + 3);
console.log('C',!![]);
console.log('D',!!0);
console.log('E',null == undefined);
console.log('F',1 || 2);
console.log('G',3 && 5);
console.log('H',false && 5);
console.log('I',null === undefined);
console.log('J',NaN === NaN);

const arr = [1,2,4,2,3,4,1,22];

const checkSum = (ar) => {
    let sum = 0;
    if(!(ar instanceof Array)) {
        throw new Error("The input must be an array.");
    }
    ar.forEach((a) => {
        sum += a**2;
    })
    return sum;
}

console.log(checkSum(arr));

const waitMinute = (min) => {
    return new Promise((res, rej) => {
        if(typeof min !== "number") {
            rej(console.log("The input should be number."))
        }
        setTimeout( () => {
            res(console.log(`This log will execute after ${min} mings`));
        }, min);
    })
}
try{
    await waitMinute(3000).Promise

}
catch(e){
    console.log(e)
}