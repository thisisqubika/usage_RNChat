import React from 'react';
import {
	Alert,
	AlertButton,
	DevSettings,
	StyleSheet,
	View,
} from 'react-native';

import { SettingsScreenProps } from 'application/navigation/types';
import { spacing } from 'application/theme';
import {
	english,
	getCurrentLanguage,
	setLanguage,
	spanish,
	strings,
} from 'services/localization';
import { Button } from 'ui';

const styles = StyleSheet.create({
	container: {
		padding: spacing.xl,
	},
});

const Settings: React.FC<SettingsScreenProps> = () => {
	const currentLanguage = getCurrentLanguage();
	const newLanguageOption = currentLanguage === english ? spanish : english;

	const setLanguageWithAlert = async () => {
		const restartButton: AlertButton = {
			text: strings.settings.restart,
			onPress: () => {
				setLanguage(newLanguageOption);
				DevSettings.reload();
			},
		};
		const cancelButton: AlertButton = {
			text: strings.settings.cancel,
			onPress: () => null,
			style: 'cancel',
		};

		Alert.alert(
			strings.settings.appWillRestart,
			'',
			[restartButton, cancelButton],
			{ cancelable: true },
		);
	};

	return (
		<View style={styles.container}>
			<Button
				title={strings
					.formatString(strings.settings.switchTo, newLanguageOption)
					.toString()}
				onPress={setLanguageWithAlert}
			/>
		</View>
	);
};

export default Settings;
