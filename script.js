class CircularLinkedList {
    head = null;

    /*
    * Appends a node to the linked list
    * @param {Node} node - an instance of node.
    */
    append(node) {
        if (this.head === null) {
            node.link = node;
        } else {
            node.link = this.head.link
            this.head.link = node;
        }
        this.head = node;
    }

    /*
    * Appends a list of nodes to the linkd list
    * @param {Array[Node]} nodes - an array of nodes.
    */
    batchAppend(nodes) {
        nodes.forEach(n => this.append(n));
    }

    /*
    * Pops the given node from the linkd list
    * @param {Node} nodes - an instance of node.
    * @return {boolean} - returns true of the node has poped and false if not.
    */
    popNode(node) {
        let flag = false;
        this.walk(
            current => {

                // Checks if the next node is the given node
                if (current.link === node) {

                    // links the next node to next->next node.
                    current.link = node.link;

                    // if the given node is the head node, so set the node before removed node for head.
                    if (node === this.head) this.head = current;

                    // removes the node from memory
                    delete node.prototype;

                    // Sets the flag for successfully removed action.
                    flag = true;

                    return 0;
                }
            }
        )
        return flag;
    }

    /*
    * Walks in nodes and calls the given function with each node.
    * @param {callable} func - an callable function.
    */
    walk(func) {
        var temp = this.head;
        do {
            if (func(temp) === 0) break;
            temp = temp.link;
        } while (temp !== this.head);

    }

    /*
    * Holder shoots the next node and gives the gun to node after the victim node.
    */
    shoot() {
        let flag = false;
        this.walk((node) => {

            // Checks if the next node does not point to its self and if the current node is the holder.
            if (node.link !== node && node.data.isHolder) {

                // Takes the gun from the current holder
                node.data.isHolder = false;

                // Passes the gun to the next next node after the victim node.
                node.link.link.data.isHolder = true;

                // Marks the victim node for removal
                const will_remove = node.link.data.element;
                setTimeout(() => will_remove.classList.add("will-remove"), 1000);

                // Removes the victim node
                this.popNode(node.link);

                // sets the removal flag
                flag = true;
                return 0
            }
        });
        return flag;
    }

    /*
    * Walks on nodes and returns all of them in an array.
    * @param {Array[Node]} func - all nodes.
    */
    getNodes() {
        let nodes = [];
        this.walk(node => nodes.push(node));
        return nodes;
    }

    /*
    * Prints all of the nodes.
    */
    printList() {
        this.walk(node => console.log(node))

    }
}

class Node {

    // Node Data
    data = null;

    // The link to the next node
    link = null;

    constructor(data) {
        this.data = data;
    }
}

class ElementNode extends Node {
    constructor(id, isHolder) {
        super(
            {
                id: id,
                isHolder: isHolder,
                element: null
            }
        );
    }
}

class NodeManager {
    constructor(members_count = 10, list = null, table = null) {
        this.list = list;
        this.table = table;

        // َAppends the generated nodes to the linkd list
        this.list.batchAppend(this.generateNodes(members_count));

        // first render of nodes
        this.renderNodes();


    }

    /*
    * Append and renders the given node to the table.
    */
    appendNodeElement(node) {
        const el = "<div class=\"row align-items-center text-center h-100\">" +
            "        <div class=\"col-12 fs-5\">" + node.data.id +
            "        </div>" +
            "        <div class=\"col-12 border-top border-warning\">" +
            "            <small>" + (node.data.isHolder ? "Holder" : "---") + "</small>" +
            "        </div>" +
            "    </div>" +
            "</div>";
        const element = document.createElement("div")
        element.className = "bg-white node border border-warning overflow-hidden rounded-2 border-1 position-absolute"
        element.innerHTML = el;
        node.data.element = element;
        this.table.appendChild(element)
    }

    /*
    * Removes all of the nodes from the table and re-renders the remaining nodes.
    */
    renderNodes() {
        this.table.innerHTML = ""
        const nodes = this.list.getNodes();
        nodes.forEach(n => this.appendNodeElement(n))
        this.arrangeNodes(nodes)
    }

    /*
    * plays the game
    */
    play() {
        var p = setInterval(() => {
            this.renderNodes();
            if (!this.list.shoot()) {
                clearInterval(p);
            }
        }, 4000)
    }

    /*
    * Arranges the nodes around the table
    */
    arrangeNodes(nodes) {
        const r = this.table.offsetWidth / 2;
        const y0 = r - 20;
        const x0 = r - 30;
        const d = 2 * Math.PI / nodes.length
        for (let i = 0; i < nodes.length; i++) {
            const element = nodes[i].data.element;
            element.style.bottom = r * Math.sin(d * i) + y0 + "px"
            element.style.left = r * Math.cos(d * i) + x0 + "px"
        }

    }

    /*
    * Generates the nodes with given length with random ids.
    * @param {Integer} length
    * @return {Array[Node]} - generated nodes.
    */
    generateNodes(length = 8) {
        const holderIndex = Math.floor(Math.random() * length);
        const startId = Math.floor(Math.random() * 100);
        return Array.from({ length: length }, (i, v) => new ElementNode(v + startId, (v === holderIndex)))
    }
}

function play(element) {
    const members_count = document.getElementById("members-count").value;
    if (members_count && members_count > 0) {
        new NodeManager(
            members_count,
            new CircularLinkedList(),
            document.getElementById("rounded-table")
        ).play();
        element.parentNode.remove();
    }
}