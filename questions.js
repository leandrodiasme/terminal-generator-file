const firstQuestion = [
    {
        type: 'list',
        name: 'creationOfFile',
        message: 'O que você quer fazer?',
        choices: [
            {
                name: 'Criar uma tarefa',
                value: 0
            },
            {
                name: 'Criar um arquivo',
                value: 1
            }
        ]
    }
];

const secondQuestion = [
    {
        type: 'input',
        name: 'nameOfFile',
        message: 'Qual será o nome do seu arquivo?'
    }
];

const thirdQuestion = [
    {
        type: 'input',
        name: 'textOfFile',
        message: 'Escreva o seu texto:'
    }
];


module.exports = {firstQuestion, secondQuestion, thirdQuestion}