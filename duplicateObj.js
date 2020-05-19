function duplicateObject(original) {

    let copy = {
        created : Date.now(),
        author : original.author,
        cells : original.cells,
        metadata : original.metadata
    }


    // copy.metadata.title = 'Copy of ' + original.metadata.title   //changing a property that is pointing to the original object key will modify both the copy and the original.  variables pointing to objects are stored by reference and not by value.

    const title = original.metadata.title;
    copy.metadata.title = 'copy of ' + title;

    return copy;
}


const orig = {
    created : 'original object',
    author : 'Dan Abramov',
    cells : [1,2,3,4,5],
    metadata : {title : 'Just Javascript', info : 'just javascript will be a very interesting course', comments : 'Love learning from the experts'}
};


x  = duplicateObject(orig);

console.log(x)
console.log(orig)

