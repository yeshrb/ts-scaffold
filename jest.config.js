// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {

	// Automatically clear mock calls and instances between every test
	clearMocks: true,

	// Indicates whether the coverage information should be collected while executing the test
	collectCoverage: true,

	// An array of glob patterns indicating a set of files for which coverage information should be collected
	collectCoverageFrom: [
		'src/*.{js,ts}',
		'src/**/*.{js,ts}'
	],

	// The directory where Jest should output its coverage files
	coverageDirectory: 'coverage',

	// An array of regexp pattern strings used to skip coverage collection
	coveragePathIgnorePatterns: [
		'/node_modules/',
		'/lib/'
	],


	// An object that configures minimum threshold enforcement for coverage results
	coverageThreshold: {
		'global': {
			'branches': 90,
			'functions': 95,
			'lines': 95,
			'statements': 95
		},
	},


	// An array of file extensions your modules use
	moduleFileExtensions: [
		'js',
		'json',
		'jsx',
		'ts',
		'tsx',
		'node'
	],

	// The test environment that will be used for testing
	testEnvironment: 'node',

	// The glob patterns Jest uses to detect test files
	// testMatch: [
	// 	"(/__tests__/**/|\\.(test|spec))\\.(ts|tsx|js)$"
	// ],


	// A map from regular expressions to paths to transformers
	transform: {
		'.(ts|tsx)': 'ts-jest'
	},

	// An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
	transformIgnorePatterns: [
		'/node_modules/',
		'/lib/'
	],

};
