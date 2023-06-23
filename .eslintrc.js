module.exports = {
  extends: ['next', 'prettier', 'plugin:perfectionist/recommended-natural'],

  rules: {
    'perfectionist/sort-imports': [
      'error',
      {
        'custom-groups': {
          type: { react: 'react' },
          value: { react: ['react', 'react-*'] },
        },
        groups: [
          'type',
          'react',
          ['builtin', 'external'],
          ['parent-type', 'sibling-type', 'index-type'],
          ['parent', 'sibling', 'index'],
          'side-effect',
          'style',
          'object',
          'unknown',
        ],
        'read-tsconfig': true,
      },
    ],
    'perfectionist/sort-jsx-props': [
      'error',
      {
        'always-on-top': ['key', 'ref', 'component', 'id'],
        callback: 'last',
        shorthand: 'first',
      },
    ],
    'perfectionist/sort-objects': [
      'error',
      {
        'always-on-top': ['id', 'name', 'title', 'label'],
      },
    ],
  },
};
