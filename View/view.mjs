export default class View {
  constructor() {
    this.root = document.getElementById("root");
    this.mainForm = null;
    this.mainInput = null;
    this.mainButton = null;
    this.mainList = null;
  }

  init() {
    this.renderPage();
  }

  renderPage() {
    this.wrapper = this.createDiv({
      class: "wrapper",
    });

    this.main = this.createDiv({
      class: "container",
    });

    this.yellowBlock = this.createDiv({
      class: "todo__yellow-block",
    });

    this.title = this.createHeadTitle({
      text: "To-Do List",
      class: "todo__head-text",
    });

    this.sortBlock = this.createDiv({
      class: "todo__sort",
    });

    this.sortDownImage = this.createImage({
      source: "/images/sortDown.png",
      class: "todo__sortDown-img",
    });

    this.sortUpImage = this.createImage({
      source: "/images/sortUp.png",
      class: "todo__sortUp-img ",
    });

    this.item = this.createInput({
      class: "todo__input",
      autocomplete: "off",
      name: "taskName",
      type: "text",
      draggable: true,
    });

    this.mainButton = this.createButton({
      child:
        "<div class='todo__plusBtn'>+</div><div class='btn-text'>Добавить</div>",
      class: "todo__button",
      id: "add",
    });

    this.mainForm = this.createForm({
      class: "todo__form",
    });

    this.mainList = this.createList({
      class: "todo__view-list",
    });

    this.listItem = this.createDiv({
      class: "listItem",
    });

    this.removeSymbol = this.createDiv({
      class: "remove",
      text: "×",
    });

    this.wrapper.appendChild(this.main);
    this.main.appendChild(this.yellowBlock);
    this.main.appendChild(this.title);
    this.main.appendChild(this.sortBlock);
    this.sortBlock.appendChild(this.sortDownImage);
    this.sortBlock.appendChild(this.sortUpImage);
    this.main.appendChild(this.mainForm);
    this.mainForm.appendChild(this.mainList);
    this.mainList.appendChild(this.listItem);
    this.listItem.appendChild(this.item);
    this.listItem.appendChild(this.removeSymbol);
    this.mainForm.appendChild(this.mainButton);
    this.root.appendChild(this.wrapper);
  }

  createDiv(props) {
    const div = document.createElement("div");

    props.class && (div.className = props.class);
    props.text && (div.innerText = props.text);
    return div;
  }

  createHeadTitle(props) {
    const headTitle = document.createElement("h1");

    props.text && (headTitle.innerText = props.text);
    props.class && (headTitle.className = props.class);
    return headTitle;
  }

  createImage(props) {
    const img = document.createElement("img");

    props.source && (img.src = props.source);
    props.class && (img.className = props.class);
    return img;
  }

  createButton(props) {
    const button = document.createElement("button");

    props.text && (button.innerText = props.text);
    props.child && (button.innerHTML = props.child);
    props.class && (button.className = props.class);
    props.id && (button.id = props.id);

    return button;
  }

  createInput(props) {
    const input = document.createElement("input");

    props.class && (input.className = props.class);
    props.autocomplete && (input.autocomplete = props.autocomplete);
    props.name && (input.name = props.name);
    props.type && (input.type = props.type);
    props.value && (input.value = props.value);
    props.draggable && (input.draggable = props.draggable);

    return input;
  }

  createForm(props) {
    const form = document.createElement("form");

    props.class && (form.className = props.class);
    return form;
  }

  createList(props) {
    const list = document.createElement("div");

    props.class && (list.className = props.class);
    return list;
  }

  createNewTask() {
    this.item = this.createInput({
      class: "todo__input",
      autocomplete: "off",
      name: `taskName`,
      type: "text",
      value: "",
      draggable: true,
    });
    this.listItem = this.createDiv({
      class: "listItem",
    });
    this.removeSymbol = this.createDiv({
      class: "remove",
      text: "×",
    });
  }

  uList(arr) {
    arr.forEach((i) => {
      this.mainList.append(i);
    });
  }

  checkList(arr) {
    const list = document.querySelector(".todo__view-list");
    const listElement = list.querySelectorAll(".listItem");
    listElement.forEach((i) => {
      if (arr.length > 0 && i.firstChild.value === "") {
        i.remove();
      }
    });
  }

  toggleUp() {
    this.sortBlock.classList.toggle("sortUp");
  }

  editSortImg() {
    if (this.sortBlock.classList.contains("sortUp")) {
      this.sortDownImage.style.display = "none";
      this.sortUpImage.style.display = "block";
    } else {
      this.sortDownImage.style.display = "block";
      this.sortUpImage.style.display = "none";
    }
  }

  renderList(listArray) {
    // listArray.forEach(() => {
      this.mainList.append(this.listItem);
      this.listItem.append(this.item);
      this.listItem.append(this.removeSymbol);
    // });
  }
}
