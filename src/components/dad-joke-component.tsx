import { getDadJoke } from '@/lib/dal/dal'

export default async function DadJokeComponent() {
	const dadJoke = await getDadJoke()

	return (
		<div className="flex flex-col">
			{dadJoke.error ? (
				<>
					<h1>Dad Joke:</h1>
					<p>Error Loading joke</p>
				</>
			) : (
				<>
					<h1>Dad Joke:</h1>
					<p>{dadJoke.joke?.joke}</p>
				</>
			)}
		</div>
	)
}
