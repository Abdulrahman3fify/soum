module.exports = {
  preset: 'react-native',
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    '\\.ts$': ['ts-jest'],
    '^.+\\.(ts|tsx|js)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    '/node_modules/(?!@react-native|react-native|@react-navigation|react-native-checkbox)',
  ],
};
