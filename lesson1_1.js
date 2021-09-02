for (let i = 1; i < 100; i++) {
    const fizz = 3;
    const buzz = 5;
    if ((i % fizz === 0) && (i % buzz === 0)) {
        console.log("FizzBuzz " + i);
    } else if (i % fizz === 0) {
        console.log("Fizz " + i);
    } else if (i % buzz === 0) {
        console.log("Buzz " + i);
    }
}
