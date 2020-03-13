interface AddFn{
    (num1: number, num2: number): number;
}

// type AddFn = (n1: number, n2: number) => number;
let add: AddFn;

add= (n1: number, n2: number) => {
    return n1 + n2;
};
console.log(add(45,32));