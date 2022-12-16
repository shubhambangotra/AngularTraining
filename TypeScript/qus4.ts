class item{

    itemid:number;

    itemname:string

    itemprice:string

    category:string



constructor(itemid,name,price,category)

 {

this.itemid=itemid;

this.itemname=name;

this.itemprice=price;

this.category=category;

   

 }



 display=()=>{

    return this.itemid+ " "+this.itemname+" "+this.itemprice+" "+this.category;

 }

 

}

let items = new item(1,"iPhone",10000,"Mobile");

let itemsa = new item(2,"KeyBoard",1000,"Electronics");

 console.log(items.display());
 console.log(itemsa.display());