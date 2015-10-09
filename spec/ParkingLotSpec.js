describe("Parking Lot", function(){

    var parkingLot;
    var car;
    var registrationNumber;

    beforeEach(function(){
       parkingLot = new ParkingLot();
       registrationNumber = "MHO4DB1890";
       car = new Car(registrationNumber);
    });

    it("should exist", function(){
        expect(parkingLot).toBeDefined();
    });


    it("should return a ticket with car registration number when a car is parked", function(){
        var ticket = parkingLot.park(new Car(registrationNumber));
        expect(ticket).toBe(registrationNumber);
    });

    it("should be able to find a car with a registration number", function(){
        var ticket = parkingLot.park(car);
        var carFound = parkingLot.find(registrationNumber);
        expect(carFound).toBeTruthy();
    });

    it("should be able to unpark a parked car", function(){
        parkingLot.park(car);
        var carFound = parkingLot.find(car.registrationNumber);
        parkingLot.unpark(carFound);
        var unparkedCarFound =  parkingLot.find(car.registrationNumber);
        expect(unparkedCarFound).toBeFalsy();
    });
})