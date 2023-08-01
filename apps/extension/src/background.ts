import {SITES, template} from '@searchy/links';
import Fuse from 'fuse.js';

const repo = 'alii/searchy';

const fuse = new Fuse(Object.keys(SITES), {
	shouldSort: true,
	threshold: 0.4,
});

// preview search results
chrome.omnibox.onInputChanged.addListener((text, suggest) => {
	const split = text.split(' ');
	const site = SITES[split[0].toLowerCase().replace('!', '')];
	const suggestions: chrome.omnibox.SuggestResult[] = [];

	// if the first word is a site, use that
	if (site) {
		const [, ...rest] = split;
		const joined = rest.join(' ');
		const parsed = typeof site === 'function' ? site(joined) : site;

		const url = template(parsed, joined);
		console.log(url);

		suggestions.push({content: url, description: `Preview: ${url}`});
	} else {
		// otherwise, use fuzzy to recommend sites
		const results = fuse.search(text, {limit: 5});

		suggestions.push(
			...results.map(result => {
				const site = SITES[result.item]!;
				const parsed = typeof site === 'function' ? site(text) : site;

				const url = template(parsed, text);
				console.log(url);

				return {content: url, description: `${result.item}: ${url}`};
			})
		);
	}

	suggest(suggestions);
});

// This event is fired with the user accepts the input in the omnibox.
chrome.omnibox.onInputEntered.addListener(text => {
	const split = text.split(' ');
	const site = SITES[split[0].toLowerCase().replace('!', '')];

	if (site) {
		const [, ...rest] = split;
		const joined = rest.join(' ');
		const parsed = typeof site === 'function' ? site(joined) : site;

		const url = parsed.replace('{q}', joined);
		console.log(url);

		void navigate(url);
	}
});

async function navigate(url: string) {
	const [tab] = await chrome.tabs.query({active: true, currentWindow: true});

	if (tab) {
		return chrome.tabs.update(tab.id!, {url});
	}

	return chrome.tabs.create({url});
}

chrome.runtime.onInstalled.addListener(details => {
	const cases: Record<chrome.runtime.OnInstalledReason, string | undefined> = {
		[chrome.runtime.OnInstalledReason.INSTALL]: `https://github.com/${repo}/tree/master/apps/extension#readme`,
		[chrome.runtime.OnInstalledReason.UPDATE]: `https://github.com/${repo}/releases/tags/latest`,
		[chrome.runtime.OnInstalledReason.CHROME_UPDATE]: undefined,
		[chrome.runtime.OnInstalledReason.SHARED_MODULE_UPDATE]: undefined,
	};
	const url = cases[details.reason];
	if (url) void navigate(url);
});
