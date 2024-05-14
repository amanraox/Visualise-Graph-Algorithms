class QElement {
    constructor(element, priority)
    {
        this.element = element;
        this.priority = priority;
    }
}
class PriorityQueue {

    // An array is used to implement priority
    constructor()
    {
        this.items = [];
    }


enqueue(element, priority)
{
    // creating object from queue element
    var qElement = new QElement(element, priority);
    var contain = false;

    for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].priority > qElement.priority) {
            // Once the correct location is found it is
            // enqueued
            this.items.splice(i, 0, qElement);
            contain = true;
            break;
        }
    }

    if (!contain) {
        this.items.push(qElement);
    }
}
dequeue()
{

    // if (this.isEmpty())
        // return "Underflow";
     return this.items.shift();
}
front()
{

    // if (this.isEmpty())
    //     return "No elements in Queue";
    return this.items[0];
}
rear()
{

    if (this.isEmpty())
        return "No elements in Queue";
    return this.items[this.items.length - 1];
}
isEmpty()
{
    // return true if the queue is empty.
    return this.items.length == 0;
}
printPQueue()
{
    var str = "";
    for (var i = 0; i < this.items.length; i++)
        str += this.items[i].element + " ";
    return str;
}
}
