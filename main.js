/*
This program uses basic principles of Jackson's structured programming to convert a number from the decimal to the binary number system. The program works by creating an empty string as a result beforehand,
into which the converted number will then be written. At the beginning of the program there is a selection in case the input number is 0. Then, using while loop, the program divides the input number by two
and the remainder (1 or 0) is written into the result. Then the input number is divided by two and rounded down. The loop repeats until the input number is 0.
When that happens, the loop ends and the converted number is returned.
*/
export function main(inputNumber, inputNumberSystem, outputNumberSystem) {
let n = Number(inputNumber);
let dtoOut = "";

if (n === 0) {
    dtoOut = "0";
}

else {
    while (n > 0) {
        let remainder = n%2;
        if (remainder === 0) {
           dtoOut = "0" + dtoOut;
        } else {
            dtoOut = "1" + dtoOut;
        }
        n = Math.floor (n / 2);
    }
}
  return dtoOut;
}
export function permittedInputSystems() {
	return [10];
}
export function permittedOutputSystems() {
	return [2];
}
