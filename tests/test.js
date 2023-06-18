import cn from './../dist/index.js';

import {expect, test} from 'vitest';

const isTrue = () => true;

test('mxcn combined', () => {
	// Example: Combined, any example of tailwind-merge or clsx works.
	expect(
		cn(
			'px-2 py-1 bg-red hover:bg-dark-red',
			null,
			true && 'p-3 bg-[#B91C1C]'
		)
	).toBe('hover:bg-dark-red p-3 bg-[#B91C1C]');

	// Example: tailwind-merge
	expect(cn('px-2 py-1 bg-red hover:bg-dark-red', 'p-3 bg-[#B91C1C]')).toBe(
		'hover:bg-dark-red p-3 bg-[#B91C1C]'
	);

	// Example: clsx
	// Strings (variadic)
	expect(cn('foo', true && 'bar', 'baz')).toBe('foo bar baz');

	// Objects
	expect(cn({foo: true, bar: false, baz: isTrue()})).toBe('foo baz');

	// Objects (variadic)
	expect(cn({foo: true}, {bar: false}, null, {'--foobar': 'hello'})).toBe(
		'foo --foobar'
	);

	// Arrays
	expect(cn(['foo', 0, false, 'bar'])).toBe('foo bar');

	// Arrays (variadic)
	expect(
		cn(['foo'], ['', 0, false, 'bar'], [['baz', [['hello'], 'there']]])
	).toBe('foo bar baz hello there');

	// Kitchen sink (with nesting)
	expect(
		cn(
			'foo',
			[1 && 'bar', {baz: false, bat: null}, ['hello', ['world']]],
			'cya'
		)
	).toBe('foo bar hello world cya');
});

test('mxcn tailwind-merge', () => {
	// Example: tailwind-merge
	expect(cn('px-2 py-1 bg-red hover:bg-dark-red', 'p-3 bg-[#B91C1C]')).toBe(
		'hover:bg-dark-red p-3 bg-[#B91C1C]'
	);
});
