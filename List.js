var List = /** @class */ (function () {
    function List() {
        this.head = null;
    }
    List.prototype.add = function (base) {
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
    };
    List.prototype.search = function (name) {
        if (this.head != null) {
            if (this.head.name == name)
                return this.head;
            if (this.head.next != this.head) {
                var tail = this.head.previous;
                var head = this.head.next;
                do {
                    if (tail.name == name)
                        return tail;
                    if (head.name == name)
                        return head;
                    tail = tail.previous;
                    head = head.next;
                } while (tail != head);
                if (tail.name == name)
                    return tail;
            }
        }
        return null;
    };
    List.prototype.eraseLast = function () {
        if (this.head != null) {
            if (this.head.next != this.head) {
                var beforeHead = this.head.previous;
                beforeHead.previous.next = this.head;
                this.head.previous = beforeHead.previous;
                beforeHead.previous = beforeHead.next = null;
                return beforeHead;
            }
            else {
                var temp = this.head;
                this.head = null;
                temp.previous = temp.next = null;
                return temp;
            }
        }
        return null;
    };
    List.prototype.eraseFirst = function () {
        if (this.head != null) {
            if (this.head.next != this.head) {
                this.head.previous.next = this.head.next;
                this.head.next.previous = this.head.previous;
                var head = this.head;
                this.head = this.head.next;
                head.previous = head.next = null;
                return head;
            }
            else {
                var temp = this.head;
                this.head = null;
                temp.previous = temp.next = null;
                return temp;
            }
        }
        return null;
    };
    List.prototype.erase = function (name) {
        if (this.head != null) {
            if (this.head.next != this.head) {
                this.head.previous.next = this.head.next;
                this.head.next.previous = this.head.previous;
                var head = this.head;
                this.head = this.head.next;
                head.previous = head.next = null;
                return head;
            }
            else {
                if (this.head.name == name) {
                    var temp = this.head;
                    this.head = null;
                    temp.previous = temp.next = null;
                    return temp;
                }
            }
        }
        return null;
    };
    return List;
}());
