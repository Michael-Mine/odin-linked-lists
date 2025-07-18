import { LinkedList } from "./linked-list.js";

const list = LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.prepend("turtle");

list.size();
list.getHead();
list.getTail();
list.at(2);
list.at(7);
list.pop();
list.printList();

list.contains("monkey");
list.contains("hamster");
list.find("monkey");
list.find("parrot");

list.toString();
list.insertAt("monkey", 3);
list.toString();
list.removeAt(5);
list.toString();
