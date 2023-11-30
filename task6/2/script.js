const htmlTree = {
    tagName: 'body',
    children: [
        {
            tagName: 'div',
            children: [
                {
                    tagName: 'span',
                    children: ['Enter a data please:'],
                },
                {
                    tagName: 'br',
                },
                {
                    tagName: 'input',
                    attrs: {
                        type: 'text',
                        id: 'name',
                    },
                },
                {
                    tagName: 'input',
                    attrs: {
                        type: 'text',
                        id: 'surname',
                    },
                },
            ],
        },
        {
            tagName: 'div',
            children: [
                {
                    tagName: 'button',
                    attrs: {
                        id: 'ok',
                    },
                    children: ['OK'],
                },
                {
                    tagName: 'button',
                    attrs: {
                        id: 'cancel',
                    },
                    children: ['Cancel'],
                },
            ],
        },
    ],
};
