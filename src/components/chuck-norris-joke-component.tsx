export default async function JokeChuckNorrisComponent({
	jokePromise,
}: {
	jokePromise: Promise<
		| {
				value: string
				error?: undefined
		  }
		| {
				error: string
				value?: undefined
		  }
	>
}) {
	const joke = await jokePromise

	return (
		<div className="flex flex-col border p-8">
			{joke.error ? (
				<>
					<h1>Chuck Norris Joke:</h1>
					<p>Error Loading joke</p>
				</>
			) : (
				<>
					<h1>Chuck Norris Joke:</h1>
					<p>{joke.value}</p>
				</>
			)}
		</div>
	)
}
