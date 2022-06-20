import { browser } from '$app/env'


export const getStorage = (key: string): string | undefined => {
	if (browser) {
		const item = localStorage.getItem(key)
		if (item) {
			return item
		}
	}
	return null
}

export const setStorage = (key: string, value: string): void => {
	if (browser) {
		localStorage.setItem(key, value)
	}
}