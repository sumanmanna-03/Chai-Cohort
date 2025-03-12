const arr = [1,2,3,4,5,6,7];

function enableNegIndexing(targetArr){ // here we are sending the address of the original array
    return new Proxy(targetArr, {
        set:function(target,prop,value){
            target[prop] = `${value}`;
        },
        get:function(target,prop){
            return target[prop];
        }
    })
}

// enableNegIndexing(arr);

// console.log(`Original Arr`, arr);
// arr[1] = 100;
// console.log(`Updated Arr`, arr);

/*
const proxyArr = enableNegIndexing(arr);

proxyArr[1] = 100;
console.log(`Original Arr`, arr);
console.log(`Updated Arr`, proxyArr);
*/

//-----------------------------------------------------
// To not to change the original array we can use
// This will prevent the copy in the original array
// Using spread operator
const proxyArr = enableNegIndexing([...arr])
proxyArr[1] = 100;
console.log(`Original Arr`, arr);
console.log(`Updated Arr`, proxyArr);