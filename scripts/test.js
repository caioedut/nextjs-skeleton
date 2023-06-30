import pmex from 'pmex';

import './config';

pmex(`prettier "{scripts,src,test}/**/*.{js,jsx,ts,tsx}" --check`);

pmex(`eslint "{scripts,src,test}/**/*.{js,jsx,ts,tsx}"`);

pmex(`tsc --noEmit`);
