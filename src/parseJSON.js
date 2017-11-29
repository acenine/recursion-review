// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
let parseJSON = function(json) {
  let toParse = json.slice();
  let chop = function(num) {
    toParse = toParse.slice(num, toParse.length);
  };
  let discardWhitespace = function() {
    toParse.trim();
  };
  let checkFirst = function() {
    discardWhitespace();
    return toParse[0];
  };
  let skim = function(num) {
    return toParse.slice(0, num);
  };
  let determine = function() {
    let first = checkFirst();
    if (skim(4) === 'true') {
      return makeTrue();
    }
    else if (skim(5) === 'false') {
      return makeFalse();
    }
    else if (skim(4) === 'null') {
      return makeNull();
    }
    else if (first === '[') {
      return makeArray();
    }
    else if (first === '{') {
      return makeObject();
    }
    else if (first === '"') {
      return makeString();
    }
    else if (Number.isInteger(first) || first === '-') {
      return makeNumber();
    }
    else {
      throw SyntaxError('no');
    }
  };
  let makeArray = function() {
    chop(1);
    let newarr = [];
    if (checkFirst === ']') {
      return newarr;
    }
    newarr.push(determine());
    if (checkfirst === ',') {

    }

    while (checkFirst) {};



  };
  let makeString = function() {};
  let makeObject = function() {};
  let makeTrue = function() {
    chop(4 );
    return true;
  };
  let makeFalse = function() {
    chop(5);
    return false;
  };
  let makeNull = function() {
    chop(4);
    return null;
  };

  determine();
};
