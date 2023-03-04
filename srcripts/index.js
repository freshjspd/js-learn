const rect = {
    a: 0,
    b: 0,
    square: function(){
        return this.a * this.b;
    },
    setA: function(value){
        this.a = value;
    },
    setB: function(value){
        this.b = value;
    },
    getA: function(){
        return this.a;
    },
    getB: function(){
        return this.b;
    },
};

Object.freeze(rect);
console.log(rect.square());
rect.setA(200);
rect.setB(500);
console.log(rect.square());