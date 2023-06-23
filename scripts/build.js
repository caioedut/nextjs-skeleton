import { config } from 'dotenv';
import run, { isYarn } from './run';

config();

const commands = [
  // Run sequence
  isYarn ? 'yarn install --check-files' : 'npm prune',
  isYarn ? 'yarn test' : 'npm run test',
  `next build`,
];

for (const cmd of commands) {
  run(cmd);
}
