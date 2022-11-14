const result = []

function unbox(arg) {

    arg.forEach((item) => {

        if (Array.isArray(item)) {

            unbox(item)

        } else {

            result.push(item)

        }

    });

    return(result);

}

unbox([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]])

