module.exports = {
  preset: 'ts-jest/presets/js-with-babel',
  testEnvironment: 'jsdom',
	testRegex: '__tests__/.*\\.(test|spec)\\.(ts)$',
  testMatch:null,
  moduleFileExtensions:[
    'ts',
    'tsx',
    'js'
  ],
};
