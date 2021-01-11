module.exports = {
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    'testRegex': '^.*.test.tsx?$',
    testPathIgnorePatterns: ['/lib/', '/node_modules/'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    collectCoverage: true,
    'coverageThreshold': {
        'global': {
            'statements': 65,
            'branches': 40,
            'functions': 55,
            'lines': 65
        }
    },
    'collectCoverageFrom': [
        'src/**/*.{ts,tsx}',
        '!**/node_modules/**',
        '!**/coverage/**',
    ],
};
