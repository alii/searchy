# search

Supercharge your searching with a simple cloudflare worker.

### Guide:

Add `https://search.alistair.sh/?q=` as a custom search engine to your browser. For Chrome, you would need to add `%s` on the end of that. Consult your browser's documentation for relevant information.

#### Fallback Engines

If you prefer duckduckgo, you can set your URL to the following to have your searched routed through that instead:

```
https://search.alistair.sh/?q=%s&engine=https:%2f%2fduckduckgo.com%2f%3fq={q}
```

#### Visual Guide

###### note: URL here is outdated, you should replace `search.balls.workers.dev` with `search.alistair.sh` instead.

![First](./guide/01.png)
![Second](./guide/02.png)
![Third](./guide/03.png)
![Last](./guide/04.png)
