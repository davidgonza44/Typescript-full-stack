namespace InterfaceNamespace {
    interface Thing{
        name : string,
        getFullName : () => string;
    }

    interface Vehicle extends Thing{
        wheelCount : number;
        updateWheelCount : (newWheelCount : number) => void;
        showNumberOfWheels : ()=> void
    }

    class Motorcycle implements Vehicle{
        name : string;
        wheelCount : number;
        constructor(name : string){
            this.name = name
        }
        updateWheelCount(newWheelCount : number){
            this.wheelCount = newWheelCount
        }

        showNumberOfWheels():  void{
            console.log(`moved Automobile ${this.wheelCount} miles`)
        }

        getFullName(): string {
            return "Mc-" + this.name
        }
    }

    const moto = new Motorcycle("beginner-cycle")
    console.log(moto.getFullName())
}

