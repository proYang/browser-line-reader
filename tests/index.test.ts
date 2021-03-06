import { default as LineReader } from '../src/index';
import standardFile from './input/standard';
import emptyFile from './input/empty';
import smallFile from './input/small';

test('reads the correct number of lines', () => {
	let subject : LineReader = new LineReader(standardFile);
	return subject.readLines().then((numLines: number) => {
		expect(numLines).toBe(21251);
	});
});

test('accepts an empty file', () => {
	let subject : LineReader = new LineReader(emptyFile);
	return subject.readLines().then((numLines: number) => {
		expect(numLines).toBe(0);
	});
});

test('reads lines correctly', () => {
	let subject : LineReader = new LineReader(smallFile);
	const lines : string[] = [
		'7,6,1',
		'0 0 4 .',
		'1 0 3 .',
		'1 0 5 .',
		'1 0 4 .',
		'2 0 6 .',
		'2 0 4 .',
	];
	const readLines : string[] = [];
	return subject.readLines((line: string) => {
		readLines.push(line);
	}).then(() => {
		readLines.forEach((readLine, index) => {
			expect(readLine).toEqual(lines[index]);
		});
	});
});
