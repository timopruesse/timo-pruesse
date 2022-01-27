import type { TerminalCommand } from './types';

const birthdate = new Date(1991, 7, 3);
const age = Math.floor((Date.now() - birthdate.getTime()) / 31536000000);
const minor = Math.floor(age * 0.1);
const patch = age % 10;
const version = `v1.${minor}.${patch}`;

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
		'  timo get:contact        gets contact info',
		'  timo get:github         gets github name',
		'  timo get:twitter        gets twitter name',
		'  timo get:instagram      gets instagram name',
		''
	],
	version: [`${version} (03.08.1991)`],
	stack: [
		'',
		'Languages:',
		'  Daily Drivers:               Experiments:',
		'    - TypeScript/JavaScript      - Rust',
		'    - PHP                        - Golang',
		'                                 - Dart',
		'                                 - Python',
		'',
		'Frameworks:',
		'  Daily Drivers:          Experiments:',
		'    - Laravel/Symfony       - Flutter',
		'    - Svelte/SvelteKit      - Vue',
		'    - React',
		'',
		'Testing (Frameworks):',
		'  Daily Drivers:              Experiments:',
		'    Jest                        - Playwright',
		'    PHPUnit',
		'    React Testing Library',
		'',
		'Databases/Data Stores:',
		'  Daily Drivers:    Experiments:',
		'    - AWS RDS         - SQLite',
		'    - MySQL           - MongoDB',
		'    - Redis           - PostgreSQL',
		'',
		'Cloud/Deployment',
		'  Daily Drivers:      Experiments:',
		'    - AWS               - Firebase',
		'    - DigitalOcean',
		'AI/Data Science:',
		'  Experiments:',
		'    - TensorFlow'
	],
	system: [
		'WSL 2',
		'',
		'Distributor ID: Debian',
		'Description:    Pengwin',
		'Release:        11',
		'Codename:       bullseye'
	],
	getContact: ['email: hi@timo-pruesse.de', '@niceoutside: https://www.no.studio/'], // TODO: Check E-Mail redirect
	getGithub: ['github name: Chroma91'],
	getTwitter: ['twitter name: TimoPruesse'],
	getInstagram: ['instagram name: timopruesse']
};

const commands: Record<string, typeof outputs[keyof typeof outputs]> = {
	whoami: outputs.whoami,
	'cat ~/aboutme': outputs.aboutme,
	'ls ~': outputs.lsHome,
	timo: outputs.help,
	'timo --help': outputs.help,
	'timo --stack': outputs.stack,
	'timo --system': outputs.system,
	'timo --version': outputs.version,
	'timo get:contact': outputs.getContact,
	'timo get:github': outputs.getGithub,
	'timo get:twitter': outputs.getTwitter,
	'timo get:instagram': outputs.getInstagram
};

export function getCommandOutput(commandName: string): TerminalCommand['output'] {
	const output = commands[commandName];

	return output || [`zsh: command not found: ${commandName}`];
}
