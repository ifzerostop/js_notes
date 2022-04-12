function foo() {
    Promise.resolve().then(() => console.log(1))

    setTimeout(() => console.log(2))

    Promise.resolve().then(() => console.log(3))

    console.log(4)
}

foo();

console.log(5);

// 2 4 5 1 3
// 4 5 2 1 3
// 4 1 3 5 2
// 4 5 1 2 3
// 4 5 1 3 2 - winner