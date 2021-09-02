import { createSelector } from '@ngrx/store';

/**

 state = {
   errorExample: {
     sum: 10,
     stamArray: []
   }
 }


 * @returns
 */

const grabTheErrorExample = (state: any) => state.errorExample;

// based on the sum grab some children of the stamArray
// export const sumChildFromStamArray

export const selectSum = createSelector(
  grabTheErrorExample,
  (state) => {
    return state.sum
  }
)
