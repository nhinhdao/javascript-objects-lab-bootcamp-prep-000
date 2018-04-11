var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value){
   var newobj = obj;
   newobj.assign({}, obj, {[key]:value})
   return newobj;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
   obj.assign(obj, {[key]:value})
   return obj;
}

function deleteFromObjectByKey(obj, key){
   var newObj = obj;
   delete newObj[key];
   return newObj;
}

function destructivelyDeleteFromObjectByKey(obj, key){
   delete obj[key];
   return obj;
}
