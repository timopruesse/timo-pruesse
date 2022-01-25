export type InputDirection = 'forwards' | 'backwards';

export type InputAction = 'none' | 'type' | 'delete' | 'clear';

export interface InputSequenceItem {
	text: string;
	duration: number;
	delay?: number;
}

export interface ActionPayload {
	action: InputAction;
}

export interface StartPayload {
	index: number;
	action: InputAction;
}

export type StartEvent = CustomEvent<StartPayload>;

export interface EndPayload {
	index: number;
}

export type EndEvent = CustomEvent<EndPayload>;

export interface ReversePayload {
	index: number;
}

export type ReverseEvent = CustomEvent<ReversePayload>;

export const DELETE_MODIFIER = 0.25;
