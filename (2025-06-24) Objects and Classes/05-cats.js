function cats (catsInfoArr) {
    class Cat {
        constructor (name, age) {
            this.name = name;
            this.age = age;
        }

        meow () {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let cats = [];

    for (let catInfo of catsInfoArr) {
        let [catName, catAge] = catInfo.split(' ');
        catAge = Number(catAge);

        let cat = new Cat(catName, catAge);
        cats.push(cat);
    }

    for (let cat of cats) {
        cat.meow();
    }
}

cats(["Mellow 2", "Tom 5"]);
cats(["Candy 1", "Poppy 3", "Nyx 2"]);