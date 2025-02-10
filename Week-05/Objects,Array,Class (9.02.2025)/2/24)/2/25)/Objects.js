const person = {
    x:10,
    firstName:"Piyush",
    lastName:"Garg",
    hobbies:['Coding','Gym'],
    isPiyushSirMarried : false,
    hasGf : true,
    getFullName: function(){
        return person.firstName + ' ' + person.lastName;
    },
    address: {
        hno:1,
        street:1,
        countryCode:"IN",
        state: 'PB'
    }
}

console.log(person.address.hno)

const remote = {
    color: 'black',
    brand: 'XYZ',
    dimensions: {height:1, width:1},
    turnOff: function(){

    },
    volumeUp: function(){
        
    }
}