import Image from 'next/image'
import { getMeme } from '@/lib/dal/dal'

export default async function MemeComponent() {
	const meme = await getMeme()

	return (
		<div className="flex flex-col">
			{meme.error ? (
				<>
					<h1>Meme:</h1>
					<p>Error Loading meme</p>
				</>
			) : (
				<>
					<h1>Meme:</h1>
					<h2>{meme.meme?.name}</h2>
					{meme.meme?.url && (
						<Image
							alt={meme.meme.name}
							height={meme.meme.height}
							src={meme.meme.url}
							style={{
								width: '100%',
								height: 'auto',
							}}
							width={meme.meme.width}
						/>
					)}
				</>
			)}
		</div>
	)
}
