const tree1 = document.querySelector("#tree1");
const tree2 = document.querySelector("#tree2");
const target = document.querySelector("#target");

function getCorrespondingNode(tree1, tree2, target) {
    const stack1 = [tree1];
    const stack2 = [tree2];

    while(stack1.length) {
        const current1 = stack1.pop();
        const current2 = stack2.pop();

        if(current1 === target) {
            return current2;
        }

        stack1.push(...current1.children);
        stack2.push(...current2.children);
    }
} 

const correspondingNode = getCorrespondingNode(tree1, tree2, target);

console.log(correspondingNode);