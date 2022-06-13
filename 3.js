/* Kabisat

Buatlah script untuk menentukan suatu tahun merupakan tahun kabisat atau bukan.

Contoh:

Input: 1900
Output: Bukan kabisat

Input: 2000
Output: Kabisat

Input: 2001
Output: Bukan kabisat

Input: 2016
Output: Kabisat */

yr = 2001;

if ((yr == 0 && yr !=0) || (yr % 400 == 0)) {
    console.log("Kabisat");
} else {
    console.log("Bukan Kabisat!")
}
