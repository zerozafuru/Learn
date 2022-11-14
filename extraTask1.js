const users = [
    {
      id: 1,
      name: 'Alex',
      cars: ['audi', 'bmw', 'porshe']
    },
    {
      id: 2,
      name: 'Tony',
      cars: ['audi']
    },
    {
      id: 3,
      name: 'Jony',
      cars: ['lada', 'bmw', 'ford']
    }
  ]
  
  const cars = {
    1: {
      id: 1,
      title: 'audi'
    },
    2: {
      id: 2,
      title: 'bmw'
    },
    3: {
      id: 3,
      title: 'porshe'
    },
    4: {
      id: 4,
      title: 'lada'
    },
    5: {
      id: 5,
      title: 'ford'
    },
  }

  //

let formatedUsers = {}

function formate() {
    
    users.forEach((user) => {
        
        formatedUsers[user.id] = {

            id   : user.id,
            name : user.name,

        }    

        let arr = []
        
        function carsId() {
                
            user.cars.forEach((item) => {
                
                for (key in cars) {

                    if ((cars[key].title) == item) {

                        arr.push(cars[key].id)
                            
                    }
                       
                } 
                    
            })
                
         }

        formatedUsers[user.id].cars = arr

        carsId()

    }) 
            
}

formate()

console.log(formatedUsers)

console.log(users[0].cars)

        

   