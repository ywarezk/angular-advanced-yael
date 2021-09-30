/**
 * Jasmine Cheat Sheet

 the most common things you will use in jasmine
 */

// describe is a group of tests
describe('testing some component', () => {

  // group of tests can be nested
  // describe()

  beforeAll(() => {

  })

  beforeEach(() => {

  })

  afterAll(() => {

  });

  afterEach(() => {

  })

  it('some test', () => {
    //
    // expect(something).toEqual(somethingElse)
    expect(true).toEqual(true);
  })

})
