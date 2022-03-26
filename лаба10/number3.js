const vertex = {
    1: [2,3],
    2: [6,7],
    3: [6,4,8],
    4: [5],
    5: [6],
    6: [],
    7: [8],
    8: [],
}

class Graph {
    constructor() {
        this.vertices = {}; // список смежности графа
    }

    addVertex(value) {
        if (!this.vertices[value]) {
            this.vertices[value] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        if (!(vertex1 in this.vertices) || !(vertex2 in this.vertices)) {
            throw new Error('В графе нет таких вершин');
        }

        if (!this.vertices[vertex1].includes(vertex2)) {
            this.vertices[vertex1].push(vertex2);
        }
        if (!this.vertices[vertex2].includes(vertex1)) {
            this.vertices[vertex2].push(vertex1);
        }
    }

    dfs(s, t) {
        // adj - смежный список
        // s - начальная вершина
        // t - пункт назначения
        let abj = vertex
        console.log(abj)
        // инициализируем очередь
        let queue = []
        // добавляем s в очередь
        queue.push(s)
        // помечаем s как посещенную вершину во избежание повторного добавления в очередь
        s.visited = true
        while(queue.length > 0) {
            // удаляем первый (верхний) элемент из очереди
            let v = queue.shift()
            console.log(v)
            v.value = String(v.value)
            console.log(abj[v.value])
            // abj[v] - соседи v
            for(let neighbor of abj[v.value]) {
                console.log(neighbor)
                let neighbord = {
                    value: `${neighbor}`
                }
                neighbord.visited = false
                /*neighbor.visited = false*/
                // если сосед не посещался
                if(!neighbord.visited) {
                    // добавляем его в очередь
                    console.log(neighbord)
                    queue.push(neighbord)
                    // помечаем вершину как посещенную
                    neighbord.visited = true
                    // если сосед является пунктом назначения, мы победили
                    if(neighbord.value == t){
                        console.log(queue)
                        return true
                    }
                }
            }
        }
        // если t не обнаружено, значит пункта назначения достичь невозможно
        return false
    }

    bfs2(startVertex) {
        let list = this.vertices;
        let queue = [startVertex];
        let visited = { [startVertex]: 1 };
        console.log(list)
        // кратчайшее расстояние от стартовой вершины
        let distance = { [startVertex]: 0 };
        // предыдущая вершина в цепочке
        let previous = { [startVertex]: null };

        function handleVertex(vertex) {
            let neighboursList = list[vertex];
            neighboursList.forEach(neighbour => {
                if (!visited[neighbour]) {
                    visited[neighbour] = 1;
                    queue.push(neighbour);
                    // сохраняем предыдущую вершину
                    previous[neighbour] = vertex;
                    // сохраняем расстояние
                    distance[neighbour] = distance[vertex] + 1;
                }
            });
        }

        // перебираем вершины из очереди, пока она не опустеет
        while(queue.length) {
            let activeVertex = queue.shift();
            handleVertex(activeVertex);
        }

        return { distance, previous }
    }

    findShortestPath(startVertex, finishVertex) {
        let result = this.bfs2(startVertex);

        if (!(finishVertex in result.previous))
            throw new Error(`Нет пути из вершины ${startVertex} в вершину ${finishVertex}`);

        let path = [];

        let currentVertex = finishVertex;

        while(currentVertex !== startVertex) {
            path.unshift(currentVertex);
            currentVertex = result.previous[currentVertex];
        }

        path.unshift(startVertex);
        console.log(path)
        return path;
    }

}

const graph = new Graph();

graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);
graph.addVertex(7);
graph.addVertex(8);

graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 6);
graph.addEdge(2, 7);
graph.addEdge(3, 4);
graph.addEdge(3, 6);
graph.addEdge(3, 8);
graph.addEdge(4, 5);
graph.addEdge(5, 6);
graph.addEdge(7, 8);

/*graph.findShortestPath(1, 8) /// BFS*/
console.log(graph.dfs({value: 1}, 8))
