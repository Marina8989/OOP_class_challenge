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

let myFirstVehicle = new Vehicle('Honda', 'Monster Truck', 1999);
console.log(myFirstVehicle.honk());
console.log(myFirstVehicle.toString());