const plugins = [
	'postcss-at-rules-variables',
	[
		'postcss-import',
		{
			addModulesDirectories: ['libs/shared/styles/src'],
		},
	],
	'postcss-each',
	'postcss-for',
	'postcss-conditionals',
	'postcss-easing-gradients',
	'postcss-custom-selectors',
	'postcss-custom-media',
	'postcss-nested-ancestors',
	'postcss-nested',
]

module.exports = { plugins }
