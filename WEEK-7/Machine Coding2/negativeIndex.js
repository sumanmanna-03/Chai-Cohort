let arr = [1,2,3,4,5,6,7,8,9,10];

function negativeIndex(arr){
    return new Proxy(arr, {
        get:function(target,prop){ // get operation do read operation
           const index = Number(prop);
           if(index<0){
            return target[target.length + index];
           }
           return target[index];
        },
        set:function(target,prop,value){
            const index = Number(prop);
            if(index<0){
                target[target.length + index] = value;
            }
            else{
                target[index] = value;
            }
            return true; 
            // always we have to return true because we have to confirm that value has been set
        }
    })
}

let newArr = negativeIndex(arr);

console.log(newArr[-1]);

newArr[-1] = 22;
console.log(newArr);
console.log(arr);

// Proxy change the original array