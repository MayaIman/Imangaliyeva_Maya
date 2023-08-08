export class Car {
    #brand = 'BMW';
    #model = 'e60';
    #yearOfManufacturing = 2003;
    #maxSpeed = 250;
    #maxFuelVolume = 70;
    #fuelConsumption = 5.1;
    #currentFuelVolume = 50;
    #isStarted = false;
    #mileage = 0;

    get brand() {
        return this.#brand;
    }

    get model() {
        return this.#model;
    }

    get yearOfManufacturing() {
        return this.#yearOfManufacturing
    }

    get maxSpeed() {
        return this.#maxSpeed;
    }

    get maxFuelVolume() {
        return this.#maxFuelVolume;
    }

    get fuelConsumption() {
        return this.#fuelConsumption;
    }

    get currentFuelVolume(){
        return this.#currentFuelVolume;
    }

    get isStarted(){
        return this.#isStarted;
    }

    get mileage(){
        return this.#mileage;
    }

    set brand(value) {
        if(typeof value !== 'string' || value.length === 0 || value.length > 50) {
            throw new Error("Некорректное значение бренда");
        }
        this.#brand = value;
    }
    set model(value){
        if(typeof value !== 'string' || value.length === 0 || value.length > 50) {
            throw new Error("Некорректное значение модели");
        }
        this.#model = value;
    }
    set yearOfManufacturing(n){
        if(typeof n !== 'number'|| n < 1900 ){
            throw new Error('Некоррекное значение года производства')
        }
        this.#yearOfManufacturing = n;
    }
    set maxSpeed(n){
        if(typeof n !== 'number' || n < 100 || n > 300){
            throw new Error('Некоректное значение максимальной скорости')
        }
        this.#maxSpeed = n;
    }
    set maxFuelVolume(liters){
        if(typeof n !== 'number' || n < 5 || n > 20){
            throw new Error('Некорректное значение максимального объема топлива ')
      }
        this.#maxFuelVolume = liters;
    }
    set fuelConsumption(liters){
        if(typeof liters !== 'number'){
            throw new Error('Некорректное значение потребления топлива')
        }

    }
    start() {
        if (this.#isStarted === true) {
            throw new Error('Машина уже заведена.');
        } else {
            this.#isStarted = true;
        }
    };

    shutDownEngine() {
        if (this.#isStarted === false) {
            throw new Error('Машина еще не заведена.');
        } else {
            this.#isStarted = false;
        }
    }

    fillUpGasTank(litresToAdd) {
        if (typeof litresToAdd !== 'number') {
            throw new Error('Неверное количество топлива для заправки.');
        }
        if (litresToAdd <= 0) {
            throw new Error('Неверное количество топлива для заправки.');
        }
        if (litresToAdd + this.currentFuelVolume > this.maxFuelVolume) {
            throw new Error('Топливный бак переполнен.');
        } else {
            this.#currentFuelVolume += litresToAdd;
        }
    }
    drive(speed, hours) {
        if (typeof speed  !== 'number' || speed <= 0) {
            throw new Error('Неверная скорость.');
        }
        if (typeof hours !== 'number' || hours <= 0) {
            throw new Error('Неверное количество часов.');
        }
        if (speed > this.#maxSpeed) {
            throw new Error('Машина не может ехать так быстро.');
        }
        if (!this.#isStarted) {
            throw new Error('Машина должна быть заведена, чтобы ехать.');    
        }
        if (this.#currentFuelVolume <= speed * hours / this.#fuelConsumption) {
            throw new Error('Недостаточно топлива.');
        } else {
            this.#mileage += speed * hours;
            this.#currentFuelVolume -= speed * hours / this.#fuelConsumption;
        }
    }
}
