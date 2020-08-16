class Vehicle{
    constructor(make, model, year){
       this.make = make;
       this.model = model;
       this.year = year;
    }
    honk() {
        return 'Beep';
    }
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
    }
}

class Car extends Vehicle{
    constructor(make, model, year, numWheels = 4){
        super(make, model, year);
        this.numWheels = numWheels;
    }
}
let myFirstCar = new Car('Toyota', 'Corolla', 2005);
console.log(myFirstCar.toString());
console.log(myFirstCar.honk());
console.log(myFirstCar.numWheels);


let myFirstVehicle = new Vehicle('Honda', 'Monster Truck', 1999);
console.log(myFirstVehicle.honk());
console.log(myFirstVehicle.toString());