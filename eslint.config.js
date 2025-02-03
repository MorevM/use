import { combine, defineConfiguration, defineIgnores } from '@morev/eslint-config';

export default combine([
	defineIgnores(),
	defineConfiguration('javascript'),
	defineConfiguration('node'),
	defineConfiguration('typescript'),
	defineConfiguration('json'),
	defineConfiguration('markdown', {
		overrides: {
			'markdownlint/md013': 'off',
			'markdownlint/md033': 'off',
		},
	}),
]);
