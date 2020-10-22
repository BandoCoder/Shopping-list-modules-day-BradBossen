const validateName = function (name) {
    if (name.length === 0) {
        throw TypeError("name must not be blank")
    }
}

const create = function (name) {
  return {
      id: cuid(), 
      name: name,
      checked: false
    }
}

export default {
    validateName,
    create
};