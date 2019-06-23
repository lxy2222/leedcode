function run(generatorFunc) {
  let it = generatorFunc()
  let result = it.next()
  return new Promise((resolve, reject) => {
    const next = (res) => {
      if (res.done) {
        return resolve(res.value)
      }
      res.value = Promise.resolve(res.value)
      res.value
      .then(function (res) {
        next(res)
      })
      .catch(err => {
        reject(err)
      })
    }
    next(result)
  })
}
const PENDING = Symbol('pending')
const FULFILLED = Symbol('fulfilled')
const REJECTED = Symbol('rejected')

function promiseAsyncFunc() {
  var status = PENDING
  var fulfillCallback
  var rejectCallback
  return {
    fulfill: function (value) {
      if (status !== PENDING) return
      if (typeof fulfillCallback === 'function') {
        fulfillCallback(value)
        status = FULFILLED
      }
    },
    reject: function (error) {
      if (status !== PENDING) return
      if (typeof rejectCallback === 'function') {
        rejectCallback(error)
        status = REJECTED
      }
    },
    promise: {
      then: function (_fulfillCallback, _rejectCallBack) {
        if (status === FULFILLED) {
          _fulfillCallback(value)
          return
        }
        if (status === REJECTED) {
          _rejectCallBack(value)
          return
        }
        fulfillCallback = _fulfillCallback
        rejectCallback = _rejectCallBack
      }
    }
  }
}

// let ownPromise = function(asyncCall) {
//   let defer = promiseAsyncFunc()
//   asyncCall(defer.fulfill, defer.reject)
//   console.log(defer)
//   return defer.promise
// }

// Promise 形式的异步方法调用
// ownPromise(function(fulfill, reject) {
//   setTimeout(() => {
//     var randomNumber = Math.random()
//     if (randomNumber > 0.5) fulfill(randomNumber)
//     else reject(randomNumber)
//   }, 1000)
// }).then(data => console.log(data), err => console.log(err))
// function *gen () {
//   console.log(1)
//   yield 1;
//   console.log(2)
//   yield 2;
// }
// function spawn(genF) {
//   return new Promise(function(resolve, reject) {
//     const gen = genF();
//     function step(nextF) {
//       let next;
//       try {
//         next = nextF();
//       } catch(e) {
//         return reject(e);
//       }
//       if(next.done) {
//         return resolve(next.value);
//       }
//       Promise.resolve(next.value).then(function(v) {
//         step(function() { return gen.next(v); });
//       }, function(e) {
//         step(function() { return gen.throw(e); });
//       });
//     }
//     step(function() { return gen.next(undefined); });
//   });
// }
// spawn(gen)
async function foo1 () {
  console.log('step 1 start')
  await foo2()
  console.log('step1 end')
}
async function foo2 () {
  console.log('step2 start')
}
Promise.resolve().then(() => {
  foo1()
  console.log('promise1')
}).then(() => {
  console.log('promise2')
})