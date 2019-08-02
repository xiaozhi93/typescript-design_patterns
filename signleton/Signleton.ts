class Singleton {
  // 将constructor设为私有，防止通过new该类产生多个对象，破坏单例
  private constructor() {}
  static instance: Singleton;
  // 如果已经有了对象，则返回缓存的对象，不然就创建一个对象并缓存，保证系统内最多只有一个该类的对象
  static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}


// let ob1 = new Singleton("one")

// console.log(ob1)