class Mask {
    constructor(){
        this.maskingRules = new Map();
        this.maskingRules.set(/(pindata\W)(\d*)/g,[2]);
        this.maskingRules.set(/(carddata\W)(\d{4})\W*(\d{4})\W*(\d{4})\W*(\d{4})\W*/g,[2,3,4]);
    }
    maskExecutedString(results,maskIndexes){
        results.forEach(result => {
            let resultValue = result[0];
            maskIndexes.forEach(index => {
                let maskedValue = '*'.repeat(result[index].length)
                resultValue = resultValue.replace(result[index],maskedValue)
            });
            this.maskString = this.maskString.replace(result[0],resultValue)
        });
    }

    executeMaskingRules(maskRuleMap){
        let keys =[ ...maskRuleMap.keys() ];
        keys.forEach(key => {
            let results = [];
            let result = key.exec(this.maskString);
            while(result !== null){
                results.push(result);
                result = key.exec(this.maskString);
            }
            results.length && this.maskExecutedString(results,maskRuleMap.get(key));
        });
    }

    maskData(str, maskRuleMap = this.maskingRules){
        this.maskString = str;
        this.executeMaskingRules(maskRuleMap);
        return this.maskString;
    }
}

var mask = new Mask();

console.log(mask.maskData('{pindata:1234, carddata:2344-4557-8888-4555, pindata:4567}'));