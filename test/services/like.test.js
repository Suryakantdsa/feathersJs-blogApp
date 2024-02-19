const app = require('../../src/app');

describe('\'like\' service', () => {
  it('registered the service', () => {
    const service = app.service('like');
    expect(service).toBeTruthy();
  });
});
