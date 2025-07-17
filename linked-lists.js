function Node(data) {
  let value = null;
  let nextNode = null;

  if (data) value = data;

  return { value, nextNode };
}

function LinkedList() {
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

    printList: function () {
      let currentNode = this.head;
      while (currentNode) {
        console.log(currentNode.value);
        currentNode = currentNode.nextNode;
      }
    },
  };
}

const list = LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.prepend("turtle");

list.printList();
