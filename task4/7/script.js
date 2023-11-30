
console.log(!!2);
console.log(!!0);
console.log(!!1);

console.log(2 || 1);
console.log(2 || 0);

console.log(2 && 1);
console.log(1 && 2);
console.log(0 && 2);

console.log(0 || 1 || 2);
console.log(0 && 1 && 2);
console.log(2 || 1 || 0);
console.log(2 && 1 && 0);

console.log(confirm('left') || confirm('right'));
console.log(confirm('left') && confirm('right'));

console.log(null || 2);
console.log(undefined && 1);
console.log(alert("Hello") && confirm('Are you sexy?'));

console.log((undefined || 2) && (3 || 0));
console.log((2 && 1) || (null && 0));
console.log((2 > 1) && "greater");
console.log((2 < 1) && null);
console.log(null && (2 < 1));

console.log(1 ? "one" : "not one");
console.log(0 ? "zero" : "not zero");
console.log("0" ? "\"zero\"" : "not `zero`");
console.log(parseInt("0") ? 'true' : 'false');
console.log(("" || 2) && (3 || "3.5") || (4 && 5));
console.log((-1 + 1) && "zero");
console.log("-1" + 1 && "oups");
console.log(typeof null === 'object' ? "null is object" : "null is null");

console.log(Math.random() < 0.5 && 'less' || 'more');
console.log((a = Math.random()) < 0.5 && 'less: ' + a || 'more: ' + a);

console.log([2,3,5,7,11].indexOf(7) > -1 ? 'prime' : 'not found');
