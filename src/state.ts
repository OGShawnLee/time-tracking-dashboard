import { writable } from 'svelte/store';

export const currentTimeframe = writable<TimeframeKey>('weekly');
