import run, { isYarn } from './run';

import './config';

const commands = [
  // Run sequence
  isYarn ? `yarn install --check-files` : `npm prune`,
  `next dev --port ${process.env.PORT || 3000}`,
];

for (const cmd of commands) {
  run(cmd);
}
