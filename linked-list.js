function Node(data) {
  let value = null;
  let nextNode = null;

  if (data) value = data;

  return { value, nextNode };
}

export function LinkedList() {
  return {
    head: null,
    // add new node to end of linked list
    append: function (data) {
      const newNode = Node(data);

      if (this.head === null) {
        this.head = newNode;
        return;
      }

      let currentNode = this.head;
      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = newNode;
    },
    // add new node to start of linked list
    prepend: function (data) {
      const newNode = Node(data);
      newNode.nextNode = this.head;
      this.head = newNode;
    },
    //added to test methods while creating
    printList: function () {
      let currentNode = this.head;
      while (currentNode) {
        console.log(currentNode.value);
        currentNode = currentNode.nextNode;
      }
    },

    size: function () {
      let counter = 0;
      let currentNode = this.head;
      while (currentNode) {
        counter += 1;
        currentNode = currentNode.nextNode;
      }
      return counter;
    },

    getHead: function () {
      console.log("Linked list head is " + this.head.value);
      return this.head;
    },

    getTail: function () {
      let currentNode = this.head;
      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      }
      console.log("Linked list tail is " + currentNode.value);
      return currentNode;
    },
    // index starting at 0
    at: function (index) {
      let size = this.size();
      if (index > size) {
        console.log("Linked list only has " + size + " nodes");
        return;
      }

      let currentNode = this.head;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.nextNode;
      }
      console.log("Linked list index " + index + " is " + currentNode.value);
      return currentNode;
    },
    // removes last element
    pop: function () {
      let currentNode = this.head;
      while (currentNode.nextNode.nextNode) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = currentNode.nextNode.nextNode;
    },

    contains: function (value) {
      let currentNode = this.head;
      while (currentNode) {
        if (currentNode.value === value) {
          console.log("true");
          return true;
        }
        currentNode = currentNode.nextNode;
      }
      console.log("false");
      return false;
    },
    // find index starting at 0
    find: function (value) {
      let index = 0;
      let currentNode = this.head;
      while (currentNode) {
        if (currentNode.value === value) {
          console.log(value + " is at Linked list index " + index);
          return index;
        }
        index += 1;
        currentNode = currentNode.nextNode;
      }
      console.log(value + " is not in Linked list");
      return null;
    },

    toString: function () {
      let string = "";
      let currentNode = this.head;
      while (currentNode) {
        string += "( " + currentNode.value + " ) -> ";
        currentNode = currentNode.nextNode;
      }
      string += "null";
      console.log(string);
      return string;
    },

    insertAt: function (data, index) {
      const newNode = Node(data);
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.nextNode;
      }
      newNode.nextNode = currentNode.nextNode;
      currentNode.nextNode = newNode;
    },

    removeAt: function (index) {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = currentNode.nextNode.nextNode;
    },
  };
}
