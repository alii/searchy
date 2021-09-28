import SITES from './links';

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

			return Response.redirect(parsed.replace('{q}', joined), 301);
		}
	}

	return Response.redirect(engine.replace('{q}', encodeURIComponent(query)), 301);
}

addEventListener('fetch', event => event.respondWith(handleRequest(event.request)));
