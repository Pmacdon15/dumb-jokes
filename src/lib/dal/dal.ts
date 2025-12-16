import { cacheLife, cacheTag } from 'next/cache'

export async function getChuckNorrisJoke() {
	'use cache'
	cacheTag(`chuckNorris-joke`)
	cacheLife('hours')
	try {
		const res = await fetch('https://api.chucknorris.io/jokes/random')
		if (!res.ok) throw new Error('Network error')
		const data = await res.json()
		return { value: String(data.value) }
	} catch (e) {
		console.error('Error fetching joke:', e)
		return { error: 'Failed to fetch joke' }
	}
}

export type Joke = {
	id: number
	type: string
	setup: string
	punchline: string
}

export async function getTypedJoke(): Promise<{ joke?: Joke; error?: string }> {
	'use cache'
	cacheTag('typed-joke')
	cacheLife('hours')
	try {
		const res = await fetch(
			'https://official-joke-api.appspot.com/jokes/programming/random',
		)
		if (!res.ok) throw new Error('Network error')
		const data = await res.json()

		const joke = data[0]
		return { joke }
	} catch (e) {
		console.error('Error fetching typed joke:', e)
		return { error: 'Failed to fetch typed joke' }
	}
}

export async function getDadJoke(): Promise<{
	joke?: { joke: string }
	error?: string
}> {
	'use cache'
	cacheTag('dad-joke')
	cacheLife('hours')
	try {
		const res = await fetch('https://icanhazdadjoke.com/', {
			headers: {
				Accept: 'application/json',
			},
		})
		if (!res.ok) throw new Error('Network error')
		const data = await res.json()
		return { joke: data }
	} catch (e) {
		console.error('Error fetching dad joke:', e)
		return { error: 'Failed to fetch dad joke' }
	}
}

export interface MEME {
	id: string
	name: string
	url: string
	width: number
	height: number
	box_count: number
}
export async function getMeme(): Promise<{
	meme?: MEME
	error?: string
}> {
	'use cache'
	cacheTag('memes')
	cacheLife('hours')
	try {
		const res = await fetch('https://api.imgflip.com/get_memes')
		if (!res.ok) throw new Error('Network error')
		const data = await res.json()
		const randomMeme =
			data.data.memes[Math.floor(Math.random() * data.data.memes.length)]
		return { meme: randomMeme }
	} catch (e) {
		console.error('Error fetching memes :', e)
		return { error: 'Failed to fetch meme' }
	}
}
