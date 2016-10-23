//DI Factory
export default class DIFactory {
    constructor() {
    this.matching = {};
    }
     
    register(name, dClass) {
        this.matching[name] = new dClass();
    }
    
    getInstance(mainClass, aDepClass) {
        let aDepClassInstance = aDepClass.map((v) => {
        return this.matching[v];
    });
    return new mainClass(...aDepClassInstance);
    }
}