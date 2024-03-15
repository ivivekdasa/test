class test {
  constructor(name, id) {
    (this.name = name), (this.id = id);
  }

  logger() {
    console.log("logging from test");
  }
}

class test2 extends test {
  constructor(name, id) {
    super(name, id);
  }
  logger() {
    console.log("logging from test2");
  }
}

const obj1 = {
  name: "harsha",
  id: "12",
};

const obj2 = {
  class: "cse",
  id: "23",
  ...obj1,
};

console.log(obj2);
