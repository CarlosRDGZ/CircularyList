class Base {
  public next:Base = null
  public previous:Base = null
  public readonly name:string
  public readonly time:number

  public constructor(name:string, time:number) {
    this.name = name
    this.time = time
  }
}