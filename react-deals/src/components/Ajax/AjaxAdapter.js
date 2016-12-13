function indexByKeyName(arr, keyName) {
  console.log('key')
  return arr.reduce((obj, el) => {
    obj[el[keyName]] = el;
    return obj;
    console.log(obj);
  }, {});
}

export default class AjaxAdapter {

  static signUpUser(newUser) {
    return fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(newUser),
    })
    .then(r=r.json());
  }

  static getAllProducts() {
    console.log('here');
    return fetch('/api/db/products/')
    .then(r => r.json())
    .then(data => indexByKeyName(data, 'id'));
  }

  // static getSelectedProdcuts(category) {
  //   return fetch(`/api/db/products/${category}`)
  //   .then(r => r.json())
  //   .then(data => {
  //   database = data;
  //   next();
  // })
  //   .catch(err => next(err));
  // }
}

  // static getTask() {
  //   return fetch('/tasks')
  //   .then(r => r.json())
  //   .then(data => indexByKeyName(data, 'id'));
  // }

  // static createTask(newTask) {
  //   return fetch('/tasks', {
  //     method:  'POST',
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8',
  //     },
  //     body: JSON.stringify(newTask),
  //   })
  //     .then(r => r.json());
  // }

  // static delete(id) {
  //   return fetch(`/tasks/${id}`, {
  //     method:  'DELETE',
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8',
  //     },
  //   })
  //     .then(r => r.json());
  // }
