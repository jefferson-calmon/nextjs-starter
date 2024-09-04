/** @type {import('stylelint').Config} */
module.exports = {
	extends: [
		// 'stylelint-config-standard',
		'stylelint-config-standard-scss',
		'stylelint-config-clean-order',
	],
	rules: {
		'no-duplicate-selectors': true,
		'selector-class-pattern': null,
		'selector-id-pattern': null,
	},
};
