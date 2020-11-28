// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as fs from "fs";
import * as ejs from "ejs";
import * as componentFiles from "./templates/component";

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

	//
	// Handle errors that may happen on the 
	// name's typing phase.
	//

	// if the user canceled
	if (!componentName) {
		return;
	}
	// if the target path is unavailable
	else if (!targetPath) {
		vscode.window.showErrorMessage("Unable to get the target path.");
	}
	// if the name is not valid
	else if (!isComponentNameValid(componentName)) {
		vscode.window.showErrorMessage("Component name has wrong characters.");
	}

	else {

		//
		// Prepare the directory
		//

		const directory: string = `${targetPath}/${componentName}`;

		// if the directory exists, show message and return
		if (fs.existsSync(directory)) {
			vscode.window.showErrorMessage(`${componentName} already exists.`);
			return;
		}

		// create the component's directory
		fs.mkdir(directory, err => {
			err && vscode.window.showErrorMessage(`Error: ${err?.name}`);
			console.error(err);
		});

		try {

			//
			// Create all the component's files
			//

			// Component
			const renderedComponent = await ejs.render(componentFiles.default.Component, { name: componentName });
			fs.writeFile(`${directory}/${componentName}.js`, renderedComponent, (err) => {
				err && vscode.window.showErrorMessage(`Error: ${err?.name}`);
				console.error(err);
			});

			// CSS
			const renderedCss = await ejs.render(componentFiles.default.ComponentCss, { name: componentName });
			fs.writeFile(`${directory}/${componentName}.css`, renderedCss, (err) => {
				err && vscode.window.showErrorMessage(`Error: ${err?.name}`);
				console.error(err);
			});

			// Test and scenario
			const renderedTest = await ejs.render(componentFiles.default.ComponentTest, { name: componentName });

			fs.mkdir(`${directory}/__test__`, err => {
				err && vscode.window.showErrorMessage(`Error: ${err?.name}`);
				console.error(err);
			});

			fs.writeFile(`${directory}/__test__/${componentName}.test.js`, renderedTest, (err) => {
				err && vscode.window.showErrorMessage(`Error: ${err?.name}`);
				console.error(err);
			});

		} catch (error) {
			vscode.window.showErrorMessage(`Error: ${error?.name}`);
		}
	}
}

function isComponentNameValid(name: string) {
	// spaces and foreward slashes would break the logic.
	return !name.match(/\s|\//);
}

// this method is called when your extension is deactivated
export function deactivate() { }
