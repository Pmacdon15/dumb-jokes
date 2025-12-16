import JokeChuckNorrisComponent from '@/components/chuck-norris-joke-component'
import DadJokeComponent from '@/components/dad-joke-component'
import MemeComponent from '@/components/mem-component'
import TypedJokeComponent from '@/components/typed-joke-component'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center gap-12 p-24">
			<h1 className="font-bold text-4xl">Dumb Jokes</h1>
			<div className="flex flex-col gap-8 rounded-lg border-2 border-foreground)] p-8">
				<JokeChuckNorrisComponent />
				<TypedJokeComponent />
				<DadJokeComponent />
			</div>
<div className="flex flex-col gap-8 rounded-lg border-2 border-foreground)] p-8">
			<MemeComponent />
			</div>
		</main>
	)
}
