import { expect } from "vitest";
import { isValidPassword, isValidEmail } from "./validators";

describe('@validators', () => {
	describe('isValidPassword', () => {
		it.each([
			['test', false],
			['alongertest', false],
			['Test', false],
			['test1', false],
			['Test1', false],
			['test!', false],
			['Test!', false],
			['Test1!', false],
			['ALongerTest', false],
			['ShortTest1!', false],
			['ALongerTest1!', true]
		])(`'%s is valid? %s`, (password, isValid) => {
			expect(isValidPassword(password)).toBe(isValid);
		})
	});

	describe('isValidEmail', () => {
		it.each([
			['test', false],
			['test@', false],
			['test@test', false],
			['@test', false],
			['@test.test', false],
			['test@test.test$$', false]
			['test@test.test', true]
			['test1@test.test', true]
			['test$123@test.test', true]
			['test$123@test.test', true]
		])(`'%s is valid? %s`, (email, isValid) => {
			expect(isValidEmail(email)).toBe(isValid);
		})
	});
});