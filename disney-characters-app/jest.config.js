module.exports = {
  preset: 'ts-jest',
  bail: 1,
  verbose: true,
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  transform: {},
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleDirectories: [
    'node_modules',
    'test',
    'src',
  ],
  "collectCoverage": true,
  "coverageReporters": [
    "text"
  ],
  "collectCoverageFrom": [
    "src/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/node_modules/",
  ],
  "coveragePathIgnorePatterns": [
      "node_modules",
      "index.tsx",
      "<rootDir>/src/index.tsx",
      "<rootDir>/src/reportWebVitals.ts",
      "<rootDir>/src/hooks/useDisneyCharactersData.ts"
  ],
  "coverageDirectory": "<rootDir>/coverage/",
  "coverageThreshold": {
    "global": {
      "branches": 80,
      "functions": 80,
      "lines": 80,
      "statements": 80
    }
  },
};
