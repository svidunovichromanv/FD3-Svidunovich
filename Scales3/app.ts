interface IStorageEngine{
    addItem(item:Product):void;
    getItem(index:number):Product;
    getCount():number;
}
class Product{
    private name:string;
    private scale:number;
    constructor(name:string, scale:number) {
        this.name=name;
        this.scale=scale;
    }
    getName():string {
        return " "+this.name;
    }
    getScale():number {
        return this.scale;
    }
}
class ScalesStorageEngineArray implements IStorageEngine {
    storage:Array<Product>;
    constructor() {
        this.storage=[];
    }
    addItem(item:Product):void {
        this.storage.push(item);
    }
    getItem(index:number):Product {
        return this.storage[index];
    }
    getCount():number{
        return this.storage.length;
    }
}
class ScalesStorageEngineLocalStorage implements IStorageEngine {
    key:string;
    tempStorege:Array<Product>;
    constructor(key:string) {
        this.key=key;
        if(localStorage.getItem(this.key)){
            this.tempStorege=JSON.parse(localStorage.getItem(this.key));
        }else {
            this.tempStorege=[];
        }

    }
    addItem(item:Product):void {
        let stringItem:string;
        this.tempStorege.push(item);
        stringItem=JSON.stringify(this.tempStorege);
        localStorage.setItem(this.key, stringItem);
    }
    getItem(index:number):Product {
        return this.tempStorege[index];
    }
    getCount():number{
        return this.tempStorege.length;
    }
}
class Scales <StorageEngine extends IStorageEngine>{

    private storage:StorageEngine;

    constructor(storage:StorageEngine) {
        this.storage=storage;
    }

    addProduct(p:Product):void {
        this.storage.addItem(p);
    }
    getSumScale():number{
        let sum:number=0;
        let quantity:number=this.storage.getCount();
        for(let i:number=0; i<quantity; i++){
            sum+=this.storage.getItem(i).getScale();
        }
        return sum;
    }
    getNameList():string{
        let list:string="";
        let quantity:number=this.storage.getCount();
        for(let i:number=0; i<quantity; i++){
            list+=this.storage.getItem(i).getName();
        }
        return list;
    }
}

const apple1:Product= new Product("apple1",1);
const apple2:Product= new Product("apple2",2);
const tomato1:Product= new Product("tomato1",1);
const tomato2:Product= new Product("tomato2",2);
const storageArray=new ScalesStorageEngineArray();
const scalesArray=new Scales <ScalesStorageEngineArray>(storageArray);
const storageLocalStorage=new ScalesStorageEngineLocalStorage("Products");
const scalesLocalStorage=new Scales <ScalesStorageEngineLocalStorage>(storageLocalStorage);
scalesArray.addProduct(apple1);
scalesArray.addProduct(tomato1);
scalesLocalStorage.addProduct(apple2);
scalesLocalStorage.addProduct(tomato2);
console.log("names from array: "+scalesArray.getNameList());
console.log("scale from array: "+scalesArray.getSumScale());
console.log("names from LH: "+scalesLocalStorage.getNameList());
console.log("scale from LH: "+scalesLocalStorage.getSumScale());
