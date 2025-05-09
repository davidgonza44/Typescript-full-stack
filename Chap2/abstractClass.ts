namespace AbstractNamespace{
    abstract class Vehicle{
        constructor(protected wheelCount : number) {}
        abstract updateWheelCount(newWheelCount : number) : void
        showNumberOfWheels(){
            console.log(`moved ${this.wheelCount} miles`)
        }
    }

    class Motorcycle extends Vehicle{
        constructor(){
            super(2)
        }

        updateWheelCount(newWheelCount: number): void {
            this.wheelCount = newWheelCount
            console.log(`Motorcycle has ${this.wheelCount}`)
        }

        showNumberOfWheels(): void {
            console.log(`moved ${this.wheelCount} miles`)
        }
    }

    class Automobile extends Vehicle{
        constructor(){
            super(4)
        }

        updateWheelCount(newWheelCount: number): void {
            this.wheelCount = newWheelCount;
            console.log(`Automobile has ${this.wheelCount}`)
        }
    }

    const motorCycle = new Motorcycle();
    motorCycle.updateWheelCount(1)
    const automobile = new Automobile()
    automobile.updateWheelCount(3)
    
}