import item from './item.js';


const items = []
const hideCheckedItems = false

export default {
    items,
    hideCheckedItems
};

const findById = function (id) {
    return id.find(store.items);
}

const addItem = function (name) {
    try {
        validateName(name);
    }
    catch(e) {
        return e;
    }
    this.items.push(create(name))
}

const findAndToggleChecked = function(id) {
    this.findById(id)

}