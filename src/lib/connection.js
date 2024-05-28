const { username, password } = process.env;
export const connectionStr = "mongodb+srv://anshu:anshu@newcluster.gieaeqf.mongodb.net/ProductDB?retryWrites=true&w=majority&appName=newCluster";



// const add = (a,b) => a+b;
// const sub = (a,b) => a-b;
// const multiply = (a,b) => a+b;




// const memoizedOne = (fn) => {
//     let obj = {}
//     return function (...args)  {
//         if (!obj[fn]) {
//             console.log('Calulated');
//            obj[fn] = fn(...args);
//            return fn(...args)
//         }else {
//             console.log('obj');
//            return obj[fn];
//         }
//     }
// }

// const memoizedAdd = memoizedOne(add)

// console.log(memoizedAdd(1,3));
// console.log(memoizedAdd(1,3));
// console.log(memoizedAdd(1,3));



