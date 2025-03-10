// ----------  proxy  ------------  e.g ->.length property
// Proxy means some property we need to hide
let arr = [1,2,3,4,5,6,7,8,9,10];

// console.log(arr[-1]);
/*
const user = {
    name:"Suman",
    age:40,
    password:"123"
}

const proxyUser = new Proxy(user, {  // this is a custom proxy
    get:function(target, property){
        // return target[property]
        console.log(target)
    }
})

console.log(proxyUser)

// console.log(proxyUser.password);
// console.log(proxyUser.name);

// console.log(proxyUser)
*/

// ----------------------------------------

/*
const user = {
    name:"Suman",
    age:40,
    password:"123"
}

const prox = new Proxy(user,{
    get:function(target,prop){
        if(prop === 'password'){
            throw new Error("Access Denied");
        }
        return target[prop];
    }
})

console.log(prox.password)

*/

// ------------------------------------

// set
/*
const user = {
    name:"Suman",
    age:40,
    password:"123"
}

const proxyUser = new Proxy(user,{
    set:function(target,prop,user){

    }
})
    */

function negativeIndex(arr){
    return new Proxy(arr, {
        get:function(target,prop){
           const index = Number(prop);
           if(index<0){
            return target[target.length + index];
           }
           return target[index];
        }
    })
}