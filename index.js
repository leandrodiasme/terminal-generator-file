const inquirer = require('inquirer');
const {firstQuestion, secondQuestion, thirdQuestion}  = require('./questions');

const fs = require('fs');

inquirer.prompt(firstQuestion).then((answer)=>{
    
    const option = answer.creationOfFile;
    
    if(option == 1){

        inquirer.prompt(secondQuestion).then((name)=>{
            const fileName = name.nameOfFile;

                inquirer.prompt(thirdQuestion).then((value)=>{
                     const fileText = value.textOfFile;

                     console.log('... Criando arquivo...');
                     fs.writeFile(`${fileName}.txt`, fileText, (err)=>{
                        if(err) throw err;
                        console.log('Aguarde mais um pouco ...Arquivo criado!');
                    })
                });
        });
       
    }else{
        console.log("Byee")
    }

});
