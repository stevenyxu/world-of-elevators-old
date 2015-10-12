import {observable} from 'riot/riot';
import Elevator from './Elevator';
import Floor from './Floor';

class World {
  constructor(worldConfig) {
    observable(this);
    this.clock = 0;
    this.floors = [];
    worldConfig.floorConfigs.forEach(config => {
      this.floors.push(new Floor(config));
    });
    this.people = [];
    this.elevators = [];
    worldConfig.elevatorConfigs.forEach(config => {
      this.elevators.push(new Elevator(config));
    });
  }

  tick() {
    this.floors.forEach(floor => {
      floor.tick(this.clock);
    });
    this.people.forEach(person => {
      person.tick(this.clock);
    });
    this.elevators.forEach(elevator => {
      elevator.tick(this.clock);
    });
    this.clock++;
  }
}

export default World;
