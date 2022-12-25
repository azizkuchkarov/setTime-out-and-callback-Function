function firstFunction(cb) {
  setTimeout(() => {
    console.log(1);
    cb();
  }, 1000);
}
function secondFunction() {
  console.log(2);
}
firstFunction(secondFunction);

function education(subject, callback) {
  console.log(`Do you want to study ${subject}`);
  callback();
}
education("JS", function () {
  console.log("Thats great");
});
