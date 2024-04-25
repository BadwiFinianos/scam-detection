module.exports = {
  roots: ['<rootDir>/src/'],
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '@customTypes/(.*)': '<rootDir>/src/customTypes/$1',
    '@services/(.*)': '<rootDir>/src/services/$1',
    '@rules/(.*)': '<rootDir>/src/rules/$1',
    '@data/(.*)': '<rootDir>/src/data/$1'
  }
};
