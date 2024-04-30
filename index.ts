//#! /usr/bin/env node

import { log } from "console";

import { create } from "domain";
import inquirer from "inquirer";
import { todo } from "node:test";

let todos : string[] =["warda","waleed"];

async function createTodo(todos:string[]){
    do{
    let ans = await inquirer.prompt({
        type:"list",
        message: "select an operation",
        name: "select",
        choices:["add", "update","view","delet",],

    })
          if (ans.select == "add"){
            let addTodo = await inquirer.prompt({
                type:"input",
                message: "add item in the list",
                name: "todo",
            });
            todos.push(addTodo.todo);
            todos.forEach(todo => console.log(todo));
           // console.log(todos);
          } 
          if (ans.select == "update"){
            let updateTodo= await inquirer.prompt({
                type: "list",
                message: "update item in the list",
                name: "todo",
                choices: todos.map(item => item)
            });
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "add item in the list",
                name: "todo",
            });
            let newTodo = todos.filter(val => val !== updateTodo.todo);
            todos = [...newTodo,addTodo.todo];
            console.log(todos);
          }
          if (ans.select== "view"){
            console.log("*** TO DO LIST ***");
            console.log(todos);
            console.log("*******");
          }
          if (ans.select== "delet"){
            let deletTodo = await inquirer.prompt({
                type: "list",
                message: "update item in the list",
                name: "todo",
                choices: todos.map(item => item)
            });
            let newTodo = todos.filter(val =>val !== deletTodo.todo);
            todos =[...newTodo];
            console.log(todos);
          }


}  while(true)
}
createTodo(todos);


