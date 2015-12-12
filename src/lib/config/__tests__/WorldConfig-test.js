import FloorConfig from '../FloorConfig';

jest.dontMock('../WorldConfig');

let WorldConfig = require('../WorldConfig');

describe('WorldConfig', () => {
  it('should instantiate with no arguments', () => {
    expect(new WorldConfig).toBeTruthy();
  });

  it('should have 2 floors by default', () => {
    expect(new WorldConfig().floorConfigs.length).toBe(2);
  });

  it('should have 1 elevator by default', () => {
    expect(new WorldConfig().elevatorConfigs.length).toBe(1);
  });
});

describe('numFloors overrides', () => {
  it('should update floors', () => {
    let wc = new WorldConfig({numFloors: 5});
    expect(wc.floorConfigs.length).toBe(5);
  });
});

describe('numElevators overrides', () => {
  it('should update elevators', () => {
    let wc = new WorldConfig({numElevators: 2});
    expect(wc.elevatorConfigs.length).toBe(2);
  });
});

describe('floorConfigs overrides', () => {
  it('should update floors', () => {
    let wc = new WorldConfig({floorConfigs: new Array(5)});
    expect(wc.floorConfigs.length).toBe(5);
  });

  it('should not cause the first floor to become an entrance', () => {
    FloorConfig.mockClear();
    let wc = new WorldConfig({floorConfigs: new Array(5)});
    expect(FloorConfig.mock.calls[0][0].entrance).toBeFalsy();
    expect(FloorConfig.mock.calls[1][0].entrance).toBeFalsy();
  });
});

describe('elevatorConfigs overrides', () => {
  it('should update elevators', () => {
    let wc = new WorldConfig({elevatorConfigs: new Array(2)});
    expect(wc.elevatorConfigs.length).toBe(2);
  });
});
