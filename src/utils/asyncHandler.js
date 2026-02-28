/*

What is asyncHandler?

asyncHandler is a higher-order function. A higher-order function is a function that takes another function as an argument and possibly returns a new function.

asyncHandler is a wrapper that lets you write async Express route handlers without repeating try/catch in every controller.

Why is asyncHandler needed?

In Express.js, if an asynchronous function throws an error, you need to explicitly pass that error to the next function for the Express error-handling middleware to catch it. Without this, your server might crash or not handle the error properly.

Different Variations 

Version 1: The normal function

const asyncHandler = () => {};

This is a simple function 

Version 2: The higher-order function

const asyncHandler = (func) => {
  return () => {};
};

Takes a function (func) as an argument.
Returns a new function.

Version 3: The higher-order async function

const asyncHandler = (func) => {
  return async () => {};
};

Same as above, but the returned function is asynchronous (async).
Used when the inner function (func) involves asynchronous operations.

*/

// Method - 1 (Async handler using try-catch)

// const asyncHandler=()=>{}

// higher order function

// const asyncHandler = () => {} // basic
// const asyncHandler = (func) => { () => {} } // func as an argument
// const asyncHandler = (func) => async () => {} // func as an argument in an async handler

// const asyncHandler=(fn)=> async (req,res,next)=>{
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success : false,
//             message : error.message,

//         })
//     }
// }

// Method - 2 (using promises)

// const asyncHandler=(fn)=>{
//     return (req,res,next)=>{
//         Promise
//         .resolve(fn(req,res,next))
//         .catch((error)=>next(error))
//     }
// }

const asyncHandler = (requestHandler) => (req, res, next) => {
  Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
};

export { asyncHandler };