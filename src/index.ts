import {SITES} from './links';

function encodeChars(text: string) {
	return text.replace(/( |\+)/g, encodeURIComponent);
}

function handleRequest(request: Request) {
	const url = new URL(request.url);

	const query = url.searchParams.get('q') ?? '';
	const engine = (url.searchParams.get('engine') ?? SITES.google) as string;

	if (query.startsWith('!')) {
		const split = query.split(' ');
		const site = SITES[split[0].toLowerCase().replace('!', '')];

		if (site) {
			const [, ...rest] = split;
			const joined = rest.join(' ');
			const parsed = typeof site === 'function' ? site(joined) : site;

			return Response.redirect(parsed.replace('{q}', encodeChars(joined)), 301);
		}

		// The else case here is that they entered a website that doesn't exist
	}

	return Response.redirect(engine.replace('{q}', encodeChars(query)), 301);
}

addEventListener('fetch', event => {
	return event.respondWith(handleRequest(event.request));
});
