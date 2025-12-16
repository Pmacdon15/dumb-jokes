import JokeChuckNorrisComponent from '@/components/chuck-norris-joke-component'
import TypedJokeComponent from '@/components/typed-joke-component'

import { getChuckNorrisJoke, getTypedJoke } from '@/lib/dal/dal'

export default function Home() {
	const jokeChuckNorrisPromise = getChuckNorrisJoke()
	const jokeProgrammingPromise = getTypedJoke()
	return (
		<div className="flex min-h-screen items-center">
			<h1>Dumb Jokes</h1>
			<JokeChuckNorrisComponent jokePromise={jokeChuckNorrisPromise} />

			<TypedJokeComponent jokePromise={jokeProgrammingPromise} />
		</div>
	)
}
