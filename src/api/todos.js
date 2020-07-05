let db;

function getDb() {
  //  open DB
  return new Promise((resolve) => {
    const request = indexedDB.open('AccessibilityBasics', 1);
    request.onupgradeneeded = (event) => {
      db = event.target.result;
      db.createObjectStore('toDoList', { autoIncrement: true, keyPath: 'id' });
    };

    request.onsuccess = (event) => {
      db = event.target.result;
      // eslint-disable-next-line no-use-before-define
      resolve(event.target.result);
    };
  });
}

/**
 * list of all todo items, both completed and non
 * @return {Promise<todo<object>[]>}
 */
async function get() {
  if (!db) {
    db = await getDb();
  }
  const returnVal = new Promise((resolve) => {
    const objectStore = db.transaction(['toDoList'], 'readwrite').objectStore('toDoList');
    const list = [];
    objectStore.openCursor().onsuccess = (event) => {
      const cursor = event.target.result;
      if (!cursor) {
        resolve(list);
        return;
      }
      const item = {
        ...cursor.value,
        id: cursor.key,
      };
      list.push(item);
      cursor.continue();
    };
  });
  return returnVal;
}

/**
 * creates a new todo item
 * @param {string} todo
 * @returns {Promise<todo<object>[]>} - updated list of all todos
 */
function create(todo) {
  const returnVal = new Promise((resolve) => {
    const payload = {
      item: todo,
      completed: false,
    };
    const objectStore = db.transaction(['toDoList'], 'readwrite').objectStore('toDoList');
    const result = objectStore.add(payload);
    result.onsuccess = async () => {
      const list = await get();
      resolve(list);
    };
  });
  return returnVal;
}

/**
 * Marks a todo item as completed
 * @param {number} id - the todo item's id to be completed
 * @returns {Promise<todo<object>[]>} - updated list of all todos
 */
function update(id) {
  const returnVal = new Promise((resolve) => {
    const objectStore = db.transaction(['toDoList'], 'readwrite').objectStore('toDoList');
    objectStore.get(id).onsuccess = (event) => {
      const todo = { ...event.target.result };
      todo.completed = !todo.completed;
      objectStore.put(todo).onsuccess = async () => {
        const list = await get();
        resolve(list);
      };
    };
  });
  return returnVal;
}

/**
 * deletes todo item
 * @param {number} id - the todo item's id to be deleted
 * @returns {Promise<todo<object>[]>} - updated list of all todos
 */
function remove(id) {
  const returnVal = new Promise((resolve) => {
    const key = Number(id);
    const request = db.transaction(['toDoList'], 'readwrite').objectStore('toDoList').delete(key);
    request.onsuccess = async () => {
      const list = await get();
      resolve(list);
    };
  });
  return returnVal;
}

const TodosApi = {
  get, create, update, remove,
};
export default TodosApi;
