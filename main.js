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
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle{
     constructor(make, model, year) {
         super(make, model, year);
         this.numWheels = 2;
     }
     revEngine() {
         return 'VROOM!!!';
     }
}

class Garage{
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(x) {
       if(!(x instanceof Vehicle)) {
            return 'Only vehicles are allowed in here!';
       }
       if(this.vehicles.length >= this.capacity) {
           return 'Sorry we\'re are full.';
       }
       this.vehicles.push(x);
       return 'Vehicle added!';
    }
}
 let garage = new Garage(2);
console.log(garage.vehicles);
console.log(garage.add(new Car('Hyundai', 'Elantra', 2015)));
console.log(garage.vehicles);
console.log(garage.add('Taco'));
console.log(garage.add(new Motorcycle('Honda', 'Nighthawk', 2000)));
console.log(garage.vehicles);

console.log(garage.add(new Motorcycle('Honda', 'Nighthawk', 2000)));

console.log(garage.vehicles);



let myFirstMotorcycle = new Motorcycle('Honda', 'Nighthawk', 2000);
console.log(myFirstMotorcycle.toString());
console.log(myFirstMotorcycle.honk());
console.log(myFirstMotorcycle.revEngine());
console.log(myFirstMotorcycle.numWheels);


let myFirstCar = new Car('Toyota', 'Corolla', 2005);
console.log(myFirstCar.toString());
console.log(myFirstCar.honk());
console.log(myFirstCar.numWheels);


let myFirstVehicle = new Vehicle('Honda', 'Monster Truck', 1999);
console.log(myFirstVehicle.honk());
console.log(myFirstVehicle.toString());