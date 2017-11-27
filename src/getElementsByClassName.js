// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
let getElementsByClassName = function(className) {
  let results = [];
  let parent = document.body;
  let recurser = function(root) {
    let children = root.children;
    if (root.classList.contains(className)) {
      results.push(root);
    }
    for (let i = 0; i < children.length; i++) {
      recurser(children[i]);
    }
  }
  recurser(parent);
  return results;
};
