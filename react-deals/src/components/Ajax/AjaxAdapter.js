
export default class AjaxAdapter {

  static signUpUser(newUser) {
    return fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(newUser),
    })
    .then(r=r.json());
  }

  static getAllProducts() {
    // console.log('here');
    return fetch('/api/db/products/')
    .then(r => r.json())
  };

  static getSelectedProdcuts(category) {
    return fetch(`/api/db/products/${category}`)
    .then(r => r.json())
  }

  static getHeadphones() {
    return fetch(`/api/db/products/headphones`)
    .then(r => r.json())
  }

  static getCameras(category) {
    return fetch(`/api/db/products/camera`)
    .then(r => r.json())
  }
}

