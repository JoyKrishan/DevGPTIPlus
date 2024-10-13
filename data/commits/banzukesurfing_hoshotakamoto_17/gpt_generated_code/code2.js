const Pick = require('./pick');

describe('Pick', () => {
  it('should set the wrestlerName property correctly', () => {
    const myPick = new Pick('Sumo Wrestler 1');
    expect(myPick.wrestlerName).toBe('Sumo Wrestler 1');
  });
});