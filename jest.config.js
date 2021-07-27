module.exports = {
    roots: ['<rootDir>/src'],
    testEnviroment: 'node',
    transform: {
        '.+\\.ts$': 'ts-jest'   
    },
    moduleNameMapper: {
        '@/(.*)': '<rooDir>/src/$1'
    }
}