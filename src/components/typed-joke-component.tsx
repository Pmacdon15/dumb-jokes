import type { Joke } from '@/lib/dal/dal'

export default async function TypedJokeComponent({
	jokePromise
}: {
	jokePromise: Promise<{
		joke?: Joke | undefined
		error?: string
	}>
}) {
	const joke = await jokePromise

	return (
		<>
			{joke.error ? (
				<>
					<h1>Typed Joke:</h1>
					<p>Error Loading joke</p>
				</>
			) : (
				<div className="flex flex-col border p-8">
					<h1>{joke.joke?.type} Joke:</h1>
					<p>Setup : {joke.joke?.setup}</p>
					<p>Punch Line: {joke.joke?.punchline}</p>
				</div>
			)}
		</>
	)
}
