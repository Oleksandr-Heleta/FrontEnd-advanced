// ______________Facade________
// Для групирования часто используемых функций

/* function Mortgage(name) {
    this.name = name;
}

Mortgage.prototype = {
    applyFor: function (amount) {
        var result = 'approved';
        
        if(!new Bank().verify(this.name, amount)) {
            result = 'denied';
        } else if(!new Credit().get(this.name)) {
            result = 'denied';
        } else if(!new Background().check(this.name)) {
            result = 'denied';
        }
        
        return result;
    }
}

function Bank() {
   this.verify = function (name, amount) {
       // ...
       return true;
   }
}

function Credit() {
    this.get = function (name) {
        // ...
        return true;
    }
}

function Background() {
    this.check = function (name) {
        // ... 
        return true;
    }
}

var mortgage = new Mortgage('John');
mortgage.applyFor('$100 000'); */






// _____________Proxy__________________
// Для кеширования промежуточних даных
 
/* function GeoCoder() {
    this.getLatLng = function (address) {
        if(address === 'Berlin') {
            return 1;
        } else if(address === 'Paris') {
            return 2;
        } else if(address === 'Kyiv') {
            return 3;
        } else {
            return false;
        }
    }
}

function GeoProxy() {
    var geoCoder = new GeoCoder();
    var geoCache = {};

    return {
        getLatLng: function (address) {
            if(!geoCache[address]) {
                geoCache[address] = geoCoder.getLatLng(address);
            }

            return geoCache[address];
        },

        show: function () {
            console.log(geoCache);
        }
    }
}

var geoProxy = new GeoProxy();
geoProxy.getLatLng('Berlin');
geoProxy.getLatLng('Berlin');
geoProxy.getLatLng('Berlin');

geoProxy.getLatLng('Kyiv');
geoProxy.getLatLng('Kyiv');

geoProxy.getLatLng('Paris');
geoProxy.getLatLng('Paris');
geoProxy.getLatLng('Paris');
geoProxy.getLatLng('Paris');

geoProxy.show(); */







// ___________Decorator___________
// Для динамического добавления обьектам новых свойств и методов

/* function User(name) {
    this.name = name;
}

function DecoratedUser(user, city, street) {
    this.name = user.name;
    this.city = city;
    this.street = street;
}

var user = new User('Lora');
var decoratedUser = new DecoratedUser(user, 'NY', 'Broadway'); */







// __________________Singleton____________
// Это подход, когда класс может иметь только один экземпляр и есть какая-то точка доступа к этому экземпляру

/* function Universe() {
    this.name = 'Bob';
    this.say = function say () {};

    var instance = this;

    Universe = function () {
        return instance;
    };
}

console.log(new Universe() === new Universe()); */






// _______Adapter__________
 /*
 Обеспечивает совместимость классов с разными интерфейсами, т.е. выполняет роль переводчика.
 В итоге клиент (тот кто вызывает методы) через адаптер может работать с разными классами с разными интерфейсами, даже не подозревая об этом,
 хотя умеет пользоваться только одним интерфейсом. 
 */


// old interface
class OldCalculator {
    constructor() {
        this.operations = function(term1, term2, operation) {
            switch (operation) {
                case 'add':
                    return term1 + term2;
                case 'sub':
                    return term1 - term2;
                default:
                    return NaN;
            }
        };
    }
}

// new interface
class NewCalculator {
    constructor() {
        this.add = function(term1, term2) {
            return term1 + term2;
        };
        this.sub = function(term1, term2) {
            return term1 - term2;
        };
    }
}

// Adapter Class
class AdapterNewToOldCalc { // работает newCalculator под интерфейсом OldCalculator
    constructor() {
        const newCalc = new NewCalculator();

        this.operations = function(term1, term2, operation) {
            switch (operation) {
                case 'add':
                    // using the new implementation under the hood
                    return newCalc.add(term1, term2);
                case 'sub':
                    return newCalc.sub(term1, term2);
                default:
                    return NaN;
            }
        };
    }
}

// usage
const oldCalc = new OldCalculator();
console.log(oldCalc.operations(10, 5, 'add')); // 15

const newCalc = new NewCalculator();
console.log(newCalc.add(10, 5)); // 15

const adaptedCalc = new AdapterNewToOldCalc();
console.log(adaptedCalc.operations(10, 5, 'add')); // 15;