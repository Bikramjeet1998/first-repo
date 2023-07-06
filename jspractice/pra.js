 function bunty(a,b,check){
sum= a+b;
check(sum);
}
function test(hh){

 console.log(hh);
}

bunty(5,6,test)