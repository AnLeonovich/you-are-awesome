// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {
    return propertyName;
};

const createNotEnumerableProperty = (propertyName) => {
    return Symbol(propertyName);
};

const createProtoMagicObject = () => {
    var magicObject = function(){};
    magicObject.prototype = magicObject.__proto__;
    return magicObject;
};

var counter = 0;
const incrementor = () => {
	incrementor.toString = function(){
        return counter;
    };
    counter++;
    return incrementor;
};

var counter2 = 1;
const asyncIncrementor = () => {
    var f = new Promise((resolve) => {
	resolve (counter2++);	
    });
    return f;
};

const createIncrementer = () => {
    var obj = {
        value: 0,

        [Symbol.iterator]() {
            return this;
        },

        next() {
            this.value++;
            return this;
        }
    }
    return obj;
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
	return new Promise(function (resolve) {
    setTimeout(function(){resolve(param);} , 1000);
});
};

const getDeepPropertiesCount = (obj) => {
	var counter = 0;
	count(obj);
	function count(obj){
        for(var key in obj){
            counter++;
                if(obj[key] instanceof Object){
                    count (obj[key]);
                }
        }
    return counter;
}
return counter;
};

const createSerializedObject = () => { 
	return null; 
};

const sortByProto = (args) => {
    var arr = [];  
    var k, counter;   
    for(var i = 0; i < args.length; i++){
        k = args[i].__proto__;
        counter = 0;
        while (k !== Object.prototype){
            k = k.__proto__;
            counter++
        }
        arr[counter] = args[i];  
    }
    
    for(i =0; i<arr.length; i++){
        if(!(i in arr)){
            arr.splice(i, 1);
            i--;
        }
    }
    arr.reverse();  
    return arr;
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
