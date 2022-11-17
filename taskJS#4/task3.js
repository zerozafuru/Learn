function solution(arr) {

    let result = []
    let i = 0
    let last 
    

        while (i < arr.length-1) {
            
            if ((arr[i+1] - arr[i] === 1) && (arr[i+2] - arr[i+1] === 1)) {

                let a = i

                while (arr[a+1] - arr[a] === 1) {
                    
                    last = arr[a+1] 
                    a++
                    
                }
                
                result.push(arr[i] + '-' + last)

                i = a+1

            } else {

            result.push(arr[i])

            i++

            }

        }

        return(String(result))

    }

solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])    