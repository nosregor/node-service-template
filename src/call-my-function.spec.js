import callMyFunction from './call-my-function';

describe('callMyFunction function', () => {
  it('calls the passed function', () => {
    const callback = jest.fn();

    callMyFunction(callback);

    expect(callback).toHaveBeenCalledTimes(1);
  });
});
