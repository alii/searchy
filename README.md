# search

Supercharge your searching with a simple cloudflare worker.

### Setup Guide:

Add `https://search.alistair.sh/?q=` as a custom search engine to your browser. For Chrome/Chromium and Firefox/Waterfox, you would need to add `%s` on the end of that. Consult your browser's documentation for relevant information.

#### Fallback Engines

If you prefer duckduckgo, you can set your URL to the following to have your searched routed through that instead:

```
https://search.alistair.sh/?q=%s&engine=https:%2f%2fduckduckgo.com%2f%3fq={q}
```

&nbsp;

### Usage Guide:

Using your browser as normal will funnel searches through to google's search engine (or a custom set one as shown in 'Fallback Engines').

To use the powerful part of this project and search through a variety of mainstream sites use the ``![site] [search data]`` structure to search any search data on any of the specific sites supported in this project.

**Example:** ``!yt cats`` will search for cats on youtube :)

To see which sites are supported and what their shortcuts are check out [`/src/links.ts`](/src/links.ts).

&nbsp;

### Visual Setup Guide

<details>
<summary>
<strong>
Chrome/Chromium 
</strong>
</summary>
<img src="https://user-images.githubusercontent.com/98224660/179482959-622e6694-2564-4b32-9ed2-05dc32a75d76.png"/>
<img src="https://user-images.githubusercontent.com/98224660/179483026-67d58477-1abf-475d-930a-5660ad28635d.png"/>
<img src="https://user-images.githubusercontent.com/98224660/179483042-1e351c37-14ff-44e0-b880-7ced2538cbe8.png"/>
<img src="https://user-images.githubusercontent.com/98224660/179483058-1aa03523-2d53-4ea9-abfe-99fa794f5f8e.png"/> <br>
<img src="https://user-images.githubusercontent.com/98224660/179483079-789200bd-f962-440d-bed0-05b595594c82.png"/> <br>
It says:

```
alii/search (Can be named whatever)

alii/search (Can also be whatever)

https://search.alistair.sh/?q=%s
```
<img src="https://user-images.githubusercontent.com/98224660/179483106-d5a7bff2-cfb4-4c3e-a753-3778d91faba5.png"/> <br>
<img src="https://user-images.githubusercontent.com/98224660/179483127-75f96f91-c061-46fe-ad18-e97db473edcc.png"/>
</details>

<details>
<summary>
<strong>
Firefox/Waterfox
</strong>
</summary>
<img src="https://user-images.githubusercontent.com/98224660/179487878-d37b0647-a7f6-4e4f-b47f-6037048e9ade.png"/>
<img src="https://user-images.githubusercontent.com/98224660/179487870-0a38d09f-6409-4a68-ba57-5ef5f7f231b8.png"/>
<img src="https://user-images.githubusercontent.com/98224660/179487875-e8445d02-3c46-4a27-bc61-7996dc8e58c7.png"/>
<img src="https://user-images.githubusercontent.com/98224660/179487863-27a37f99-a8be-4fa5-8e7c-d5c7555f400e.png"/>
<img src="https://user-images.githubusercontent.com/98224660/179487876-8292ce36-750f-404f-ab4a-f7721a5591a3.png"/>
<img src="https://user-images.githubusercontent.com/98224660/179487873-8e7cdc31-c37c-4b14-a156-d310c30ab61d.png"/>
<img src="https://user-images.githubusercontent.com/98224660/179487872-0beea08b-39e0-42ac-aaeb-621936ee20ad.png"/>
</details
