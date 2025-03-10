// console.log('hi');
// const data = fetch('https://api.freeapi.app/api/v1/public/randomproducts');
// // fetch() is a browser function
// // to do async operation we need Promise
// data.then((res) => console.log('Data Agya',res));
// console.log('Bye');

// ---------------------------------

/*
const da=fetch('https://api.freeapi.app/api/v1/public/randomusers/user/random');
data.then(function() {console.log('Lo ji, data aagaya')})
data.catch(function() {console.log('Arey Yaar')});
data.finally(function() {console.log('Mujhe farak nhi padta')})
*/

// -------------------- 

// Syntax of promise
// response.json also return a promise

fetch('https://api.freeapi.app/api/v1/public/randomproducts')
    .then((response) => {
         response.json()
        .then((obj) => {
            const products = obj.data.data;
            console.log(products);
            products.forEach(product => {
                const li = document.createElement('li');
                li.innerText = product.title;
                items.appendChild(li);
            })
        })
        .catch((err)=>{
            console.log('Error converting JSON');
            
        })
    })
    .catch((err) => {})
    .finally(() => {

})