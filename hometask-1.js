/**
 * Create Hello World Function
 */
/**
 * @return {Function}
 */
var createHelloWorld = function() {
    return function(...args) {
        return "Hello World"
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */


/**
 * Counter
 */

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    return function () {
        return n++;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

/**
 * To Be Or Not To Be
 */

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let num = init;

return {
    increment: () => num = ++num,
    decrement: () => num = --num,
    reset: () => num = init,
};
};

/**
* const counter = createCounter(5)
* counter.increment(); // 6
* counter.reset(); // 5
* counter.decrement(); // 4
*/

/**
 * Counter II
 */
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let num = init;

return {
    increment: () => num = ++num,
    decrement: () => num = --num,
    reset: () => num = init,
};
};

/**
* const counter = createCounter(5)
* counter.increment(); // 6
* counter.reset(); // 5
* counter.decrement(); // 4
*/

/**
 * Apply Transform Over Each Element in Array
 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    
    var ans=[];
       for(i=0;i<arr.length;i++)
       {
           ans[i]=fn(arr[i],i);
       }
       return ans;
   };


/**
 * Filter Elements from Array
 */
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if(nums.length === 0) return init;
    let val = 0;
    for(let i = 0;i < nums.length;i++){
        if(i === 0) val = fn(init,nums[i]);
        else val = fn(val,nums[i]); 
    }
    return val;
};

/**
 * Function Composition
 */

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	functions.reverse() 
    return function(x) {
      let result = x
      for (let i = 0; i < functions.length; i++) {
        result = functions[i](result)
      }

      return result
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

/**
 * Return Length of Arguments Passed
 */
/**
 * @return {number}
 */
var argumentsLength = function(...args) {
    return args.length;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */

/**
 * Allow One Function Call
 */
/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let c=0; //counter variable
    return function(...args){
        if(c==0){ 
            c++;
            return fn(...args);
        }
        else{
            return undefined;
        }
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */


/**
 * Add Two Promises
 */
/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    return Promise.all([promise1, promise2])
       .then(results => eval(results.join('+')));
};

/**
* addTwoPromises(Promise.resolve(2), Promise.resolve(2))
*   .then(console.log); // 4
*/

/**
 * Sleep
 */

/**
 * @param {number} millis
 */
async function sleep(millis) {
    await new Promise(res => setTimeout(res, millis));
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

/**
 * Timeout Cancellation
 */

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    const timeout = setTimeout(()=>{
        fn(...args);
    },t)
    return cancel=()=>{
        clearTimeout(timeout);
    }
};

/**
 *  const result = []
 *
 *  const fn = (x) => x * 5
 *  const args = [2], t = 20, cancelT = 50
 *
 *  const start = performance.now() 
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)})
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelT)
 *           
 *  setTimeout(() => {
 *     cancel()
 *  }, cancelT)
 *
 *  setTimeout(() => {
 *     console.log(result) // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */

/**
 * Interval Cancellation
 */
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    var timerId;
    var time = 0;
    var result = [];

   function executeFn() {
       var returnedValue = fn.apply(null, args);
       result.push({ time: time, returned: returnedValue });
       time += t;
   }

   function cancelFn() {
       clearInterval(timerId);
   }

   executeFn();
   timerId = setInterval(executeFn, t);
   
   return cancelFn;
};

/**
*  const result = []
*
*  const fn = (x) => x * 2
*  const args = [4], t = 35, cancelT = 190
*
*  const start = performance.now()
*
*  const log = (...argsArr) => {
*      const diff = Math.floor(performance.now() - start)
*      result.push({"time": diff, "returned": fn(...argsArr)})
*  }
*       
*  const cancel = cancellable(log, args, t);
*
*  setTimeout(() => {
*     cancel()
*  }, cancelT)
*   
*  setTimeout(() => {
*    console.log(result)  // [
*                         //      {"time":0,"returned":8},
*                         //      {"time":35,"returned":8},
*                         //      {"time":70,"returned":8},           
*                         //      {"time":105,"returned":8},
*                         //      {"time":140,"returned":8},
*                         //      {"time":175,"returned":8}
*                         //  ]
*  }, cancelT + t + 15)    
*/

/**
 * Is Object Empty
 */
/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    for (let key in obj)
        return false;
    return true;
};

/**
 * Chunk Array
 */
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) {
    let result = [];
    for(i=0; i<arr.length; i+=size) {
        result.push(arr.slice(i, i+size))
    }
    return result;
};

/**
 * Array Prototype Last
 */
Array.prototype.last = function() {
    if (this.length === 0) {
      return -1;
    } else {
      return this[this.length - 1];
    }
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

/**
 * Sort By
 */
/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};

/**
 * Array Wrapper
 */

/**
 * @param {number[]} nums
 */
var ArrayWrapper = function(nums) {
    this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function() {
    return this.nums.reduce((acc,num) => acc + num,0);
}

ArrayWrapper.prototype.toString = function() {
    return `[${this.nums.join(',')}]`;
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */

/**
 * Calculator with Method Chaining
 */
class Calculator {
  
    /** 
     * @param {number} value
     */
    constructor(value) {
        this.result = value;
    }
  
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value){
        this.result += value;
        return this;
    }
  
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value){
        this.result -= value;
        return this;
    }
  
    /** 
     * @param {number} value
     * @return {Calculator}
     */  
    multiply(value) {
        this.result *= value;
        return this;
    }
  
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
         if (value === 0) {
             throw new Error('Division by zero is not allowed');
          }
          this.result /= value;
          return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.result = Math.pow(this.result, value);
        return this;
    }
      
    /** 
     * @return {number}
     */
    getResult() {
        return this.result;
    }
  }