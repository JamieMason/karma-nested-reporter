describe('sum(a, b)', function () {
  it('is a function', function () {
    expect(typeof window.sum).toEqual('function');
  });
  it('returns a number', function () {
    expect(typeof window.sum(1, 2)).toEqual('number');
  });
  it('add numbers correctly', function () {
    expect(window.sum(1, 2)).toEqual(3);
  });
});
