const arrayCubeRootToJson = arr => {
    let result = new Array();
    if(arr.length==0)
        throw "";
    
    arr.forEach(element => {
        if(isNaN(element)){
            throw "";
        }
        else{
            result.push(element.toString(), Math.cbrt(element));
        }
    });
    console.log(result);
};

//arrayCubeRootToJson([125,64,8]);
module.exports =  arrayCubeRootToJson;
