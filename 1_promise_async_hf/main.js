class Manager {
    constructor(adat) {
      this.adat = adat;
    }
  
    filter(feltetel) {
      return new Promise((resolve, reject) => {
        const eredmeny = this.adat.filter(feltetel);
        if (eredmeny.length === 0) {
          reject("Nincs találat.");
        } else {
          resolve(eredmeny);
        }
      });
    }
  
  
    noResultsCallback(message) {
      console.log(message);  
    }
  }
  
  class View {
    constructor(manager, form) {
      this.manager = manager;
      this.form = form;
      this.container = document.getElementById('view');
    }
  
    Eredmenyek(results) {
      this.container.innerHTML = '';
      results.forEach(person => {
        const div = document.createElement('div');
        div.innerHTML = `név: ${person.name}, életkor: ${person.age}`;
        this.container.appendChild(div);
      });
    }
  
    Szoveg(message) {
      this.container.innerHTML = `<div>${message}</div>`;
    }
  
    setFilterCallback(callback) {
      this.Callback = callback;
    }
  }
  
  class Form {
    constructor(manager, view) {
      this.manager = manager;
      this.view = view;
      this.view.setFilterCallback(this.handleFilter.bind(this));
      this.formletrehozas();
    }
  
    formletrehozas() {
      const container = document.getElementById('form');
      
      this.gombletrehozas(container, 'Első gomb', () => {
        this.manager.filter(person => person.age % 3 === 0 && person.car.color === 'White')
          .then(results => this.view.Eredmenyek(results))
          .catch(error => this.view.Szoveg(error));
      });
  
      this.gombletrehozas(container, 'Második gomb', () => {
        this.manager.filter(person => person.sex === 'Female' && person.car.type === 'Coupe')
          .then(results => this.view.Eredmenyek(results))
          .catch(error => this.view.Szoveg(error));
      });
  
      this.gombletrehozas(container, 'Harmadik gomb', () => {
        this.manager.filter(person => person.name[0].toUpperCase() === 'A' && person.car.type === 'Bus')
          .then(results => this.view.Eredmenyek(results))
          .catch(error => this.view.Szoveg(error));
      });
  
      this.gombletrehozas(container, 'Negyedik gomb', () => {
        this.manager.filter(person => person.car.color === 'Silver' && person.car.type === 'SUV')
          .then(results => this.view.Eredmenyek(results))
          .catch(error => this.view.Szoveg(error));
      });
    }
  
    gombletrehozas(container, szoveg, katt) {
      const gomb = document.createElement('button');
      gomb.textContent = szoveg;
      gomb.addEventListener('click', katt);
      container.appendChild(gomb);
    }
  
    handleFilter() {
      
    }
  }


const manager = new Manager(people);
const view = new View(manager);
const form = new Form(manager, view);