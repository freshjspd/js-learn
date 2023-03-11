// class RangeValidator
// [10 100] 
// свойства/поля: limit1 limit2  // from to
// methods
// 1. вернуть массив в виде [from to]
// 2. validate который проверяет входит ли число X  в диапазон

class RangeValidator{
    constructor(from, to){
        this.from = from;
        this.to = to;
        if(isNaN(from) || !isFinite(from)){console.log('params FROM: error');}
        if(isNaN(to) || !isFinite(to)){console.log('params TO: error');}
        if(this.from > this.to){
            const copyFrom = this.from;
            this.from = this.to;
            this.to = copyFrom;
        }

    }
    range(){
        return [this.from, this.to];
    }
    validate(value){
        if(isNaN(value) || !isFinite(value)){console.log('VALUE: error');}
        if(value >= this.from && value <=this.to){
            return true;
        }
        return false;
    }
}

let range1 = new RangeValidator(10, 100);
console.log(range1.range());
console.log('Validate 77: ',range1.validate(77));
console.log('Validate 200: ',range1.validate(200));

