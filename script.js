
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