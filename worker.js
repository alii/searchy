addEventListener("fetch", event => {
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
};

function handleRequest(request) {
	const url = new URL(request.url);
	const query = url.searchParams.get("q") ?? "";

	if (query.startsWith("!")) {
		const split = query.split(" ");
		const site = BANG_MAP[split[0].toLowerCase().replace("!", "")];

		if (site) {
			const [, ...rest] = split;
			return Response.redirect(site.replace("{q}", rest.join(" ")), 301);
		}
	}

	return Response.redirect("https://google.com/search?q=" + query, 301);
}
