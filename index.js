/// Promise::::

// const url = "https://ci-develop.innovaccer.net/patient";

// const user_data = fetch(url);

// console.log(user_data);

// user_data.then(function(data){
//     console.log(data);
// } )

////// Promises Chaining :::::

// const cart = ["Shoes","Shirt","Kurta"];

// const promise = createOrder(cart);  // OrderId

// promise.then(function(){
//     proceedToPayment();
// })

// .then((orderId) => proceedToPayment(orderId))
// .then((paymentInfo) => showOrderSummary(paymentInfo))
// .then((paymentInfo) => updateWalletBalacne(paymentInfo))

//// Promise Chaining Homework ////

// const cart = ["Shoes","Sandles","Sweater"];

// Perform four operations --> CreateOrder(), ProceedToPayment(), ShowOrderSummary(), UpdateWallet()

// createOrder(cart)
// .then(function(orderId){
//      console.log(orderId);
//      return orderId; 
// })
// .then(function(orderId){
//     console.log()
//    return proceedToPayment(orderId).then(function(paymentInfo){
//     console.log(paymentInfo);
//    });
// })
// .then(function(){
//    return showOrderSummary().then(function(ordersummary){
//     console.log(ordersummary);
//     console.log(cart);
//    });
// })


// function createOrder(cart){
//        const value = new Promise(function(resolve,reject){
//         // CreateOrder
//         // ValidateCart
//         // OrderId
//         if(!validateCart(cart)){
//            const err = new Error('Cart is not valid');
//            reject(err);
//         };

//        const order_id = 12345;
//        if(order_id){
//         setTimeout(function(){
//             resolve(order_id);
//         },3000)
//        }
//        })
//        return value;
// }

// function validateCart(){
//     return true;
// }

// function proceedToPayment(orderId){
//     return new Promise(function (resolve,reject){
//         setTimeout(function(){
//             resolve("Payment Successful");
//         },3000);
//     })
// }

// function showOrderSummary(cart){
//     const valueOrder = new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve("Cart is displayed below");
//         },3000);
//         }
//     )
//     return valueOrder;
// }


// Promise.all([p1,p2,p3]) // Array of promises of input
// // p1 --> 3 sec, p2 --> 2 sec , p3 --> 1 sec
// //Output
// [val1, val2,val3]   // fiinal promise api will take 3 second --> Wait for all of them to finish (if any of them get rejected then promise will reject )



// Promise.allSettled([p1,p2,p3])    // Wait for all the promises to settled 

// Promise.race([p1,p2,p3])  // The promise which will resolve first so it will give me the result of value of that promise.

// Promise.any([p1,p2,p3]) // whenever the first promise is resolved --> (Wait for first success) --> it will return the value of that promise

// // if all of them will be failed then in .any([]) --> then it will be an aggregate error [err1,err2,err3];



// Code Example --> Promise.all([])

// const p1 = new Promise((resolve,reject)=>{
//     // setTimeout(()=>{
//     //       resolve("P1 success")
//     // },3000)
//     setTimeout(()=>{
//         reject("P1 fail")
//   },4000)
// })

// const p2 = new Promise((resolve,reject)=>{
//     // setTimeout(()=>{
//     //       resolve("P2 success")
//     // },4000)
//     setTimeout(()=>{
//         reject("P2 fail")
//   },3000)
// })

// const p3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//           resolve("P3 success")
//     },5000)
// //     setTimeout(()=>{
// //         reject("P3 fail")
// //   },3000)
// })

// let res;
// Promise.all([p1,p2,p3])
// .then((res) => {
//     console.log(res)})
// .catch((err)=>{
//         console.error(err);
//     });

// Promise.allSettled([p1,p2,p3])
// .then((res) => {
//     console.log(res)})
// .catch((err)=>{
//         console.error(err);
//     });

// Promise.race([p1,p2,p3])
// .then((res) => {
//     console.log(res)})
// .catch((err)=>{
//         console.error(err);
//     });

// Promise.any([p1,p2,p3])
// .then((res) => {
//     console.log(res)})
// .catch((err)=>{
//         console.error(err);
//     });


// ASYNC AND AWAIT 

// Async --> keyword that is used before a function to create a async function 

// Note :- Async function always return a promise 

// const newPromise = new Promise((resolve,reject)=>{
//     resolve("Promise resolved value");
// })

// async function getData(){
//   return newPromise;
// }

// const dataPromise = getData();
// // console.log(data);

// dataPromise.then(res => console.log(res));

// Async/Await --> is used to handle promises --> Await is a keyword that only be used inside an async function 

// const p = new Promise((resolve,reject)=>{
//     resolve("Promise resolved value");
// })

// async function handlePromise(){
//  const val =  await p;
//  console.log(val);
// }

// handlePromise();

// const p = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise resolved value");
//     },10000);
// })

// async function handlePromise(){
//  const val =  await p; // js engine is waiting for promise to resolve 
//  console.log("value is displayed");
//  console.log(val);
// }

// handlePromise();



// const prom = new Promise((resolve,reject)=>{
//     console.log("Shorty");
// })


// console.log(typeof(prom));
