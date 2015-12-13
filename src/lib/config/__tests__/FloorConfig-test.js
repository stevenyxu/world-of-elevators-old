jest.dontMock('../FloorConfig');

const FloorConfig = require('../FloorConfig');

describe('FloorConfig', () => {
  it('should instantiate with no arguments', () => {
    expect(new FloorConfig).toBeTruthy();
    expect(new FloorConfig().entrance).toBeFalsy();
  });

  it('should accepts an entrance argument', () => {
    expect(new FloorConfig({ entrance: true }).entrance).toBeTruthy();
  });
});
