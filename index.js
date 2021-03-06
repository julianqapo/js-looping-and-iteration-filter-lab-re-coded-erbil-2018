// Code your solution in this file


//function findMatching(drivers, string){ return drivers.filter(item =>  item == string)}

function findMatching(drivers, string){ return drivers.filter(item => item.substring(1) == string.substring(1))}


//function fuzzyMatch(drivers, string){ return drivers.filter(function (x) {if (string === x.charAt(0) ){return x}})}
function fuzzyMatch(drivers, string){ return drivers.filter(item => string == item.substring(0,2))}

 //function findMatching(drivers, string){ return drivers.filter(item => item.substring(0,2) == string.substring(0,2))}
 //function fuzzyMatch(drivers, string){ return drivers.filter(function (x) {if (string === x.charAt(0) || item.substring(0,2) == string.substring(0,2) ){return x}})}


function matchName(drivers, string){return drivers.filter(function (x) {if (string === x.name){return x}})}
