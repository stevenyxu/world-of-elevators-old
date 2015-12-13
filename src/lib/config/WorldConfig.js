import ElevatorConfig from './ElevatorConfig';
import FloorConfig from './FloorConfig';

class WorldConfig {
  constructor(params = {}) {
    const floorConfigsSet = !!params.floorConfigs;
    if (!floorConfigsSet) {
      params.floorConfigs = new Array(params.numFloors || 2);
    }
    this.floorConfigs = [];
    // params.floorConfigs can be sparse, so we can't use forEach
    for (let i = 0; i < params.floorConfigs.length; i++) {
      let floorConfigArgs;
      if (params.floorConfigs[i]) {
        floorConfigArgs = params.floorConfigs[i];
      } else {
        floorConfigArgs = !floorConfigsSet && i === 0 ? { entrance: true } : {};
      }
      this.floorConfigs[i] = new FloorConfig(floorConfigArgs);
    }

    // params.elevatorConfigs can be sparse, so we can't use forEach
    if (typeof params.elevatorConfigs === 'undefined') {
      params.elevatorConfigs = new Array(params.numElevators || 1);
    }
    this.elevatorConfigs = [];
    for (let i = 0; i < params.elevatorConfigs.length; i++) {
      let elevatorConfig = params.elevatorConfigs[i];
      if (typeof params.elevatorConfigs[i] === 'undefined') {
        elevatorConfig = {};
      }
      this.elevatorConfigs[i] = new ElevatorConfig(elevatorConfig);
    }
  }
}

export default WorldConfig;
