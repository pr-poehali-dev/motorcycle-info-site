export interface Motorcycle {
  id: number;
  name: string;
  type: string;
  image: string;
  engine: {
    displacement: string;
    power: string;
    torque: string;
    type: string;
    cylinders: number;
  };
  specs: {
    weight: string;
    fuelCapacity: string;
    fuelConsumption: string;
    topSpeed: string;
    frontWheel: string;
    rearWheel: string;
    seatHeight: string;
    wheelbase: string;
    groundClearance: string;
    brakeFront: string;
    brakeRear: string;
    transmission: string;
    cooling: string;
    ignition: string;
  };
  price: string;
}
