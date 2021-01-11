module.exports = {
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    'testRegex': '^.*.test.tsx?$',
    testPathIgnorePatterns: ['/lib/', '/node_modules/'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    collectCoverage: true,
};
