const SITES: Record<string, string | ((args: string) => string) | undefined> = {
	// Default
	help: 'https://github.com/alii/search/issues',
	
	// Package Managers
	yarn: 'https://yarnpkg.com/?q={q}&p=1',
	npm: 'https://npmjs.org/package/{q}',
	
	// Domains 
	namelix: 'https://namelix.com/app/?keywords={q}',
	namecheap: 'http://www.namecheap.com/domains/domain-name-search/results.aspx?domain={q}&utm_source=opensearch',
	
	// Programming
	git: 'https://github.com/search?q={q}',
	github: 'https://github.com/{q}',
	stackoverflow: 'https://stackoverflow.com/search?q={q}',
	codepen: 'https://codepen.io/search/pens?q={q}',
	pypi: 'https://pypi.org/project/{q}/',
	discordpy: 'https://discordpy.readthedocs.io/en/latest/search.html?q={q}',
	dpy: 'https://discordpy.readthedocs.io/en/latest/search.html?q={q}',
	gitlab: 'https://gitlab.com/search?search={q}',
	crates: 'https://crates.io/search?q={q}',
	javadoc: args => `https://docs.oracle.com/javase/8/docs/api/${args.replace(/\./g, '/')}.html`,
	lh: 'http://localhost:3000',
	lhp: 'http://localhost:{q}',
	rust: 'https://doc.rust-lang.org/book/?search={q}',
	
	// Design
	figma: 'https://www.figma.com/community/search?model_type=hub_files&q={q}',
	
	// Products
	producthunt: 'https://www.producthunt.com/search?q={q}',

	// Search Engines
	google: 'https://google.com/search?q={q}',
	duck: 'https://duckduckgo.com/?q={q}',

	// Music		
	genius: 'https://genius.com/search?q={q}',
	spotify: 'https://open.spotify.com/search/{q}',	
	musicstax: 'https://musicstax.com/search?q={q}',
	soundcloud: 'https://soundcloud.com/search?q={q}',
	bandcamp: 'https://bandcamp.com/search?q={q}',
	
	// Entertainment
	youtube: 'https://www.youtube.com/results?search_query={q}&page={startPage?}&utm_source=opensearch',
	yt: 'https://www.youtube.com/results?search_query={q}&page={startPage?}&utm_source=opensearch',
	gyazo: 'https://gyazo.com/search/{q}',
	ig: 'https://instagram.com/{q}',
	twitch: 'https://www.twitch.tv/{q}',
	twitter: 'https://twitter.com/search?q={q}&src=typed_query',
	maps: 'https://www.google.com/maps/search/{q}',
	reddit: 'https://www.reddit.com/search/?q={q}',
	pinterest: 'http://www.pinterest.com/search/pins/?q={q}&rs=direct_navigation',
	giggl: 'https://canary.giggl.app/portal/{q}',
	subso: 'https://sub.so/{q}',
	fb: 'https://www.facebook.com/search/top/?q={q}',
	techboard: 'https://boards.4channel.org/search#/{q}/g',
	googleimages: 'https://www.google.com/search?q={q}&tbm=isch',

	// Shopping
	amazon: 'https://www.amazon.com/s?k={q}',
	geizhals: 'https://geizhals.de/?fs={q}',
	ebay: 'https://www.ebay.com/sch/i.html?_nkw={q}',
	newegg: 'https://www.newegg.com/p/pl?d={q}',

	// Anime
	anilist: 'https://anilist.co/search/anime?search={q}',
	myanimelist: 'https://myanimelist.net/search/all?q={q}',

	// Misc
	imp: 'https://impb.in/p/{q}',
	imperial: 'https://imperialb.in/p/{p}',
	urban: 'https://www.urbandictionary.com/define.php?term={q}',
	gdrive: 'https://drive.google.com/drive/search?q={q}'
};

function handleRequest(request: Request) {
	const url = new URL(request.url);
	const query = url.searchParams.get('q') ?? '';
	const engine = url.searchParams.get('engine') ?? SITES.google;

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

	return Response.redirect(engine.replace('{q}', query), 301);
}

addEventListener('fetch', event => event.respondWith(handleRequest(event.request)));
