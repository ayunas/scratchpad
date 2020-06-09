function fn() {
    block: {
        let x = 10;
        var y = 20;
    }

    console.log(x);
    console.log(y);
}


fn();
