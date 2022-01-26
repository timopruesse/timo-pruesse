import type { TerminalCommand } from './types';

const version = 'v1.0.0';

export const outputs: Record<string, TerminalCommand['output']> = {
	whoami: ['timo_pruesse'],
	aboutme: ['Hi, my name is Timo 🙋‍♂️', 'I love teaching machines how to solve problems.', ''],
	lsHome: ['aboutme'],
	help: [
		'',
		`Timo (${version})`,
		'',
		'Usage:',
		'',
		'  timo --help             print this help page',
		'  timo --stack            print tech stack',
		'  timo --system           print system info',
		'  timo --version          print version',
		'',
		'  timo send:email         send an email',
		''
	],
	version: [`${version} (03.08.1991)`],
	stack: ['TBA'],
	system: ['TBA'],
	sendEmail: ['hi@timo-pruesse.de'] // TODO: Check E-Mail redirect
};

const commands: Record<string, typeof outputs[keyof typeof outputs]> = {
	whoami: outputs.whoami,
	'cat ~/aboutme': outputs.aboutme,
	'ls ~': outputs.lsHome,
	'timo --help': outputs.help,
	'timo --stack': outputs.stack,
	'timo --system': outputs.system,
	'timo --version': outputs.version,
	'timo send:email': outputs.sendEmail
};

export function getCommandOutput(commandName: string): TerminalCommand['output'] {
	const output = commands[commandName];

	return output || [`${commandName}: Command not found.`];
}
