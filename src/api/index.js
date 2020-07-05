import TodoApi from './todos';

//  DB Setup
let db;
function initialize() {
  // eslint-disable-next-line max-len
  const indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
  if (!indexedDB) {
    // eslint-disable-next-line no-alert
    window.alert("Your browser doesn't support a stable version of IndexedDB. The application with therefore not work");
  }

  //  open DB
  const request = indexedDB.open('AccessibilityBasics', 1);
  request.onupgradeneeded = (event) => {
    db = event.target.result;
    db.createObjectStore('toDoList', { autoIncrement: true, keyPath: 'id' });
  };

  request.onsuccess = (event) => {
    db = event.target.result;
  };

  request.onerror = () => {
    // eslint-disable-next-line no-alert
    alert('Epic fail: Something terrible has happened');
  };
}

function getDb() { return db; }

const Api = {
  initialize,
  db: getDb,
  todos: TodoApi,
};
export default Api;
