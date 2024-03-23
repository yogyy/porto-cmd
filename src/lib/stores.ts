import { writable } from "svelte/store";

export const commandHistory = writable<string[]>([]);
