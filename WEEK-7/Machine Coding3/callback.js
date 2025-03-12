sum(2,5, (result) => {
    console.log('Result is', result);
})

console.log('End Of program');
function sum(a,b,cb){
    setTimeout(() => {
        cb(a+b);
    },5*1000)
}