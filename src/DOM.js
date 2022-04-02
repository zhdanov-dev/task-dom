export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        const div = document.createElement(tag);
        div.innerHTML = content;
        document.body.appendChild(div);
    }
}

export function generateTree(childrenCount, level) {
    const childAdd = (childrenCount, deep) => {
        let res = document.createElement('div');
        res.classList.add('item_' + deep);
        if (deep < level) {
            for (let i = 0; i < childrenCount; i++) {
                res.appendChild(childAdd(childrenCount, deep + 1));
            }
        }
        return res;
    };
    return childAdd(childrenCount, 1);
}

export function replaceNodes() {
    const node = generateTree(2, 3);
    let items = node.getElementsByClassName('item_2');

    Array.from(items).forEach((elem) => {
        const childNodes = elem.childNodes;
        const el = document.createElement('section');
        el.classList.add('item_2');
        Array.from(childNodes).forEach((elem) => {
            el.appendChild(elem);
        });
        elem.replaceWith(el);
    });
    return node;
}
