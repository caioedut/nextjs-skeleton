import pmex from 'pmex';

import './config';

pmex(`next start --port ${process.env.PORT}`);
