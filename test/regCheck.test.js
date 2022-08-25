// "acts like a script tag"
const regCheck = require('../regCheck');

//should print true
var isGP = regCheck('DV 23 NB GP', 'GP');
console.log(isGP);
//should print false
var isGP = regCheck('DV 23 NB GP', 'L');
console.log(isGP);

//should print true
var isGP = regCheck('BKS 352 L', 'L');
console.log(isGP);
//should print false
var isGP = regCheck('BKS 352 L', 'EC');
console.log(isGP);

//should print true
var isGP = regCheck('FH 27 JY EC', 'EC');
console.log(isGP);
//should print false
var isGP = regCheck('FH 27 JY EC', 'MP');
console.log(isGP);

//should print true
var isGP = regCheck('ZS 54 CX MP', 'MP');
console.log(isGP);
//should print false
var isGP = regCheck('ZS 54 CX MP', 'GP');
console.log(isGP);