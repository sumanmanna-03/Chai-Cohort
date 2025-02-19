class A{
    funInsideA(){

    }
}

class B extends A{
    funInsideB() {

    }
}

// In this code B.protype ke ander 'constrctor:classA' present hoga
// Here extends lagane se A ki property B me exist karta hai

const p1 = new B();

p1.funInsideA()
p1.funInsideB() // Now we can access both function of class A and Class B