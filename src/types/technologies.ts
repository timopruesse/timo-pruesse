export type TechnologyType =
	| 'Framework'
	| 'Programming language'
	| 'Database'
	| 'Data store'
	| 'Testing framework';

export interface Technology {
	name: string;
	url: string;
}
