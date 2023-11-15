const inputNum = document.getElementById("inputNum");
const searchBtn = document.getElementById("searchBtn");
const totalNum = document.getElementById("totalNum");
const showNum = document.getElementById("showNum");

//預設輸入數字
let x = 0;
let y= 0;
let arr=[ ];
let num=0;

searchBtn.addEventListener("click",function(){

    x = parseInt(inputNum.value);
//被二整除，不為質數
    for (let i =2; i<x; i++){
        for(y =2; y<=i; y++){
            if(i%y==0){
                break;
        }
    }
//二為質數
    if(i==y){
        console.log(y)
        arr.push(y)
        num++;
}
}
console.log(arr);
totalNum.innerText=num;
showNum.innerText=arr.join(" , ");
})

