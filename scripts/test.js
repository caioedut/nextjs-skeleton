import './config';
import run from './run';

const commands = [
  // Run sequence
  `prettier --check "{src,test}/**/*.{js,jsx,ts,tsx}"`,
  `next lint`,
  `tsc --noEmit`,
];

for (const cmd of commands) {
  run(cmd);
}
