//定义节点
function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}
//显示节点数据
function show() {
    return this.data;
}

//定义二叉树类
function BT() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
}

function insert(data) {
    var n = new Node(data, null, null);
    if (this.root == null) {
        this.root = n;
    }
    else {
        var current = this.root;
        var parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = n;
                    break;
                }
            }
            else {
                current = current.right;
                if (current == null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

function inOrder(node) {
    if (!(node == null)) {
        inOrder(node.left);
        console.log(node.show() + " ");
        inOrder(node.right);
    }
}

var nums = new BT();
nums.insert(56);
nums.insert(22);
nums.insert(81);
nums.insert(10);
nums.insert(30);
nums.insert(77);
nums.insert(92);

console.log('中序:')
inOrder(nums.root);
console.log('------------------')
function preOrder(node) {
    if (!(node == null)) {
        console.log(node.show() + " ");
        preOrder(node.left);
        preOrder(node.right);
    }
}
console.log('前序:')
preOrder(nums.root)
console.log('---------------------')
console.log('后续')
function postOrder(node) {
    if (!(node == null)) {
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show() + " ");
    }
}
postOrder(nums.root)


// 最小值 
function getMin() {
    var current = this.root;
    while (!(current.left == null)) {
        current = current.left;
    }
    return current.data;
}

// 最大值 
function getMax() {
    var current = this.root;
    while (!(current.right == null)) {
        current = current.right;
    }
    return current.data;
}

//查找给定值 
function find(data) {
    var current = this.root;
    while (current != null) {
        if (current.data == data) {
            return current;
        }
        else if (data < current.data) {
            current = current.left;
        }
        else {
            current = current.right;
        }
    }
    return null;
}
