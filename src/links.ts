import {etherscanTypeMap} from './util';

export const SITES: Record<string, string | ((query: string) => string) | undefined> = {
	// Default
	help: 'https://github.com/alii/search/issues',

	// Package Managers
	yarn: 'https://yarnpkg.com/?q={q}&p=1',
	npm: 'https://npmjs.org/package/{q}',
	packagist: 'https://packagist.org/?query={q}',
	pypi: 'https://pypi.org/project/{q}/',
	brew: 'https://formulae.brew.sh/formula/{q}#default',
	aur: 'https://aur.archlinux.org/packages/?K={q}',
	gems: 'https://rubygems.org/search?query={q}',
	hex: 'https://hex.pm/packages?search={q}',
	nuget: 'https://www.nuget.org/packages?q={q}',
	crates: 'https://crates.io/search?q={q}',

	// Domains
	namelix: 'https://namelix.com/app/?keywords={q}',
	namecheap: 'https://www.namecheap.com/domains/registration/results/?domain={q}',
	googledomains: 'https://domains.google.com/registrar/search?searchTerm={q}',
	godaddy: 'https://se.godaddy.com/domainsearch/find?checkAvail=1&domainToCheck={q}',
	porkbun: 'https://porkbun.com/checkout/search?q={q}',
	whois: 'https://who.is/whois/{q}',

	// Programming
	git: 'https://github.com/search?q={q}',
	github: 'https://github.com/{q}',
	gh: 'https://github.com/search?q={q}',
	stackoverflow: 'https://stackoverflow.com/search?q={q}',
	codepen: 'https://codepen.io/search/pens?q={q}',
	discordpy: 'https://discordpy.readthedocs.io/en/latest/search.html?q={q}',
	dpy: 'https://discordpy.readthedocs.io/en/latest/search.html?q={q}',
	discordjs: 'https://discord.js.org/#/docs/main/stable/search?query={q}',
	djs: 'https://discord.js.org/#/docs/main/stable/search?query={q}',
	gitlab: 'https://gitlab.com/search?search={q}',
	javadoc: args => `https://docs.oracle.com/javase/8/docs/api/${args.replace(/\./g, '/')}.html`,
	lh: 'http://localhost:3000',
	lhp: 'http://localhost:{q}',
	rust: 'https://doc.rust-lang.org/book/?search={q}',
	gitea: 'https://gitea.com/explore/repos?tab=&sort=recentupdate&q={q}',
	gopkg: 'https://pkg.go.dev/search?q={q}',
	lighthouse: 'https://developers.google.com/speed/pagespeed/insights/?url={q}',
	dns: 'https://www.nslookup.io/dns-records/{q}',
	tsplay: 'https://www.typescriptlang.org/play?#code/{q}',
	goplay: 'https://goplay.tools/',
	docker: 'https://hub.docker.com/_/{q}',
	mdn: 'https://developer.mozilla.org/en-US/search?q={q}',
	daily: 'https://app.daily.dev/search?q={q}',

	// Search Engines
	google: 'https://google.com/search?q={q}',
	duck: 'https://duckduckgo.com/?q={q}',
	ddg: 'https://duckduckgo.com/?q={q}',
	brave: 'https://search.brave.com/search?q={q}',
	startpage: 'https://www.startpage.com/sp/search?q={q}',
	ecosia: 'https://www.ecosia.org/search?q={q}',
	bing: 'https://www.bing.com/search?q={q}',
	wiby: 'https://wiby.me/?q={q}',

	// Music
	genius: 'https://genius.com/search?q={q}',
	spotify: 'https://open.spotify.com/search/{q}',
	deezer: 'https://www.deezer.com/search/{q}',
	musicstax: 'https://musicstax.com/search?q={q}',
	soundcloud: 'https://soundcloud.com/search?q={q}',
	bandcamp: 'https://bandcamp.com/search?q={q}',
	applemusic: 'https://music.apple.com/search?term={q}',
	ytmusic: 'https://music.youtube.com/search?q={q}',
	musixmatch: 'https://www.musixmatch.com/search/{q}',
	kanye: 'https://open.spotify.com/artist/5K4W6rqBFWDnAN6FQUkS6x', //till donda drops (if it ever does)

	// Movies
	imdb: 'https://www.imdb.com/find?q={q}',
	rotten: 'https://www.rottentomatoes.com/search?search={q}',
	fandango: 'https://www.fandango.com/search?q={q}',
	tmdb: 'https://www.themoviedb.org/search?query={q}',

	// Social
	twitter: 'https://twitter.com/search?q={q}&src=typed_query',
	fb: 'https://www.facebook.com/search/top/?q={q}',
	giggl: 'https://canary.giggl.app/portal/{q}',
	subso: 'https://sub.so/{q}',
	reddit: 'https://www.reddit.com/search/?q={q}',
	'r/': 'https://www.reddit.com/r/{q}',
	'u/': 'https://www.reddit.com/u/{q}',
	pinterest: 'https://www.pinterest.com/search/pins/?q={q}&rs=direct_navigation',
	ig: 'https://instagram.com/{q}/',
	instagram: 'https://instagram.com/{q}',
	tiktok: 'https://www.tiktok.com/search?q={q}',
	discord: 'https://discord.gg/{q}',
	sub: 'https://reddit.com/r/{q}',

	// Video
	youtube: 'https://www.youtube.com/results?search_query={q}&page={startPage?}&utm_source=opensearch',
	odysee: 'https://odysee.com/search?q={q}',
	yt: 'https://www.youtube.com/results?search_query={q}&page={startPage?}&utm_source=opensearch',
	gyazo: 'https://gyazo.com/search/{q}',
	twitch: 'https://www.twitch.tv/{q}',
	netflix: 'https://www.netflix.com/search?q={q}',
	pornhub: 'https://www.pornhub.com/video/search?search={q}',
	nebula: 'https://nebula.app/search?q={q}',

	// Shopping
	amazon: 'https://www.amazon.com/s?k={q}',
	geizhals: 'https://geizhals.de/?fs={q}',
	ebay: 'https://www.ebay.com/sch/i.html?_nkw={q}',
	newegg: 'https://www.newegg.com/p/pl?d={q}',
	amazonde: 'https://www.amazon.de/s?k={q}',
	amazonnl: 'https://www.amazon.nl/s?k={q}',
	amazonfr: 'https://www.amazon.fr/s?k={q}',
	amazonit: 'https://www.amazon.it/s?k={q}',
	amazones: 'https://www.amazon.es/s?k={q}',
	amazonuk: 'https://www.amazon.co.uk/s?k={q}',
	amazonca: 'https://www.amazon.ca/s?k={q}',
	amazonmx: 'https://www.amazon.mx/s?k={q}',
	amazonbr: 'https://www.amazon.com.br/s?k={q}',
	amazonau: 'https://www.amazon.com.au/s?k={q}',
	amazonjp: 'https://www.amazon.co.jp/s?k={q}',
	amazonin: 'https://www.amazon.co.in/s?k={q}',
	amazonse: 'https://www.amazon.se/s?k={q}',
	thalia: 'https://www.thalia.de/suche?sq={q}',
	banggood: 'https://www.banggood.com/search/{q}.html?from=nav',
	aliexpress: 'https://www.aliexpress.com/wholesale?SearchText={q}', // Not entirely sure if this one works or not. -H4rldev
	wish: 'https://www.wish.com/search/{q}', // This site sucks but why not. -H4rldev
	thalia: 'https://www.thalia.de/suche?sq={q}',

	// Anime
	anilist: 'https://anilist.co/search/anime?search={q}',
	myanimelist: 'https://myanimelist.net/search/all?q={q}',
	anidb: 'https://anidb.net/search/anime/?adb.search={q}',
	crunchyroll: 'https://www.crunchyroll.com/search?&q={q}',
	animixplay: 'https://animixplay.to/?q={q}&sengine=gogo',
	sakuta: 'https://sakuta.app/search?q={q}',
	animenewsnetwork: 'https://www.animenewsnetwork.com/search?q={q}',
	ann: 'https://www.animenewsnetwork.com/search?q={q}',

	zoro: 'https://zoro.to/search?keyword={q}',
	mangaupdates: 'https://www.mangaupdates.com/search.html?search={q}',
	'9anime': 'https://9anime.to/search?keyword={q}&vrf=Ux9h8vwyLd',

	// .new
	figma: 'https://figma.new',
	meet: 'https://meet.new',
	repo: 'https://repo.new',
	gist: 'https://gist.new',
	docs: 'https://docs.new',
	slides: 'https://slides.new',
	repl: 'https://replit.new',
	lex: 'https://lex.new',

	// Misc
	imp: 'https://impb.in/p/{q}',
	imperial: 'https://imperialb.in/p/{p}',
	urban: 'https://www.urbandictionary.com/define.php?term={q}',
	gdrive: 'https://drive.google.com/drive/search?q={q}',
	producthunt: 'https://www.producthunt.com/search?q={q}',
	linkedin: 'https://www.linkedin.com/search/results/all/?keywords={q}&origin=GLOBAL_SEARCH_HEADER&sid=*Xz',
	lnkdn: 'https://www.linkedin.com/search/results/all/?keywords={q}&origin=GLOBAL_SEARCH_HEADER&sid=*Xz',
	premid: 'https://premid.app/store?q={q}',
	googleimages: 'https://www.google.com/search?q={q}&tbm=isch',
	maps: 'https://www.google.com/maps/search/{q}',
	presencedb: 'https://www.presencedb.com/search?q={q}',
	polywork: 'https://www.polywork.com/{q}',
	imgur: 'https://imgur.com/search?q={q}',
	imgflip: 'https://imgflip.com/memesearch?q={q}',
	techboard: 'https://boards.4channel.org/search#/{q}/g',
	udemy: 'https://www.udemy.com/courses/search/?src=ukw&q={q}',
	libgen: 'http://libgen.li/index.php?req={q}&res=25',
	gsmarena: 'https://gsmarena.com/res.php3?sSearch={q}',
	phone: 'https://gsmarena.com/res.php3?sSearch={q}',
	ark: 'https://ark.intel.com/content/www/us/en/ark/search.html?_charset_=UTF-8&q={q}',
	intelark: 'https://ark.intel.com/content/www/us/en/ark/search.html?_charset_=UTF-8&q={q}',
	nato: 'https://cryptii.com/pipes/nato-phonetic-alphabet',
	kymeme: 'https://knowyourmeme.com/search?q={q}',
	cheat: 'https://cheat.sh/{q}',
	hackernews: 'https://hn.algolia.com/?q={q}',
	pixiv: 'https://www.pixiv.net/en/tags/{q}',
	translate: 'https://translate.google.com/?sl=auto&tl=en&text={q}&op=translate',
	gmail: 'https://mail.google.com/mail/#search/{q}',
	wayback: 'https://web.archive.org/web/*/{q}',
	// Discord Bot Lists
	topgg: 'https://top.gg/search?q={q}',
	dbleu: 'https://discord-botlist.eu/search?q={q}',
	discordbotlisteu: 'https://discord-botlist.eu/search?q={q}',
	del: 'https://discordextremelist.xyz/en-US/search/?q={q}',
	discordextremelist: 'https://discordextremelist.xyz/en-US/search/?q={q}',
	dbotsgg: 'https://discord.bots.gg/search?q={q}',

	//Torrent Trackers (Optional)
	'1337x': 'https://1337x.to/search/{q}/1/', // Universal for Movies, Shows, Anime, Porn, Software and Games. -H4rldev
	rarbg: 'http://rarbg.to/torrents.php?search={q}', // Movies, Shows and Porn + Some Software. -H4rldev
	rutracker: 'https://rutracker.org/forum/login.php?redirect=tracker.php?nm={q}', // Is in russian and requires an account to search. -H4rldev
	nyaa: 'https://nyaa.si/?f=0&c=0_0&q={q}', // Anime Torrents. -H4rldev
	psa: 'https://psa.pm/?s={q}', // Movies and Shows re-encoded to x265. -H4rldev
	h10anime: 'https://hi10anime.com/?s={q}', // Anime Torrents. -H4rldev
	torrentgalaxy: 'https://torrentgalaxy.mx/', // Filled with popups and ads. Really annoying tracker. -H4rldev
	rutor: 'http://rutor.info/search/{q}', // Russian Games Tracker. -H4rldev
	gamestorrents: 'https://www.gamestorrents.fm/?s={q}', // Spanish or Central/South American Games tracker. -H4rldev
	'gnarly-repacks': 'https://www.gnarly-repacks.site/?s={q}', // Games Site. -H4rldev
	fitgirl: 'https://fitgirl-repacks.site/?s={q}', // One of the most popular sources for repacks of games. Highly recommended. -H4rldev
	'dodi-repacks': 'https://dodi-repacks.site/?s={q}', // A lot of dodi's content is the same as fitgirl's. -H4rldev
	kaoskrew: 'https://kaoskrew.org/search.php?keywords=yeah&fid%5B0%5D=13', // Torrenting forum for games. Many known crackers post their content there. -H4rldev

	// Twitter utils
	tweet: 'https://twitter.com/intent/tweet?text={q}',
	twfollow: 'https://twitter.com/intent/follow?screen_name={q}',
	rt: 'https://twitter.com/intent/retweet?tweet_id={q}',

	// Cryptoooo

	gas: 'https://etherscan.io/gastracker',
	eth: args => {
		const [type, q] = args.split(' ');
		return `https://etherscan.io/${type in etherscanTypeMap ? etherscanTypeMap[type as keyof typeof etherscanTypeMap] : type}/${q}`;
	},

	// Commands (something that has an action rather than a search)
	newportal: args => {
		const formatted = args.startsWith('http') ? args : `https://${args}`;
		return `https://giggl.to/${formatted}`;
	},
};
