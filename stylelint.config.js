module.exports = {
	extends: [
		'stylelint-config-standard-scss',
		'stylelint-order-config-standard',
	],
	plugins: [
		'stylelint-order',
	],
	rules: {
		'selector-class-pattern': null,
		'scss/dollar-variable-pattern': '[a-zA-Z0-9]',
		'scss/at-mixin-pattern': '[a-zA-Z0-9]',
		'indentation': 'tab',
		'color-hex-case': 'lower',
		'no-duplicate-selectors': null,
		'no-descending-specificity': null,
		'scss/at-extend-no-missing-placeholder': null,
		'keyframes-name-pattern': null,
		'property-no-vendor-prefix': null,
		'selector-no-vendor-prefix': null,
		'media-feature-name-no-vendor-prefix': null,
		'at-rule-no-vendor-prefix': null,
		'value-no-vendor-prefix': null,
	},
}
