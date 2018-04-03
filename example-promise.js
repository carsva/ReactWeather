


function addPromise(a, b) {
  return new Promise(function(resolve, reject) {

    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('a & b are not numbers');
    }
  });
}

addPromise(2, 5).then(function(success) {
  console.log('Success', success);

}, function(err) {
  console.log('Did not work' + err);

});

addPromise(2, 'hello').then(function(success) {
  console.log('Success', success);

}, function(err) {
  console.log('Did not work' + err);

});
