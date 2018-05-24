var Base = /** @class */ (function () {
    function Base(name) {
        this.next = null;
        this.previous = null;
        this.name = name;
    }
    return Base;
}());
var List = /** @class */ (function () {
    function List() {
        this.head = null;
    }
    List.prototype.add = function (base) {
        if (this.search(base.name) == null) {
            if (this.head != null) {
                var beforeHead = this.head.previous;
                base.next = this.head;
                base.previous = beforeHead;
                beforeHead.next = base;
                this.head.previous = base;
            }
            else {
                this.head = base;
                this.head.next = this.head;
                this.head.previous = this.head;
            }
        }
    };
    List.prototype.search = function (name) {
        if (this.head != null) {
            if (this.head.name == name)
                return this.head;
            if (this.head.next != this.head) {
                var tail = this.head.previous;
                var head = this.head.next;
                var lastTail = null;
                var lastHead = null;
                do {
                    console.log('tail', tail);
                    console.log('head', head);
                    if (tail.name == name)
                        return tail;
                    if (head.name == name)
                        return head;
                    lastHead = head;
                    lastTail = tail;
                    tail = tail.previous;
                    head = head.next;
                } while (tail != head || lastTail != head && lastHead != tail);
            }
        }
        return null;
    };
    return List;
}());
var list = new List();
for (var i = 0; i < 11; i++)
    list.add(new Base("" + Math.floor(Math.random() * 10)));
console.log(list.head);
