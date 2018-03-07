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

counter = 0;
const asyncIncrementor = () => {
    return new Promise((resolve) => {
	resolve (counter++);	
    });
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
