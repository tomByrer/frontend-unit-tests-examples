import React, { SFC } from 'react';
import { add as defaultAdd } from './function';

/**
 * These are the props which can be passed to `<Add/>`.
 */
interface AddProps {
  /**
   * The first summand.
   */
  a: number;
  /**
   * The second summand.
   */
  b: number;
  /**
   * The add function which should be used. Defaults to `add` from `'./function'`.
   */
  add?: typeof defaultAdd;
}

/**
 * The `<Add/>` component adds two summands and shows the sum.
 */
export const Add: SFC<AddProps> = ({ a, b, add = defaultAdd }) => <p>The sum is: {add(a, b)}.</p>;
