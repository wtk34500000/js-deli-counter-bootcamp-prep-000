
var counter =0;

const takeANumber = (katzDeliLine) => {
  counter++;
  katzDeliLine.push(counter);
  return `Welcome, customer. You are number ${counter} in line.`;
}


const nowServing = (katzDeliLine) => {
  if(katzDeliLine.length === 0){
    return `There is nobody waiting to be served!`;
  }else{
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

const currentLine = (katzDeliLine) => {
  var message=[];
  if(katzDeliLine.length === 0){
     return `The line is currently empty.`;
  }else{
    for(let i = 0; i < katzDeliLine.length; i++){
       message.push(` ${(i+1)}. ${katzDeliLine[i]}`);
     }
     return `The line is currently:${message}`;
  }
}