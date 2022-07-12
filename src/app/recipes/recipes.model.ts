export class Recipes{
 public name:String;
public description:string;
public price:number;
public imagePath:string;

constructor(name:string, desc:string, price:number, imagePath:string){
this.name=name;
this.description=desc;
this.price=price;
this.imagePath=imagePath;
}

}