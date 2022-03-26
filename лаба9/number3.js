class LinkedList {
    constructor(){
        this.size = 0
        this.root = null
        this.arr = []
        this.removeItem = null
    }


    add(value){
        if(this.size === 0){
            this.root = new Node(value);
            this.size ++;
            this.arr.push(new Node(value))
            return
        }

        let node = this.root
        let newNode = new Node(value)
        newNode.next = this.arr[0]
/*        newNode.next = node*/ /// по идее надо же так делать????


        while(node.next){
            if(!node.next.next && this.size > 1){
/*                console.log(1)
                console.log(node)*/
                node.next = newNode
                break
            }
            node = node.next
        }

        if(this.size < 2){
            node.next = newNode
        }
        this.size++
    }

    getSize(){
        console.log(this.size)
    }

    print(){
        let result = []
        let node = this.root
        while (node){
            result.push(node.value)
            node = node.next
        }
        console.log(this.root)
        console.log(result)
    }

    counting(line){
        let arr = line.split(' ')

        console.log(arr)
        let node = this.root
        let count = 0
        /*let countFor = Math.ceil(arr.length / this.size)*/
        let countFor = 1
        for(let i=0; i<=countFor; i++){
            formula()
        }

        function formula(){
            while(node.next){
                count++
                if(count === arr.length){
                    console.log(node.value + ' Имя человека на которое выпало последнее слово')
                    return node.value
                }
                node = node.next
            }
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

list.add("влад")
list.add("Миша")
list.add("Никита")
list.add("Илья")
list.add("Кирилл")
list.print()
list.getSize()
list.counting('Раз два три четыри пять шесть')