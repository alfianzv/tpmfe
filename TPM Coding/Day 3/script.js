console.log("Hello World");
/* alert("Hello World"); */
document.write("Hello World");
document.getElementById("halodunia").innerHTML = "Halo Dunia";

var d = 1; //bisa diakses dimana saja
let b = 1; //harus diinisialisasi variable, baru bisa diakses
const e = 3; //variable konstanta

b = 2;
/* console.log(b); */

/* alert();
prompt("Siapa namamu?");
confirm("Are you sure?"); */

d = 3 + "10";   

console.log(d);

var x = 11;

if (x === 11) {
    console.log("true");
} else {
    console.log("false");
}

/* switch (key) {
    case value:
        
        break;

    default:
        break;
} */

perbandingan(x);

function perbandingan(x) {
    x === 11 ? console.log(true) : console.log(false);
}

var x = 11;

x -= 1;

console.log(x);

/* for (let i = 0; i < 10; i++) {
    console.log(i);
} */

/* while () {
    
}

do {
    
} while (condition); */

array = [1, 2, 3, 4, 5];

array.forEach((i) => {
    console.log(i);
});

/* funciton asd() {

} */

var m = () => {
    console.log("ada");
};

var v = 10;

avanza = {
    merek: "toyota",
    tahun: 2005,
};


console.log(avanza.merek);

