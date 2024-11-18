
class Node {
    constructor(data){
        this.data = data;
        this.next=null
    }
}


class linkedList{
    constructor(){
        this.head=null;
    }
    addFirst(data){
    if(!this.head){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode
        return;
    }
    const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode
        console.log(newNode.next)
   
    }

}

const newNode= new linkedList()
newNode.addFirst(100)
newNode.addFirst(200)
console.log(newNode)





