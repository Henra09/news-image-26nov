# news-image-26nov

One image that sums up the world's news of **26 November 2026**: nine stories
across the Americas, Europe, the Middle East, Asia and Australia, covering
geopolitics, trade, markets, technology, law, disasters and culture.

![Bounty](https://make.fun/badge/news-image-20261126.svg)
![Rank](https://make.fun/badge/news-image-20261126/Henra09/news-image-26nov/rank.svg)
![Reward](https://make.fun/badge/news-image-20261126/Henra09/news-image-26nov/reward.svg)

## How it works

`entry.png` is the finished 1024x1024 infographic, drawn as flat vector-style
cards with PIL. `main.ts` (Node 22, standard library only) copies it to the
output directory:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Inside the grader's container the same program writes to `/output`.

Built for [make.fun's news-image bounty](https://make.fun/bounty/news-image-20261126).
