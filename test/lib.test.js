TestCase('lib', sinon.testCase({
  'test should work' : function () {
     assertTrue(lib(true)); 
   }
}));

describe('lib', function () {
  it('should work', function () {
    expect(lib(true)).toBeTruthy();
  });
});
