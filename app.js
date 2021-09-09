// CLASS

class Human {
  constructor() {
    this.gender = "male";
  }

  printGender() {
    console.log(this.gender);
  }
}
// keyword 'extends' and super() in a constructor allow to inherit methods from human to person

class Person extends Human {
  constructor() {
    super();
    this.name = "Jakub";
    this.gender = "female";
  }

  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printGender();

// CLASS SYNTAX ES7

class Human {
  gender = "male";

  printGender = () => {
    console.log(this.gender);
  };
}
// keyword 'extends' and super() in a constructor allow to inherit methods from human to person

class Person extends Human {
  name = "Jakub";
  gender = "female";

  printMyName = () => {
    console.log(this.name);
  };
}

const person = new Person();
person.printMyName();
person.printGender();
