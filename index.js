const inquirer = require('inquirer');
//
// // inquirer.prompt({
// //     type: 'list',
// //     name: 'color',
// //     message: 'which are your favorite color?',
// //     choices:['red', 'blue', 'green']
// // })
// //     .then(answers => {
// //         console.log('Answer: ', answers)
// //     });
//
// // inquirer.prompt({
// //     type: 'rawlist',
// //     name: 'color',
// //     message: 'which are your favorite color?',
// //     choices:['red', 'blue', 'green']
// // })
// //     .then(answers => {
// //         console.log('Answer: ', answers)
// //     });
//
// // inquirer.prompt({
// //     type: 'expand',
// //     name: 'color',
// //     message: 'which are your favorite color?',
// //     choices: [
// //         {
// //             key: 'a',
// //             value: 'red'
// //         },
// //         {
// //             key: 'b',
// //             value: 'white'
// //         }
// //     ]
// // })
// //     .then(answers => {
// //         console.log('Answer: ', answers)
// //     });
//
// inquirer.prompt({
//     type: 'checkbox',
//     name: 'color',
//     message: 'which are your favorite color?',
//     choices: [
//         'red',
//         'blue',
//         'white'
//     ]
// })
//     .then(answers => {
//         console.log('Answer: ', answers)
//     });

// inquirer.prompt({
//     type: 'password',
//     name: 'secretText',
//     message: 'Password: ',
//     mask: '*'
// })
//     .then(answers => {
//         console.log('Answer: ', answers)
//     });

inquirer.prompt({
    type: 'editor',
    name: 'code',
    message: 'Write some of your code. ',
})
    .then(answers => {
        console.log('Answer: ', answers)
    });