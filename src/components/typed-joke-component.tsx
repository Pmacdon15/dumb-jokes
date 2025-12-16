import { getTypedJoke } from '@/lib/dal/dal'

export default async function TypedJokeComponent() {
	const joke = await getTypedJoke()

	return (
		<>
			{joke.error ? (
				<>
					<h1 style={{ color: 'var(--accent1)' }}>Typed Joke:</h1>
					<p>Error Loading joke</p>
				</>
			) : (
				<div className="flex flex-col">
					<h1 style={{ color: 'var(--accent1)' }}>
						{joke.joke?.type} Joke:
					</h1>
					<p>Setup : {joke.joke?.setup}</p>
					<p>Punch Line: {joke.joke?.punchline}</p>
				</div>
			)}
		</>
	)
}
