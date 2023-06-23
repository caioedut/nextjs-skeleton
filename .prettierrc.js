module.exports = {
  arrowParens: 'always',
  semi: true,
  singleQuote: true,
  trailingComma: 'all',

  // @trivago/prettier-plugin-sort-imports
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: ['typescript', 'jsx'],
  importOrder: [
    '^react(-native)?$',
    '<THIRD_PARTY_MODULES>',
    '^next/(.*)$',
    '^@react-bulk/(.*)$',
    '(.*).css$',
    '^[./]',
  ],
};
