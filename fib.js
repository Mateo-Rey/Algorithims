

const fib = (n) => {
if (n <= 1) return n;
 return (fib(n-1)+fib(n-2));
}



const countdown = (num) => {
    for (let i = num; i > 1; i--) {
        console.log(fib(i))
    }
}

