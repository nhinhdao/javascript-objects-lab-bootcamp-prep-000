var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value){
   var newobj = obj;
   Object.assign(newobj, obj, {[key]:value})
   return newobj;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
   Object.assign(obj, {[key]:value})
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
