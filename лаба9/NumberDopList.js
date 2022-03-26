let matrix = [
    [0, 0, 3, 0, 4],
    [0, 0, 5, 7, 0],
    [0, 0, 0, 0, 0],
    [0, 2, 6, 0, 0],
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
        for(stroke of martixe){
           for(stolb of matrixe[stroke]){
               if(matrixe[stroke][stolb] !== 0){
                   let valueMatrix = {
                       row: stroke,
                       column: stolb,
                       value: matrixe[stroke][stolb],
                   }
                   list.append(valueMatrix)
               }
           }
        }
    }

}


class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
}