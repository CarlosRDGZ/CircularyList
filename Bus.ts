class Base {
  public next:Base = null
  public previous:Base = null
  public readonly name:string

  public constructor(name:string) {
    this.name = name
  }
}

class List {
  public head:Base = null

  public add (base:Base):void {
    if (this.search(base.name) == null) {
      if (this.head != null) {
        let beforeHead = this.head.previous
  
        base.next = this.head
        base.previous = beforeHead
  
        beforeHead.next = base
        this.head.previous = base
      } else {
        this.head = base
        this.head.next = this.head
        this.head.previous = this.head
      }
    }
  }

  public search (name:string):Base {
    if (this.head != null) {
      if (this.head.name == name)
        return this.head
      if (this.head.next != this.head) {
        let tail = this.head.previous
        let head = this.head.next

        let lastTail = null
        let lastHead = null

        do {
          console.log('tail',tail)
          console.log('head',head)
          if (tail.name == name)
            return tail
          if (head.name == name)
            return head
          
          lastHead = head
          lastTail = tail

          tail = tail.previous
          head = head.next
        } while (tail != head || lastTail != head && lastHead != tail)
      }
    }
    return null
  }
}

let list:List = new List()
for (let i = 0; i < 11; i++)
  list.add(new Base(`${Math.floor(Math.random() * 10)}`))
console.log(list.head)