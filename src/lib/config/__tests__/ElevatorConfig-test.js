jest.dontMock('../ElevatorConfig');

const ElevatorConfig = require('../ElevatorConfig');

describe('ElevatorConfig', () => {
  it('should instantitate with no arguments', () => {
    expect(new ElevatorConfig).toBeTruthy();
  });

  it('should default to size of 6', () => {
    expect(new ElevatorConfig().size).toBe(6);
  });

  it('accept size overrides', () => {
    expect(new ElevatorConfig({ size: 3 }).size).toBe(3);
  });
});
