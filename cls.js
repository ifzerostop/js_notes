// function Auto(model, maxSpeed){
//     this.model = model;
//     this.maxSpeed = maxSpeed;
//     this.engine = false;
//     this.speed = 0;
// }
//
// Auto.prototype.startEngine = function(){
//     this.engine = true;
//     console.log('Engine start');
// }
//
// Auto.prototype.stopEngine = function(){
//     this.engine = false;
//     console.log('Engine stop');
// }
//
// const bmw = new Auto('e46', 170);
// bmw.startEngine();
//
class Auto {
    constructor(model, maxSpeed) {
        this.model = model;
        this.maxSpeed = maxSpeed;
        this.engine = false;
        this.speed = 0;
    }

    startEngine(){
        this.engine = true;
        console.log('Engine start');
    }

    stopEngine(){
        this.engine = false;
        console.log('Engine stop');
    }

    speedUp(amount){
        this.speed = Math.min(this.speed + amount, this.maxSpeed)

    }
    slowDown(amount) {
        this.speed = Math.max(this.speed - amount, 0);
    }
}
//
// const bmw = new Auto('e46', 170);
// const toyota = new Auto('auris', 270);
// bmw.startEngine();
// bmw.speedUp(20);
// bmw.speedUp(20);
// bmw.speedUp(20);
// bmw.slowDown(30);
// bmw.slowDown(30);
// bmw.slowDown(30);
// bmw.stopEngine();
// toyota.startEngine();
// toyota.slowDown(20);

// toyota.slowDown(20)
// toyota.stopEngine();
//
// console.log(bmw);

class Van extends Auto {
    constructor(brand, maxSpeed, seats) {
        super(brand, maxSpeed);
        this.seats = seats;
    }

    speedUp(amount) {
        if (this.engine) {
            super.speedUp(amount * 0.9);
        } else {
            console.log("start engine first")
        }
    }
}
const smax = new Van('s-max', 170);
smax.startEngine();
smax.speedUp(20);
smax.speedUp(20);
smax.speedUp(20);
smax.slowDown(30);
smax.slowDown(30);
smax.slowDown(30);
smax.stopEngine();