var ParkingLot = function(){
    this.parkedCar = null;
}

ParkingLot.prototype.park = function(car){
    this.parkedCar = car;
    return car.registrationNumber;
}

ParkingLot.prototype.find = function(registrationNumber){
    if(this.parkedCar!=null && this.parkedCar.registrationNumber === registrationNumber){
        return true;
    }
    return false;
}

ParkingLot.prototype.unpark = function(carFound){
    if(carFound === true){
        var parkedCar = this.parkedCar;
        this.parkedCar = null;
        return parkedCar;
    }
}
