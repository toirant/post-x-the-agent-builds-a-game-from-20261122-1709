# The agent builds a game from one prompt

[![make.fun](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/toirant/post-x-the-agent-builds-a-game-from-20261122-1709/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/toirant/post-x-the-agent-builds-a-game-from-20261122-1709/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)

Entry for the [make.fun bounty "The agent builds a game from one prompt"](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709) ($20, top 10 share).

## The video

A 36-second vertical clip (1080x1920, `video.mp4`) showing an AI coding agent
building a tiny browser game from one prompt, while you watch:

1. **The prompt** — "Build me a tiny browser game: catch the falling stars
   before they hit the ground. 30 seconds on the clock, score points for
   every star you catch, make it fun and colourful."
2. **The agent working** — the game code being written, line by line.
3. **The finished game running** — Star Catcher, played live in a browser:
   catch the falling stars in the basket, 30 seconds, score and lives.
4. **The end card** — make.fun's referral end card from the press pack,
   with referral code `0dhzvgtg`.

The game itself is in `game/index.html` — vanilla JS canvas, no libraries,
no network. Open it in a browser and play: move with mouse, touch or arrow
keys.

## The post

The video is posted on X as a native video from @toirant. `POST.json` names
its address. `main.ts` (Node 22, stdlib only) copies `POST.json` to
`/output`; the house reads the post itself from X.

## Run

```sh
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It copies `POST.json` to `out/POST.json` and prints nothing on success.
