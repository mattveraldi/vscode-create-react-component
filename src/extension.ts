// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as fs from "fs";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	const createReactComponent = 'react-create-component.createReactComponent';

	let createReactComponentCommand = vscode.commands.registerCommand(createReactComponent, createReactComponentHandler);

	context.subscriptions.push(createReactComponentCommand);
}

/**
 * Create a React component
 * @param uri 
 */
async function createReactComponentHandler(uri: vscode.Uri) {
	const targetPath = uri['fsPath'];
	const componentName = await vscode.window.showInputBox();

	// if the user canceled
	if(!componentName) {
		return;
	}
	// if the target path is unavailable
	else if(!targetPath){
		vscode.window.showErrorMessage("Unable to get the target path.");
	}
	// if the name is not valid
	else if(!isComponentNameValid(componentName)) {
		vscode.window.showErrorMessage("Component name has wrong characters.");
	}
	else {
		// create the component's directory
		fs.mkdir(`${targetPath}/${componentName}`, err => {
			err && vscode.window.showErrorMessage(`Error: ${err?.name}`);
		});
	}
}

function isComponentNameValid(name: string) {
	const validator = /^[A-z][0-9]?$/
	return name.match(validator);
}

// this method is called when your extension is deactivated
export function deactivate() { }
