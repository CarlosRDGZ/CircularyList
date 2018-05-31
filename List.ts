class List {
  public head:Base = null

  public add (base:Base):void {
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

  public search (name:string):Base {
    if (this.head != null) {
      if (this.head.name == name)
        return this.head
      if (this.head.next != this.head) {
        let tail = this.head.previous
        let head = this.head.next

        do {
          if (tail.name == name)
            return tail
          if (head.name == name)
            return head

          tail = tail.previous
          head = head.next
        } while (tail != head)
        if (tail.name == name)
          return tail
      }
    }
    return null
  }

  public eraseLast ():Base {
    if (this.head != null) {
      if (this.head.next != this.head) {
        let beforeHead = this.head.previous
        
        beforeHead.previous.next = this.head
        this.head.previous = beforeHead.previous

        beforeHead.previous = beforeHead.next = null
        return beforeHead
      } else {
        let temp = this.head
        this.head = null
        temp.previous = temp.next = null
        return temp
      }
    }
    return null
  }

  public eraseFirst ():Base {
    if (this.head != null) {
      if (this.head.next != this.head) {
        this.head.previous.next = this.head.next
        this.head.next.previous = this.head.previous

        let head = this.head
        this.head = this.head.next

        head.previous = head.next = null
        return head
      } else {
        let temp = this.head
        this.head = null
        temp.previous = temp.next = null
        return temp
      }
    }
    return null
  }

  public erase (name:string):Base {
    if (this.head != null) {
      if (this.head.next != this.head) {
        this.head.previous.next = this.head.next
        this.head.next.previous = this.head.previous

        let head = this.head
        this.head = this.head.next

        head.previous = head.next = null
        return head
      } else {
        if (this.head.name == name) {
          let temp = this.head
          this.head = null
          temp.previous = temp.next = null
          return temp
        }
      }
    }
    return null
  }
}