module.exports = {
	parser: '@typescript-eslint/parser',
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'@react-native',
		'plugin:react/recommended',
		'plugin:react-native/all',
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'react-native', '@typescript-eslint', 'jest'],
	rules: {},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
