<div class="root">
    <div class="container">
        <section class="sidebar">
            <ul class="menu"></ul>
        </section>
        <section class="main">
            <article class="post"></article>
            <p class="copyright"></p>
        </section>
    </div>
</div>
// 广度优先遍历以上节点
const traverse = (ndRoot) => {
    const queue = [ndRoot];

    while (queue.length) {
        const node = queue.shift();

        printInfo(node);

        if (!node.children.length) {
            continue;
        }

        Array.from(node.children).forEach(x => queue.push(x));
    }
};

const printInfo = (node) => {
    console.log(node.tagName, `.${node.className}`);
};

// kickoff
traverse(document.querySelector('.root'));
