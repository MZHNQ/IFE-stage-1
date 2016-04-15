// Node
function Node (data) {
  this.data     = data;
  this.parent   = null;
  this.children = [];
}

/*===========
 *
 *  Tree
 *
 *===========
 *
 * Methods:
 *
 *  traverseDF( callback )
 *  traverseBF( callback )
 *  contains( data, traversal )
 *  add ( child, parent )
 *  remove ( node, parent )
 *
 */

function Tree (data) {
  var node = new Node(data);
  this._root = node;
}

Tree.prototype.traverseDF = function (callback) {
  (function recurse (currentNode) {
    currentNode.children.forEach(function (el) {
      recurse(el);
    })
    callback(currentNode);
  })(this._root);
};

Tree.prototype.traverseBF = function (callback) {
  var queue = [];
  queue.push(this._root);
  currentTree = queue.shift();

  while (currentTree) {
    currentTree.children.forEach( function (el) {
      queue.push(el);
    });
    callback(currentTree);
    currentTree = queue.shift();
  }
};

Tree.prototype.contains = function (callback, traversal) {
  traversal.call(this, callback);
};

Tree.prototype.add =function (data, toData, traversal) {
  var child    = new Node(data),
      parent   = null,
      callback = function (node) {
        if (node.data === toData) {
          parent = node;
        }
      };
      this.contains(callback, traversal);
      if (parent) {
        parent.children.push(child);
        child.parent = parent;
      } else {
        throw new Error('Cannot add node to a non-existent parent.');
      }
};

Tree.prototype.remove = function (data, fromData, traversal) {
  var tree          = this,
      parent        = null,
      childToRemove = null,
      index;

  var callback = function (node) {
    if (node.data === fromData) {
      parent = node;
    }
  }

  function findIndex (arr, data) {
    var index;
    arr.forEach(function (el, i) {
      if (el.data === data) index = i;
    })
    return index;
  }

  this.contains(callback, traversal);

  if (parent) {
    index = findIndex(parent.children, data);
    if (index === undefined) {
      throw new Error('Node to remove does not exist.');
    } else {
      childToRemove = parent.children.splice(index, 1);
    }
  } else {
    throw new Error('Parent does not exist.');
  }

  return childToRemove;
}



/*===========
 *
 *  Task
 *
 *===========
 */

var tree = new Tree('one');
tree.add('two', 'one', tree.traverseBF);
tree.add('three', 'one', tree.traverseBF);
tree.add('four', 'one', tree.traverseBF);
tree.add('five', 'two', tree.traverseBF);
tree.add('six', 'two', tree.traverseBF);
tree.add('seven', 'two', tree.traverseBF);
tree.add('eight', 'four', tree.traverseBF);
tree.add('nine', 'four', tree.traverseBF);

tree.traverseBF(function (node) {
  console.log(node.data);
});

var states = [];
var timer = null;

function render () {
  var container = document.querySelector('.container');

  tree.traverseBF(function (node) {
    node.html = document.createElement('div');
    node.html.innerHTML = node.data;
    if (node.parent) {
      node.parent.html.appendChild(node.html);
    } else {
      node.html.classList.add('root');
    }
  });

  container.appendChild(tree._root.html);
}

function draw () {
  var pre;
  function stop () {
    pre.html.classList.remove('hi');
    pre = undefined;
    clearInterval(timer);
    timer = null;
  }
  timer = setInterval( function () {
    if (!states.length) {
      stop();
    } else {
      if (pre) {
        pre.html.classList.remove('hi');
      }
      pre = states.shift();
      pre.html.classList.add('hi');
    }
  }, 500);
}

function deal (traversal) {
  return function () {
    if (timer) return alert('动画正在进行中');
    traversal.call(tree, function (node) {
      states.push(node);
      console.log(node.data);
    });
    draw();
  }
}

function initEvent () {
  var dfsBtn = document.querySelector('#dfs');
  var bfsBtn = document.querySelector('#bfs');

  dfsBtn.addEventListener('click', deal(tree.traverseDF));
  bfsBtn.addEventListener('click', deal(tree.traverseBF));
}

function init () {
  render();
  initEvent();
}

init();