class LinkedList {
    constructor(){
        this.size = 0
        this.root = null
        this.removeItem = null
        this.arr = []
    }


    add(value){
        this.arr.push(value)
        if(this.size === 0){
            this.root = new Node(value);
            this.size ++;
            return true
        }
        
        let node = this.root
        let newNode = new Node(value)

        while (node.next){
            node = node.next
        }

        node.next = newNode

        this.size++
    }

    getSize(){
        return this.size
    }

    print(){
        let result = []
        let node = this.root
        console.log(node)
        while (node){
            result.push(node.value)
            node = node.next
        }
        console.log(result)
    }

    deleteRepeat(){ /// Индивидуальное задание. Попробывать решить без сторонних массивов!!!!!!
        let arr = []
        let node = this.root
        arr.push(node.value)
        while (node.next){
            node = node.next
            arr.push(node.value)
        }

        let uniqueArray = arr.filter(function(item, pos) {
            return arr.indexOf(item) == pos;
        })

        this.root = null
        this.size = 0

        for(let i=0; i<uniqueArray.length; i++){
            list.add(uniqueArray[i])
        }
    }

}

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

const list = new LinkedList()

list.add(1)
list.add(2)
list.add(2)
list.add(5)
list.add(5)
list.deleteRepeat()
list.print()
