import run from './run';

import './config';

const commands = [
  // Run sequence
  `prettier "{scripts,src,test}/**/*.{js,jsx,ts,tsx}" --check`,
  `eslint "{scripts,src,test}/**/*.{js,jsx,ts,tsx}"`,
  `tsc --noEmit`,
];

for (const cmd of commands) {
  run(cmd);
}
