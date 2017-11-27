// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

let stringifyJSON = function(obj) {
  // your code goes here
  let type = typeof obj;
  if (obj === undefined || type === 'function') {
    return undefined;
  }
  if (obj === null) {
    return 'null';
  } 
  else if (type === 'string') {
    return '"' + obj + '"';
  } 
  else if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    }
    let string = '[';
    for (let i = 0; i < obj.length; i++) {
      string += stringifyJSON(obj[i]) + ',';
    }
    string = string.slice(0, string.length - 1);
    return string + ']';
  }
  else if (type === 'object') {
    
    if (Object.keys(obj).length === 0) {
      return '{}';
    }
    let string = '{';
    for (let key in obj) {
      let value = stringifyJSON(obj[key]);
      if (value === undefined) {
        continue;
      }
      string += '"' + key + '"' + ':' + value + ',';
    }
    if (string[string.length - 1] === ',') {
      string = string.slice(0, string.length - 1);
    }
    return string + '}';
  }
  return obj.toString();
};
