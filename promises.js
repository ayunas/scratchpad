const promise  = new Promise( (res,rej) => {

    const x = Math.round(Math.random());

    x === 1 ? res('successful promise') : rej('unsuccessful promise');
})


promise.then(res => console.log(res)).catch(err => console.log(err));

