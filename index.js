var recipes = new Object()

function updateObjectWithKeyAndValue(obj, key, value){
  return Object.assign({}, obj, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  var obj = (obj['key'] = value);
  return obj;
}


function deleteFromObjectByKey(obj, key){
  var obj = new Object()
  var newObj = Object.assign({}, obj)
  return obj
}

function destructivelyDeleteFromObjectByKey(obj, key){
  var obj = new Object()
  var newObj = delete obj.key
  delete obj.key
  return obj
}
