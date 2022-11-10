function symbolComparison (arg) {

    let array = [];
    let i = 0;

    while (i < arg.length - 1) {

        let a = arg[i];
        let b = arg[i + 1];

        array.push(( a[0] == b[0]) && (a[a.length - 1] == b[b.length - 1]));
        i++;
        
        };

    return(array);
};

symbolComparison (["asd", "afffd", "cc", "kk"])