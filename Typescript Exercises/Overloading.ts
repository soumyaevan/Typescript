/**
 * This is fot functional overloading
 */

type combinable = number | string;

 function add(a:number, b:number) : number;
 function add(a:number, b:string) : string;
 function add(a:string, b:number) : string;
 function add(a:string, b:string) : string;

 function add(a: combinable, b: combinable){
     if(typeof a === 'string' || typeof b === 'string'){
         return a.toString() + b.toString();
     }
     return a + b;
 }

console.log(add(45,65));
console.log(add('Soumya',65));
console.log(add('Soumya',' Sen'));