/* Grade

Buatlah script untuk menentukan suatu nilai dengan ketentuan berikut:

1) Jika nilai yang dimasukkan lebih besar dan sama dengan 90 maka output yang keluar adalah __A__.
2) Jika nilai yang dimasukkan lebih besar dan sama dengan 80; dan lebih kecil dan sama dengan 89, maka output yang keluar adalah __B__.
3) Jika nilai yang dimasukkan lebih besar dan sama dengan 70; dan lebih kecil dan sama dengan 79, maka output yang keluar adalah __C__.
4) Jika nilai yang dimasukkan lebih besar dan sama dengan 60; dan lebih kecil dan sama dengan 69, maka output yang keluar adalah __D__.
5) Jika nilai yang dimasukkan lebih kecil dan sama dengan 59 maka output yang keluar adalah __E__.

Contoh:

Input: 30
Output: E

Input: 75
Output: C */

const grade = 90;

if (grade >= 90) {
    console.log("A");
} else if (grade >= 80 && <= 89) {
    console.log("B");
} else if(grade >= 70 && <= 79) {
    console.log("C");
} else if (grade >= 60 && <= 69) {
    console.log("D");
} else {
    console.log("E")
}