// 1- object.create()
let obj = {
    a: 'aaa',
    b: 'bbb'
}
// object.create() and object.assign() enables us to create new obj from another one
// without updating it on change
let ob = Object.create(obj)

const objfortest = {
    hasdis: false,
    checkdis: function(){
        return `u ${this.hasdis === true ? '' : "don't"} have a fking discount`
    }
}
console.log(objfortest.checkdis())


// --------------- //
// 2- object.assign()
let srcObj = {
    one: 'oneeee',
    two: 'twoooo'
}
let targetObj = {
    thre: 'threeeee'
}
// object.assign(target, src... can be more than one)
Object.assign(targetObj, srcObj)
targetObj.one = 'one' // one is updated
console.log(targetObj)

// we can add new obj as the src
Object.assign(targetObj, {attr: 'from anonumus obj'})

// using assign to create new obj
const objFromAssign = Object.assign({}, targetObj)
// we added the target as empty ob then assigned another one as a source


// ------------ //
// delete operator
const objc = {
    a: '1',
    b: '2'
}
delete objc.a // it will be deleted
console.log(objc) // still b

const objec = {}
// we can use define property to prevent this
// syntax will be like
// Object.defineProperty(obj, prop, descriptor)
Object.defineProperty(objec, 'ky', {value : 'val', configurable : false})
delete objec.ky // will return false and objec still have value

// configurable : false , also there is writable it prevent to update
// also we can freez it like
Object.freeze(objc)
objc.a = 3;
// Throws an error in strict mode


// ---------------- //
// looping over object
const object = {
    one: 'first',
    two: 'seconed'
}

for (let ky in object){
    console.log(ky) // logs keys
}
for (let ky in object){
    console.log(object[ky]) // logs values
}

for (let ky in object){
    console.log(ky, object[ky]) // logs keys with values
}

const arr = []
for (let ky in object){
    arr.push([ky, object[ky]])
}
console.log(arr) // logs array of arrays 

for (let ky in object){
    console.log(`the key is ${ky} and it's value is ${object[ky]}`) // logs keys with values in statment
}

let dom;
for (let ky in object){
    dom+= `the key is ${ky} and it's value is ${object[ky]}`
}
dom.innerHTML = dom; // prints keys with values in statment in the DOM