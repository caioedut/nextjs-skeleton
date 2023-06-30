import pmex from 'pmex';

import './config';

pmex({
  npm: `install && npm prune`,
  pnpm: `install --fix-lockfile`,
  yarn: `install --check-files`,
});

pmex(`test`);

pmex(`next build`);
