// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// you should use document.body, element.childNodes, and element.classList

// But instead we're going to implement it from scratch:

  // console.log(document.getElementsByClassName(className))

  // console.log(document.body)
  // console.log(document.childNodes)
  // console.log(document.classList);
  // If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// you should use document.body, element.childNodes, and element.classList

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
    console.log(document.getElementsByClassName(className))
    var output = [];
  
    function getNodes(node) {
      if (node.classList) {
        if (node.classList.contains(className)) {
          output.push(node);
        }
        if (node.childNodes){
          node.childNodes.forEach((i) => getNodes(i));
        }
      }
    }
    getNodes(document.body);
    return output;
  };
  