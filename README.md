# React useEffect Hook Bug

This repository demonstrates a common error when using the `useEffect` hook in React. The component's state is unexpectedly reset to 0 due to incorrect logic within the `useEffect` hook.  The solution shows how to correctly use `useEffect` to avoid this issue.

## Bug

The `bug.js` file contains a React component where the `useEffect` hook sets the `count` state to 0 on every render. This unintended behavior results in the counter always showing 0.

## Solution

The `bugSolution.js` file shows the corrected implementation. The `useEffect` hook is now used correctly to perform side effects without interfering with the component's state updates.