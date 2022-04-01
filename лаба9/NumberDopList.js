let matrix = [
    [0, 0, 3, 0, 4],
    [0, 0, 5, 7, 0],
    [0, 0, 0, 0, 0],
    [0, 2, 6, 0, 0],
    [3, 0, 1, 0, 0],
]

class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

    toString(callback) {
        return callback ? callback(this.value) : `${this.value}`;
    }

    append(value) {
        // Создаём новый узел.
        const newNode = new LinkedListNode(value);

        // Если нет head или tail, делаем новым узлом head и tail.
        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        // Присоединяем новый узел к концу связного списка.
        // Берём последний узел и указываем, что его next будет новым узлом.
        this.tail.next = newNode;

        // Переназначаем tail на новый узел.
        this.tail = newNode;

        return this;
    }

    create(matrixe){
        for(let stroke in matrixe){
           for(let stolb in matrixe[stroke]){
               if(matrixe[stroke][stolb] !== 0){
                   let valueMatrix = {
                       row: stroke*1,
                       column: stolb*1,
                       value: matrixe[stroke][stolb],
                   }
                   this.append(valueMatrix)
               }
           }
        }
    }

    transpon(){
        let node = this.head
        while(node.next){
            [node.value.row, node.value.column] = [node.value.column, node.value.row]
            node = node.next
        }
    }

    plusMatrix(){
        let node1 = this.head
        let node2 = this.head

        while(node1.next){
            while(node2.next){
                if(node1.value.row === node2.value.column && node1.value.column === node2.value.raw){
                    node1.value = node1.value * node2.value
                }
                node2 = node2.next
            }
            node1 = node1.next
        }

    }

    timesMatrix(){
        let node1 = this.head
        let node2 = this.head

        while(node1.next){
            while(node2.next){
                if(node1.value.row === node2.value.row && node1.value.column === node2.value.column){
                    node1.value.row = node1.value.row + node2.value.column
                    node1.value.column = node1.value.column + node2.value.column
                }
                node2 = node2.next
            }
            node1 = node1.next
        }

    }

    returns(){
        console.log(this.head)
    }

}


class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
}

let list = new LinkedListNode

list.create(matrix)
/*list.transpon()*/
list.returns()