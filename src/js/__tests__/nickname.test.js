import Validator from '../nickname';

test('совпадение шаблона', () => {
  const name = 'a123_adc-b';
  const validator = new Validator();
  const validateNameStatus = validator.validateUsername(name);

  expect(validateNameStatus).toBeTruthy();
});

test('число в начале строки', () => {
  const name = '1abc';
  const validator = new Validator();
  const validateNameStatus = validator.validateUsername(name);

  expect(validateNameStatus).toBeFalsy();
});

test('число в конце строки', () => {
  const name = 'abc1';
  const validator = new Validator();
  const validateNameStatus = validator.validateUsername(name);

  expect(validateNameStatus).toBeFalsy();
});

test('_ в начале строки', () => {
  const name = '_abc';
  const validator = new Validator();
  const validateNameStatus = validator.validateUsername(name);

  expect(validateNameStatus).toBeFalsy();
});

test('_ в конце строки', () => {
  const name = 'abc_';
  const validator = new Validator();
  const validateNameStatus = validator.validateUsername(name);

  expect(validateNameStatus).toBeFalsy();
});

test('- в начале строки', () => {
  const name = '-abc';
  const validator = new Validator();
  const validateNameStatus = validator.validateUsername(name);

  expect(validateNameStatus).toBeFalsy();
});

test('- в конце строки', () => {
  const name = 'abc-';
  const validator = new Validator();
  const validateNameStatus = validator.validateUsername(name);

  expect(validateNameStatus).toBeFalsy();
});

test('четыре цифры в строке - fail', () => {
  const name = 'a1234b';
  const validator = new Validator();
  const validateNameStatus = validator.validateUsername(name);

  expect(validateNameStatus).toBeFalsy();
});

test('! в строке', () => {
  const name = 'a1b!cd';
  const validator = new Validator();
  const validateNameStatus = validator.validateUsername(name);

  expect(validateNameStatus).toBeFalsy();
});

test('ц в строке', () => {
  const name = 'ab12ц3d';
  const validator = new Validator();
  const validateNameStatus = validator.validateUsername(name);

  expect(validateNameStatus).toBeFalsy();
});
