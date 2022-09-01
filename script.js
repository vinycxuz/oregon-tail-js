class Traveler {
    constructor(name){
        this.food = 1
        this.name = name
        this.isHealthy = true
    }

    hunt(){
        return this.food += 2
    }

    eat(){       
        if(this.food == 0)
            return this.isHealthy = false
        else
            this.food -= 1
    }
}

class Wagon {
    constructor(capacity){
        this.capacity = capacity
        this.passageiros = []
    }

    getAvailableSeatCount(){
        if(this.capacity == this.passageiros.length)
            return 0
        else   
            return this.capacity - this.passageiros.length
    }

    join(people){
        if(this.getAvailableSeatCount() == 0){
            return
        }
        else {
            this.passageiros.push(people)
        }
    }

    shouldQuarantine(){
        let bool 
        this.passageiros.forEach(element => {
            if(element.isHealthy === false){
            bool = true
            } 
        })
        return bool
    }

    totalFood(){
        let totalComida = 0
        this.passageiros.forEach(element => {
            totalComida += element.food
        })
        return totalComida
    }
}

let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');
 
console.log(`${wagon.getAvailableSeatCount()} should be 2`);
 
wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);
 
wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);
 
henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)
 
console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);