const byapple = (applenumber) => {
    if(applenumber <5) {
        return Promise.resolve('van elég alma')
     } else {
            return Promise.reject("nincs elég alma")
        }
    }
const res1 = byapple(4)

console.log(res1)

res1.then((yap) =>{
    console.log(yap)
})

console.log("Fepoldás után")

byapple(5).then((yap) =>{
    console.log(yap)
    
}).catch((error) => {
    console.log(error)
})

const byapple2 = (applenumber) => {
    return new Promise((resolve,reject) =>{
        if(applenumber < 5) {
            resolve("Van alma :" + applenumber)
         } else {
                reject("Nincs alma: " + applenumber)
            }
        }
    )}

byapple2(5).then((param)=> {
    console.log(param)
}).catch((error)=> {
    console.log(error)
})

setTimeout(() => {


},0)

const byapple3 = (applenumber) => {
    return new Promise((resolve,reject) =>{
        if(applenumber < 5) {
            setTimeout(() => {
                resolve("Egyszer volt, hol nem volt, egy kisfiú, akit Mátyásnak hívtak. Mátyás imádta a természetet, és minden nap sétálgatott a közeli erdőben. Egy szép tavaszi reggelen, amikor a nap sugarai átcsillantak a fák lombjai között, Mátyás egy különleges pillangót pillantott meg. A pillangó olyan színes volt, mintha minden szivárvány színe beleolvadt volna.")
            }, 2000);

         } else {
                setTimeout(() => {
                    reject("yjajaj")
                }, 3000)
            }
        }
    )}

    byapple3(4).then((param)=> {
        console.log(param)
    }).catch((error)=> {
        console.log(error)
    })

    const res2 = byapple3(5)

    console.log(res2)

    class Service{
        #data
    
        constructor(){
            this.#data = people
        }
    
        Init() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(this.#data);
                }, 2000);
            });
        }
    
        initInvalid() {
            return new Promise((reject) => {
                setTimeout(() => {
                    reject('Invalid initialization');
                }, 2000);
            });
        }
    
        realInit(dbNumber) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (dbNumber < 5) {
                        resolve('Vannak almák: ' + dbNumber);
                    } else {
                        reject('Nincsenek elég almák: ' + dbNumber);
                    }
                }, 2000);
            });
        }
    }
    
    class DataViewController{
        #div
        constructor(){
            this.#div = document.createElement('div')
            this.#div.textContent = 'Loading'
            document.body.appendChild(this.#div)
        }
    
        setContent(array){
            this.#div.innerHTML = ''
            for(const element of array){
                const div = document.createElement('div')
                div.textContent = element.name
                this.#div.appendChild(div)
            }
        }
    
        renderError(error) {
            this.#div.textContent = error;
        }
    }
    
    const ser = new Service()
    const view = new DataViewController()
    ser.Init().then((value) => {
        view.setContent(value);
    })
    
    ser.initInvalid().catch((error) => {
        view.renderError(error);
    });
    
    ser.realInit(3).then((value) => {
        console.log(value);
    }).catch((error) => {
        view.renderError(error);
    });