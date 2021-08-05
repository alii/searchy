const BANG_MAP: Record<string, string | ((args: string) => string) | undefined> = {
	/* programming related */
	git: 'https://github.com/search?q={q}',
	npm: 'https://npmjs.org/package/{q}',
	github: 'https://github.com/{q}',
	namelix: 'https://namelix.com/app/?keywords={q}',
	namecheap: 'http://www.namecheap.com/domains/domain-name-search/results.aspx?domain={q}&utm_source=opensearch',
	stackoverflow: 'https://stackoverflow.com/search?q={q}',
	twitter: 'https://twitter.com/search?q={q}&src=typed_query',
	urban: 'https://www.urbandictionary.com/define.php?term={q}',
	codepen: 'https://codepen.io/search/pens?q={q}',
	pypi: 'https://pypi.org/project/{q}/',
	discordpy: 'https://discordpy.readthedocs.io/en/latest/search.html?q={q}',
	dpy: 'https://discordpy.readthedocs.io/en/latest/search.html?q={q}',
	gitlab: 'https://gitlab.com/search?search={q}',
	crates: 'https://crates.io/search?q={q}',
	javadoc: args => `https://docs.oracle.com/javase/8/docs/api/${args.replace(/\./g, '/')}.html`,
	help: 'https://github.com/alii/search/blob/master/src/index.ts',
	figma: 'https://www.figma.com/community/search?model_type=hub_files&q={q}',
	producthunt: 'https://www.producthunt.com/search?q={q}',
	yarn: 'https://yarnpkg.com/?q={q}&p=1',
	lh: 'http://localhost:3000',
	rust: 'https://doc.rust-lang.org/book/?search={q}',

	/* search engines */
	duck: 'https://duckduckgo.com/?q={q}',

	/* music */		
	genius: 'https://genius.com/search?q={q}',
	spotify: 'https://open.spotify.com/search/{q}',	
	musicstax: 'https://musicstax.com/search?q={q}',
	soundcloud: 'https://soundcloud.com/search?q={q}',
	bandcamp: 'https://bandcamp.com/search?q={q}',
	
	/* entertainment */
	youtube: 'https://www.youtube.com/results?search_query={q}&page={startPage?}&utm_source=opensearch',
	gyazo: 'https://gyazo.com/search/{q}',
	ig: 'https://instagram.com/{q}',
	twitch: 'https://www.twitch.tv/{q}',
	maps: 'https://www.google.com/maps/search/{q}',
	reddit: 'https://www.reddit.com/search/?q={q}',
	pinterest: 'http://www.pinterest.com/search/pins/?q={q}&rs=direct_navigation',
	giggl: 'https://canary.giggl.app/portal/{q}',
	subso: 'https://sub.so/{q}',
	fb: 'https://www.facebook.com/search/top/?q={q}',

	/* shopping */
	amazon: 'https://www.amazon.com/s?k={q}',
	geizhals: 'https://geizhals.de/?fs={q}',

	/* anime */
	anilist: 'https://anilist.co/search/anime?search={q}',
	myanimelist: 'https://myanimelist.net/search/all?q={q}',

	/* misc */
	imp: 'https://impb.in/p/{q}',
	imperial: 'https://imperialb.in/p/{p}',
};

function handleRequest(request: Request) {
	const url = new URL(request.url);
	const query = url.searchParams.get('q') ?? '';
	const engine = url.searchParams.get('engine') ?? 'https://google.com/search?q={q}';

	if (query.startsWith('!')) {
		const split = query.split(' ');
		const site = BANG_MAP[split[0].toLowerCase().replace('!', '')];

		if (site) {
			const [, ...rest] = split;
			const joined = rest.join(' ');
			const parsed = typeof site === 'function' ? site(joined) : site;

			return Response.redirect(parsed.replace('{q}', joined), 301);
		}
	}

	return Response.redirect(engine.replace('{q}', query), 301);
}

addEventListener('fetch', event => event.respondWith(handleRequest(event.request)));
