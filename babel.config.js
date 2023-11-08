module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['.'],
				extensions: [
					'.ios.ts',
					'.android.ts',
					'.ts',
					'.ios.tsx',
					'.android.tsx',
					'.tsx',
					'.jsx',
					'.js',
					'.json',
				],
				alias: {
					application: './src/application',
					features: './src/features',
					services: './src/services',
					types: './src/types',
					ui: './src/ui',
					assets: './src/assets',
				},
			},
		],
		'react-native-reanimated/plugin',
	],
};
