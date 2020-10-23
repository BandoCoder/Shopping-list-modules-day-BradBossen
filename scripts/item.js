
const validateName = function (name) {
    if (name === '') {
        
        throw TypeError("name must not be blank")
    }
    else {

        return name
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