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
