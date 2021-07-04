//1)

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

//2)

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

//4) funkce se musi volat unvitr asynchronni funkce
const waitMinute = (min) => {
    return new Promise((resolve, reject) => {
        if(typeof min !== "number") {
            return reject("The input should be number.");
        }
        setTimeout( () => {
            resolve(console.log(`This log will execute after ${min} minutes`));
        }, min*60000);
    })
}

const run_waitMinute = async (min) => {
    try{
        await waitMinute(min);
    }
    catch(e) {
        console.log(e);
    }
}

//5)
console.log('5---\n')
const o1 = { x: 1, y: 2, z: 3 };
const o2 = { x: 11, ...o1, z: 33 };
console.log('x=', o2.x);
console.log('y=', o2.y);
console.log('z=', o2.z);
console.log(o2)
console.log('---')

//6)
const arr1 = [[12, 5, -3], [44, 55], [-1]];

const createObject = (arr) => {
    const ageObj = [];
    console.log('calling the arr method.')
    arr.map((ar) => {
        const newArr = ar.filter((a) => {
            return a > 0;
        })
        .map((a) => {
            arr.concat({age: a});
        })
        console.log('arr',newArr);
    });
}

createObject(arr1);


run_waitMinute(0.25);
//7)
const arr2 = [1, -2, -0, 2, 0, -1];
console.log(arr2.sort());