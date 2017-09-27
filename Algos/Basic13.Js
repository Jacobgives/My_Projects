function print1_255(){
for(var i=0; i < 256; i++){
  console.log(i)
  }
}
function PrintOdds1_255(){
for(var i = 1; i < 256; i++)
{
if(i%2!==0){
console.log(i);
}
}
}
function PrintIntsAndSum(){
  var sum = 0;
  for(var i = 1; i < 256; i++){
    console.log(i);
    sum = sum + i;
    console.log(sum);
  }
}
function PrintArrVals(arr){
for(var i =0; i<arr.length; i++){
  console.log(arr[i]);
}
}
function PrintMaxofArr(arr){
  var max =arr[0];
  for(var i = 1; i <arr.length; i++)
  {
    if(arr[i] > max){
      max =arr[i];
      console.log(max);
    }
  }
}
function PrintAverageOfArray(arr){
  var sum = 0;
  for(var i=0; i<arr.length; i++){
    sum = sum + arr[i];
  }
  var avg = sum / arr.length;
  console.log(avg);
}
function ReturnOddsArr(){
var arr =[];
for(var i = 0; i <= 255; i++)
{
if(i%2!==0){
arr.push(i);
}
}
console.log(arr)
}

function squareArrayVals(arr){
  for(var i=0; i<arr.length; i++){
    arr[i] = arr[i] * arr[i];
  }
  console.log(arr);
}
function ReturncountgtY(arr, y)
{
  var count=0;
  for(var i =0; i <arr.length; i++)
  {
    if(arr[i] > y)
    {
      count = count + 1;
    }
  }
  console.log(count);
}
function ZeroOutArrayNegativeVals(arr){
  for(var i=0; i <arr.length; i++){
    if(arr[i] < 0){
      arr[i] = 0;
    }
  }
      console.log(arr);
}
function MaxMinAvg(arr){
  var Arr2=[];
Arr2[0]= arr[0];
Arr2[1]= arr[0];
Arr2[2]= arr[0];
for(i=1; i < arr.length;i++ )
{
  if(Arr2[0] < arr[i]){
  Arr2[0] = arr[i];
  }
  if(Arr2[1] > arr[i]){
  Arr2[1]=arr[i];
  }
  Arr2[2] += arr[i];
}
Arr2[2]= Arr2[2]/arr.length;
console.log(Arr2);
}
function shiftArrayValsLeft(arr){
  for(var i = 1; i < arr.length; i++){
    arr[i - 1] = arr[i];
  }
  arr[arr.length-1]= 0;
  console.log(arr);
}
function swapoutnegs(arr)
{
  for(i = 0; i < arr.length;i++)
  {
    if(arr[i]<0)
    {
      arr[i]=0;
    }
  }
  console.log(arr);
}
console.log(swapoutnegs([-20, 90, -30, 45]));
