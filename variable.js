
//print (1-2-3-4-5-6-7-8-9-10)
var num = 1;

for (i = 2; i <= 10; i++) {

        num = num + "-" + i;

}

console.log(num);


//sum of 1to 30 number
var sum = 0;

for (i = 0; i <= 30; i++) {
        sum += i;
}
console.log(sum);



//print number pattern1
var n = 5;
var str = "";
var count = 1;
for (i = 1; i <= n; i++) {
        for (j = i; j >= 1; j--) {

                str += j;
                //count++;

        }
        str += "\n";
}

//pattern2
for (i = 0; i <= n; i++) {
        for (j = 1; j <= i; j++) {
                str += "*";
        }
        str += "\n";
}


//pattern3
for (i = 0; i <= n; i++) {
        for (j = 1; j <= i; j++) {
                str += "*";
        }
        str += "\n";
}
for (i = 0; i <= n; i++) {
        for (j = 1; j <= n - i + 1; j++) {
                str += "*";
        }
        str += "\n";
}



//pattern4
count = 1;
for (i = 1; i <= n; i++) {
        for (j = 1; j <= i; j++) {

                str += count;
                count++;


        }
        str += "\n";
}

//pattern5
for (i = 1; i <= n; i++) {
        for (j = 1; j <= n - i + 1; j++) {

                str += j;


        }
        str += "\n";
}

console.log(str);




//sum of odd number from 1 to 100
var n = 100;
var sum = 0;

for (i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
                sum = sum + i;
        }
}
console.log(sum);


//array
let styles = ['janvi', 'jagrati'];
console.log(styles);
console.log(styles.push('khushi'));
console.log(styles);
console.log(styles[1] = 'rutvi');
console.log(styles);
console.log(styles.shift());
console.log(styles);
console.log(styles.unshift('a', 'b'));
console.log(styles);
console.log(styles.pop());
console.log(styles);


//setinterval

function printNumbers(from, to) {
        let numbers = from;

        let time = setInterval(function () {
                console.log(numbers);
                if (numbers == to) {
                        clearInterval(time);
                }
                numbers++;
        }, 1000);
}
printNumbers(5, 10);



//classes

class User {

        constructor(name) {
                this.name = name;
        }

        sayHi() {
                console.log(this.name);
        }

}


let user = new User("Janvi");
user.sayHi();




