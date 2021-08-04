addEventListener('fetch', event => {
	event.respondWith(handleRequest(event.request));
});

const BANG_MAP = {
	twitter: "https://twitter.com/search?q={q}&src=typed_query",
	urban: "https://www.urbandictionary.com/define.php?term={q}",
	git: "https://github.com/search?q={q}",
	duck: "https://duckduckgo.com/?q={q}",
	npm: "https://npmjs.org/package/{q}",
	github: "https://github.com/{q}",
	namelix: "https://namelix.com/app/?keywords={q}",
	namecheap: "http://www.namecheap.com/domains/domain-name-search/results.aspx?domain={q}&utm_source=opensearch",
	pinterest: "http://www.pinterest.com/search/pins/?q={q}&rs=direct_navigation",
	stackoverflow: "https://stackoverflow.com/search?q={q}",
	youtube: "https://www.youtube.com/results?search_query={q}&page={startPage?}&utm_source=opensearch",
	gyazo: "https://gyazo.com/search/{q}",
	codepen: "https://codepen.io/search/pens?q={q}",
	genius: "https://genius.com/search?q={q}",
	spotify: "https://open.spotify.com/search/{q}",
	pypi: "https://pypi.org/project/{q}/",
	musicstax: "https://musicstax.com/search?q={q}",
	discordpy: "https://discordpy.readthedocs.io/en/latest/search.html?q={q}",
	dpy: "https://discordpy.readthedocs.io/en/latest/search.html?q={q}",
	ig: "https://instagram.com/{q}",
	gitlab: "https://gitlab.com/search?search={q}",
	twitch: "https://www.twitch.tv/{q}",
	maps: "https://www.google.com/maps/search/{q}",
	reddit: "https://www.reddit.com/search/?q={q}",
	geizhals: "https://geizhals.de/?fs={q}",
	amazon: "https://www.amazon.com/s?k={q}",
	crates: "https://crates.io/search?q={q}",
	anilist: "https://anilist.co/search/anime?search={q}",
	myanimelist: "https://myanimelist.net/search/all?q={q}",
	lh: "https://localhost:3000",
	javadoc: args => `https://docs.oracle.com/javase/8/docs/api/${args.replace(/\./g, "/")}.html`,
};

function handleRequest(request) {
	const url = new URL(request.url);
	const query = url.searchParams.get('q') ?? '';

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

	return Response.redirect('https://google.com/search?q=' + query, 301);
}
