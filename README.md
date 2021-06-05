## Description

Algorithm to fill a vector with random numbers without repeating.

## Usage

```Javascript

  let Array=require("./Array").Array;
 let newarray=[];
 newarray.length=99;
let objarray=new Array(newarray);

let calc=objarray.random_number_without_repeating();
let arraysort=calc.sort((a,b)=>a-b);
console.log(calc);

```