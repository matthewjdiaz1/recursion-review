// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if(typeof obj === 'function') return '{}';
  if(obj === undefined) return '{}';
  if(typeof obj === 'number' || typeof obj === 'boolean') {
    return String(obj);
  }
  if(typeof obj === 'string') return '"' + obj + '"';
  if(obj === null) return 'null';
  
  if(Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    } else {
      var arr = [];
      obj.forEach((i) => arr.push(stringifyJSON(i)));
      return '[' + arr + ']';
    }
  }
  
  if(typeof obj === 'object' && Object.keys(obj).length === 0) return '{}';
  var output = '';
  for(var key in obj){
    if(typeof obj[key] === 'undefined' || typeof key === 'function'){
      return '{}';
    }
    output += `${key}":${stringifyJSON(obj[key])},"`; 
  }
  output = output.slice(0,-2);
  return `{"` + output + `}`;
};
