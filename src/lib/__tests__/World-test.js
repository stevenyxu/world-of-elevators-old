import ElevatorConfig from '../ElevatorConfig';
import FloorConfig from '../FloorConfig';
import WorldConfig from '../WorldConfig';

jest.dontMock('../World');
jest.dontMock('riot/riot');

let World = require('../World');

describe('World with basic config', () => {
  let basicWorldConfig;
  let world;
  beforeEach(() => {
    basicWorldConfig = new WorldConfig();
    basicWorldConfig.floorConfigs = [new FloorConfig, new FloorConfig];
    basicWorldConfig.elevatorConfigs = [new ElevatorConfig];
    world = new World(basicWorldConfig);
  });
  it('should instantiate', () => {
    expect(world).toBeDefined();
  });

  it('should have listener functions', () => {
    ['on', 'off', 'trigger'].forEach(fnName => {
      expect(world[fnName]).toBeDefined();
    });
  });

  it ('should have 0 people', () => {
    expect(world.people.length).toBe(0);
  });
});
