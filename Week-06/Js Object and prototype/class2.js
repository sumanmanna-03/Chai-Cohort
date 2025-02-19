const Person = {
    getFullName(){
        return this.fname
    }
}

const obj1 = {
    fname:'Piyush',
    lname:'Garg',
    getFullName: function(){
        if(this.lname !== undefined) 
            return `${this.fname} ${this.lname}`
        return this.fname
    }
}

const obj2 = {
    fname: 'Anirudh',
    lname: 'Jawla'
}

obj1.__proto__ = Person
obj2.__proto__ = Person

// This is not a good practice because here we are changing the main __proto__ of this code