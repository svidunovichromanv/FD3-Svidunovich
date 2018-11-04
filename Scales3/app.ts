
class Scales {

    private products:Array<IProduct>;

    constructor() {
        this.products=[];
    }

    addProduct(p:IProduct):void {
        this.products.push(p);
    }
    getSumScale():void{
        let summ:number=0;
        for(let i:number=0; i<this.products.length; i++){
            summ+=this.products[i].getScale();
        }
        console.log(summ);
    }
    getNameList():void{
        let list:string="";
        for(let i:number=0; i<this.products.length; i++){
            list+=this.products[i].getName();
        }
        console.log(list);
    }
}

interface IProduct{
    getName():string;
    getScale():number;
}

class Apple implements IProduct {
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
class Tomato implements IProduct {
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
const scale1:Scales=new Scales();
const apple1:Apple=new Apple("cashtelia5", 5);
const apple2:Apple=new Apple("malinka1", 1);
const tomat1:Tomato=new Tomato("cheri2", 2);
const tomat2:Tomato=new Tomato("orange4", 4);
scale1.addProduct(apple1);
scale1.getNameList();
scale1.getSumScale();

scale1.addProduct(apple2);
scale1.getNameList();
scale1.getSumScale();

scale1.addProduct(tomat1);
scale1.getNameList();
scale1.getSumScale();

scale1.addProduct(tomat2);
scale1.getNameList();
scale1.getSumScale();

scale1.addProduct(apple1);
scale1.getNameList();
scale1.getSumScale();
