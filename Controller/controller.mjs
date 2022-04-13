export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    this.view.init();
    this.view.mainForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(event.target);
      this.model.resetTaskArray();
      data.forEach((element) => {
        this.model.addToTaskArr(element);
      });
      this.model.addtoInputsArr(this.view.listItem);
      this.view.createNewTask();
      this.view.renderList(this.model.taskArray);
      this.model.inputsArray.forEach((r) => {
        r.lastChild.addEventListener("click", () => {
            r.remove();
        });
      });
    });
    this.view.sortBlock.addEventListener("click", () => {
      const elClassName = this.view.sortBlock.className;
      elClassName === "todo__sort sortUp"
        ? this.model.sortArrayUp()
        : this.model.sortArrayDown();
      this.view.uList(this.model.inputsArray);
      this.view.checkList(this.model.inputsArray);
      this.view.toggleUp();
      this.view.editSortImg();
    });
  }
}
