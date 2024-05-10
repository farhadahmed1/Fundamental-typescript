{
  // oop -class

  class Animal {
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}

    makeSound() {
      console.log(
        `this is Animal ${this.name} and  ${this.species} his sound ${this.sound}`
      );
    }
  }

  const cat = new Animal("Deshi cat", "cat", "Meuo meuo");
  cat.makeSound();

  ///
}
