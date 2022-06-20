import type { CustomError } from '$lib/interfaces/error.interface'
import * as StorageService from '$lib/services/localstorage.service'

export const post = async (
	fetch,
	url: string,
	body: unknown
): Promise<[object, Array<CustomError>]> => {
	try {
		const headers = {}
		if (!(body instanceof FormData)) {
			headers['Content-Type'] = 'application/json'
			body = JSON.stringify(body)
			const token = StorageService.getStorage('refreshToken')
			if (token) {
				headers['Authorization'] = `Bearer ${token}`
			}
			const res = await fetch(url, {
				method: 'POST',
				body,
				headers
			})
			const response = await res.json()
			if (response.errors) {
				const errors: Array<CustomError> = []
				for (const p in response.errors) {
					errors.push({ error: response.errors[p] })
				}
				return [{}, errors]
			}
			return [response, []]
		}
	} catch (error) {
		console.error(`Error outside: ${error}`)
		const errors: Array<CustomError> = [{ error: 'An unknown error occurred.' }, { error: error }]
		return [{}, errors]
	}
}