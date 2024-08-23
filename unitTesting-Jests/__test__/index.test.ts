

// import {sum} from '../src/sum'
// test("it works", () => {
//     console.log("dummy test")
// })





// The test() function is used to define a test case.
// The first argument is the name of the test case.
// The second argument is a function that contains the actual test.
// The expect() function is used to make assertions in Jest.
// The toBe() function is an example of a matcher.
// Matchers are used to test values in different ways.
// In this case, it tests if the sum of 1 and 2 is equal to 3.
// If the test fails, Jest will print an error message.

// Run the test:
//pnpm run test

import { sum } from '../src/sum';
  
      test('adds 1 +2 to equal 3',() =>{
        expect(sum(2,1)).toBe(3);
      })
