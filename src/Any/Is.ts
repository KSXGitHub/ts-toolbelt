import {Match} from './_Internal'
import {Extends} from './Extends'
import {Equals} from './Equals'
import {Contains} from './Contains'

/** Check whether `A` is similar to `A1` or not
 * @param A to be compared
 * @param A1 to compare to
 * @param match to change precision (?=`'default'`)
 * @returns **`true`** or **`false`**
 * @example
 * ```ts
 * import {A} from 'ts-toolbelt'
 *
 * type test0 = A.Is<'x', 'x' | 0>            // true
 * type test1 = A.Is<'x', 'x' | 0, 'extends->'> // true
 * type test2 = A.Is<'x', 'x' | 0, 'equals'>  // false

 * type test4 = A.Is<'x' | 0, 'x'>            // boolean
 * type test5 = A.Is<'x' | 0, 'x', 'extends->'> // boolean
 * type test6 = A.Is<'x' | 0, 'x', 'equals'>  // false
 * ```
 */
export type Is<A extends any, A1 extends any, match extends Match = 'default'> = {
    'default'   : Extends<A,   A1>
    'contains->': Contains<A,  A1>
    'extends->' : Extends<A,   A1>
    '<-contains': Contains<A1, A>
    '<-extends' : Extends<A1,  A>
    'equals'    : Equals<A1,   A>
}[match]
