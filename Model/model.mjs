export default class Model {
  constructor() {
    this.taskArray = [];
    this.inputsArray = [];
  }
  addToTaskArr(newTask) {
    // if (!newTask) return;
    this.taskArray.push(newTask);
  }

  addtoInputsArr(obj) {
    if (!obj) return;
    this.inputsArray.push(obj);
  }

  resetTaskArray() {
    this.taskArray = [];
  }

  removeFromTaskArr(task) {
    task.remove()
     this.inputsArray =  this.inputsArray.filter(item => {
          return item != task;
      })
  }

  sortArrayDown() {
    this.inputsArray.sort((a, b) => {
      const aTag = a.firstChild.value;
      const bTag = b.firstChild.value;
      if (aTag > bTag) return 1;
      if (aTag < bTag) return -1;
      return 0;
    });
  }

  sortArrayUp() {
    this.inputsArray.sort((a, b) => {
      const aTag = a.firstChild.value;
      const bTag = b.firstChild.value;
      if (aTag < bTag) return 1;
      if (aTag > bTag) return -1;
      return 0;
    });
  }
}
