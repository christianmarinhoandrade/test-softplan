module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)',
    '!src/App.tsx',
    '!src/index.tsx',
    '!src/pages/**/containers/*.tsx',
    '!src/providers/**/*.tsx',
    '!src/routes/**/*.tsx',
    '!src/styles/**/*.ts(x)'
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  modulePaths: ['<rootDir>/src/.jest'],
  setupFilesAfterEnv: ['<rootDir>/src/.jest/setup.js'],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/.jest/fileMock.js',
    '\\.(css|less)$': '<rootDir>/src/.jest/styleMock.js'
  },
  moduleDirectories: ['node_modules', 'src']
}
