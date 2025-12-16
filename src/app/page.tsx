import JokeChuckNorrisComponent from '@/components/chuck-norris-joke-component'
import BorderContainer from '@/components/container/border-container'
import DadJokeComponent from '@/components/dad-joke-component'
import MemeComponent from '@/components/mem-component'
import TypedJokeComponent from '@/components/typed-joke-component'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center gap-12 p-8 md:p-16">
			<h1 className="font-bold text-4xl">Dumb Jokes</h1>
			<BorderContainer>
				<JokeChuckNorrisComponent />
				<TypedJokeComponent />
				<DadJokeComponent />
			</BorderContainer>
			<BorderContainer>
				<MemeComponent />
			</BorderContainer>
		</main>
	)
}
