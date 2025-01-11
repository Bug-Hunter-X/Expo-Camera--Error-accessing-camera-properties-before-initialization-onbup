# Expo Camera Initialization Race Condition

This repository demonstrates a common error when using the Expo Camera API: attempting to access camera properties before the camera has fully initialized.  This often results in unpredictable behavior or crashes.

The provided `cameraBug.js` file reproduces the issue. The solution, `cameraBugSolution.js`, demonstrates how to properly handle camera initialization using async/await and a state variable to track readiness.