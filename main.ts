#! /usr/bin/env node

import inquirer from "inquirer";

let myPin = 1234;
let accountBalance = 10000;

let answer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your Pin Code : ",
        type: "number",
    }
]);

let { pin } = answer;

if (pin === myPin) {
    console.log("Correct Pin code!!!");

    const operationAns = await inquirer.prompt({
        name: "operation",
        type: "list",
        message: "Please select the option",
        choices: ["Withdraw", "Check Balance"],
    });

    let { operation } = operationAns;

    if (operation === "Withdraw") {

        let withdrawSpecificAmount = await inquirer.prompt({
            name: "amount",
            type: "list",
            message: "Please select the amount",
            choices: ["1000", "3000", "5000", "10000", "Specific amount"],
        });

        let {amount} = withdrawSpecificAmount;


        if(amount === "Specific amount"){

            const amountAns = await inquirer.prompt({
    
                message: "Enter the amount : ",
                name: "amount",
                type: "number",
            });
    
            if (amountAns.amount <= accountBalance) {
                console.log(`Your remaining balance : ${accountBalance - amountAns.amount}`);
            } 
            
            else {
                console.log("Insufficient Amount");
            }
        }
        
        else if (amount <= accountBalance) {
            console.log(`Your remaining balance : ${accountBalance - amount}`);   
        }
        else {
            console.log("Insufficient Amount");
        }
    } 
    
    else if (operation === "Check Balance") {
        console.log(`Current amount : ${accountBalance}`);
    } 
    
    else {
        console.log("Invalid operation. Kindly select the valid operation.");
    }
} 

else {
    console.log("Incorrect pin code. Please, enter a valid pin.");
}
