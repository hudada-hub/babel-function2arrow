// 测试用例
function add(a, b) {
    return a + b;
}

const multiply = function(a, b) {
    return a * b;
}

const obj = {
    method: function() {
        return this;
    }
}

class MyClass {
    constructor() {
        this.value = 42;
    }

    method() {
        return this.value;
    }
}
