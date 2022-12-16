var item = /** @class */ (function () {
    function item(itemid, name, price, category) {
        var _this = this;
        this.display = function () {
            return _this.itemid + " " + _this.itemname + " " + _this.itemprice + " " + _this.category;
        };
        this.itemid = itemid;
        this.itemname = name;
        this.itemprice = price;
        this.category = category;
    }
    return item;
}());
var items = new item(1, "iPhone", 10000, "Mobile");
var itemsa = new item(2, "KeyBoard", 1000, "Electronics");
console.log(items.display());
console.log(itemsa.display());
