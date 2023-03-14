// Реалізувати рекурсивну функцію, яка зводить число в ступінь

function power(num, degree) {
	if (degree === 0) {
		return 1;
	}
	return num * power(num, degree - 1);
}
console.log(power(5, 3));
