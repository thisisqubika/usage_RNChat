module.exports = {
	parser: '@typescript-eslint/parser',
	env: {
		es2021: true,
	},
	extends: [
		'@react-native',
		'plugin:react/recommended',
		'plugin:react-native/all',
		'plugin:@typescript-eslint/recommended',
		'plugin:@tanstack/eslint-plugin-query/recommended',
		'plugin:prettier/recommended',
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
	plugins: [
		'react',
		'react-native',
		'@tanstack/query',
		'@typescript-eslint',
		'jest',
	],
	rules: {},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
