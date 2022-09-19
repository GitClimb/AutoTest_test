import capitalize from '../src/capitalize.js';

if (capitalize('hello') !== 'Hello') {
	throw new Error('Boom!');
}
if (capitalize('') !== '') {
	throw new Error('Boom!');
}

console.log('Все тесты пройдены');
