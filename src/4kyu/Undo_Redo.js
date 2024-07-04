function undoRedo(object) {
  let history = [JSON.parse(JSON.stringify(object))];
  let state = 0;
  let redoIsActive = false;
  let undoIsActive = false;

  function saveState() {
    history.push(JSON.parse(JSON.stringify(object)));
  }

  return {
    set: function (key, value) {
      object[key] = value;
      saveState();
      state++;
      undoIsActive = true;
      redoIsActive = false;
    },
    get: function (key) {
      return object[key];
    },
    del: function (key) {
      delete object[key];
      saveState();
      state++;
      undoIsActive = true;
      redoIsActive = false;
    },
    undo: function () {
      if (state > 0 && undoIsActive) {
        state--;
        Object.keys(object).forEach((key) => delete object[key]);
        Object.assign(object, history[state]);
        redoIsActive = true;
        undoIsActive = false;
      } else {
        throw new Error();
      }
    },
    redo: function () {
      if (state < history.length - 1 && redoIsActive) {
        state++;
        Object.keys(object).forEach((key) => delete object[key]);
        Object.assign(object, history[state]);
        redoIsActive = false;
      } else {
        throw new Error();
      }
    },
  };
}

const obj = {
  a: 1,
};

const unRe = undoRedo(obj);
unRe.set('b', 2);
unRe.set('c', 3);
unRe.set('d', 4);
unRe.set('e', 5);
unRe.del('e');
unRe.undo();
unRe.redo();
