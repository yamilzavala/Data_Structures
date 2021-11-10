function List() {
 this.listSize = 0;
 this.pos = 0;
 this.dataStore = []; // initializes an empty array to store list elements
 this.clear = clear;
//  this.find = find;
 this.toString = toString;
 this.insert = insert;
 this.append = append;
 this.remove = remove;
 this.front = front;
 this.end = end;
 this.prev = prev;
 this.next = next;
 this.length = length;
 this.currPos = currPos;
 this.moveTo = moveTo;
 this.getElement = getElement;
this.contains = contains;
}

function append(element){
    this.dataStore.push(element);
    ++this.listSize;
}

function remove(element){
    let indexElement = this.dataStore.indexOf(element);
    if(indexElement > -1) {
        this.dataStore.splice(indexElement, 1);
        --this.listSize;
        return true;
    }
    return false;
}

function length(){
    return this.listSize;
}

function toString() {
    return this.dataStore;
}

function insert(element, after) {
    let indexAfter = this.dataStore.indexOf(after);
    if(indexAfter > -1) {
        this.dataStore.splice(indexAfter+1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}

function clear() {
    this.dataStore = [];
    this.listSize = 0;
    this.pos = 0;
}

function contains(element) {
    return this.dataStore.includes(element)
}

function front() {
    this.pos = 0;
}

function end() {
    this.pos = this.listSize-1;
}

function prev() {
    if(this.pos > 0) {
        --this.pos
    }
}

function next() {
    if(this.pos < this.listSize-1) {
        ++this.pos
    }
}

function currPos() {   
    return this.pos   
}

function moveTo(position) {   
    this.pos = position;  
}

function getElement() { 
    return this.dataStore[this.pos]
}



let names = new List();
names.append('yamil')
names.append('miguel')
names.append('paula')
console.log(names.toString());
names.remove('yamil');
console.log(names.toString());
names.insert('yamil', 'miguel')
console.log(names.toString());
console.log(names.length());
console.log(names.contains('yamilddd'));

// names.clear()
// console.log(names.toString());
// console.log(names.length());

