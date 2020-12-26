
function balancedBraces(str) {
  arrStr = str.split('');
  let record = new Array();
  
  for(const el of arrStr)
  {
    switch (el) {
      case '[':
        record.push('[');
        break;
      case '{':
        record.push('{');
        break;
      case '(':
        record.push('(');
        break;
      case ']':
        if(record.pop() !== '['){
            console.log(false);
            return;
        }
        break;
      case '}':
        if(record.pop() !== '{'){
          console.log(false);
          return;
        }
        break;
      case ')':
        if(record.pop() !== '('){
          console.log(false);
          return;
        }
        break;
      default:
        break;
    }
  }
  if(record.length>0){
    console.log(false);
    return;
  }
  else{
    console.log(true);
  }
}

// balancedBraces('for(i=0;i<x[i];i++){if(x[i]<10){b++;}else{b+=10;}}');
// balancedBraces('for(i=0;i<x[i];i++){if(x[i]<10){b++;}else{b+=10;}');
// balancedBraces('for(i=0;i<x[[i];i++){if(x[i]<10){b++;}else{b+=10;}}');
// balancedBraces('for(i=0;i<x[i];i++){if(x[i]<10{b++;}else{b+=10;}}');
// balancedBraces('for[(i=0;i<xi];i++){if(x[i]<10){b++;}else{b+=10;}}');
// balancedBraces('for(i=0;i<x[i];i++)({ifx[i]<10){b++;}else{b+=10;}}')
// export {
//   balancedBraces,
// };
