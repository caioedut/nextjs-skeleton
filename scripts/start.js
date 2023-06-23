import run from './run';

import './config';

const commands = [
  // Run sequence
  `next start --port ${process.env.PORT || 3000}`,
];

for (const cmd of commands) {
  run(cmd);
}
