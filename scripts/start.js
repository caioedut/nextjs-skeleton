import pmex from 'pmex';

import 'dotenv-auto';

pmex(`next start --port ${process.env.PORT}`);
