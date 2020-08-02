// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	const createReactComponent = 'react-create-component.createReactComponent';

	let createReactComponentCommand = vscode.commands.registerCommand(createReactComponent, createReactComponentHandler);

	context.subscriptions.push(createReactComponentCommand);
}

function createReactComponentHandler(uri: vscode.Uri) {
	vscode.window.showInformationMessage(`This is the folder you are right-clicking: ${uri['fsPath']}`);
}

// this method is called when your extension is deactivated
export function deactivate() { }
