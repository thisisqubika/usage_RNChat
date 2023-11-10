module.exports = {
	preset: 'react-native',
	setupFilesAfterEnv: ['./src/testing/jest.setup.ts'],
	coverageReporters: ['text'],
	transformIgnorePatterns: [
		'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|rollbar-react-native|@fortawesome|@react-native|@react-navigation)',
	],
};
