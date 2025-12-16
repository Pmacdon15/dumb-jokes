import { getChuckNorrisJoke } from '@/lib/dal/dal'

export default async function JokeChuckNorrisComponent() {
	const joke = await getChuckNorrisJoke()

	return (
		<div className="flex flex-col">
			{joke.error ? (
				<>
					<h1 style={{ color: 'var(--accent1)' }}>
						Chuck Norris Joke:
					</h1>
					<p>Error Loading joke</p>
				</>
			) : (
				<>
					<h1 style={{ color: 'var(--accent1)' }}>
						Chuck Norris Joke:
					</h1>
					<p>{joke.value}</p>
				</>
			)}
		</div>
	)
}
