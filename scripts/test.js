import pmex from 'pmex';

import 'dotenv-auto';

pmex(`prettier "{app,src,scripts,test}/**/*.{js,jsx,ts,tsx}" --check`);

pmex(`eslint "{app,src,scripts,test}/**/*.{js,jsx,ts,tsx}" --max-warnings=0`);

pmex(`tsc --noEmit`);
