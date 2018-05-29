'use strict'

const NUMBER_OF_USER = 4
let usersList = new Set([])

class User{
  constructor(name="Agent47", age=55){
    this.name = name
    this.age = age
  }
  
  get Name(){
    return this.name
  }
  
  get Age(){
    return this.age
  }
}

for(let i=0; i<NUMBER_OF_USER ;i++) {
  usersList.add(new User( 
    prompt( `Put the name of user ${i+1} :` ),  
    prompt( `Put the age of user ${i+1} :` )
  ))
}

let T = [...usersList].sort( (a,b) => b.Age - a.Age )

for(let i=0; i<NUMBER_OF_USER-1 ;i++ ) {
  console.log(` ${T[i].Name} is older than ${T[i+1].Name} `)
}
