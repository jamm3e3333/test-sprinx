
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

console.log('Priklad 2: ',checkSum(arr));

//4) 
const waitMinute = (min) => {
    return new Promise((resolve, reject) => {
        if(typeof min !== "number") {
            return reject("The input should be number.");
        }
        setTimeout( () => {
            resolve(console.log(`Priklad 4: Tento vypis se zobrazi za ${min} minuty`));
        }, min*60000);
    })
}

const run_waitMinute = async (min) => {
    try{
        console.log('Priklad 4: Prvni vypis')
        await waitMinute(min);
    }
    catch(e) {
        console.log(e);
    }
}
run_waitMinute(0.1);

//6)
const arr1 = [[12, 5, -3], [44, 55], [-1]];

const createObject = (arr) => {
    const newArr = [];
    arr.reduce((acu, cur) => {
        cur.filter((c) => {
            return c > 0;
        })
        .map((ar) => {
            newArr.push({age: ar});
        })
    }, []);
    return newArr;
}

const ageArr = createObject(arr1);
console.log('Priklad 6: ',ageArr);
