
// export {
//   forEach,
//   map,
//   filter,
//   reduce,
// }

Array.prototype.extendedforEach = function(method){
  for(let i = 0 ; i<this.length; i++){
    method(this[i], i, this);
  }
}

// const arrStr = [1,2,3,3,1];
// arrStr.extendedforEach(x=>console.log(x));

Array.prototype.extendedMap = function(method){
  let returnArr = new Array();
  for(let i=0;i<this.length;i++){
    returnArr.push(method(this[i],i,this));
  }
  return returnArr;
}

// const arrStr = [1,2,3,3,1];
// console.log(arrStr.extendedMap(x=>x));

Array.prototype.extendedFilter = function(method){
  let result = new Array();
  for(let i=0;i<this.length;i++){
    if(method(this[i],i,this)){
      result.push(this[i]);
    }
  }
  return result;
}

// const arrStr = [1,2,3,3,1];
// console.log(arrStr.extendedFilter(x=>x==3));

Array.prototype.extendedReduce = function(method, initialVal){
  let accumulate = initialVal;
  for(let i=0;i<this.length;i++){
    if(accumulate != undefined){
      accumulate = method.call(undefined,accumulate, this[i],i,this);
    }
    else{
      accumulate = this[i];
    }
  }
  return accumulate;
}
// const arrStr = [1,2,3,4];
// const reduce = (acc, currentVal) => acc + currentVal;
// console.log(arrStr.extendedReduce(reduce,5));