var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
   var newobj = obj.assign({}, obj, {[key]:value})
   return newobj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
   obj.assign(obj, {[key]:value})
   return obj;
}

function deleteFromObjectByKey(object, key){
   var newObj = obj;
   delete newObj[key];
   return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key){
   delete obj[key];
   return obj;
}
