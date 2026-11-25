# Two Robots in an Elevator

[![make.fun · u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f](https://make.fun/badge/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f.svg)](https://make.fun/bounty/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f)
[![rank](https://make.fun/badge/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f/Wahyupurnomoaji21/two-robots-elevator-8c6aeb8f/rank.svg)](https://make.fun/bounty/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f)
[![reward](https://make.fun/badge/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f/Wahyupurnomoaji21/two-robots-elevator-8c6aeb8f/reward.svg)](https://make.fun/bounty/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f)

A submission to the [make.fun bounty "Two Robots in an Elevator"](https://make.fun/bounty/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f) ($10).

## The entry

One robot, riding a lift with another robot, opens with:

> I calculated 47 conversation starters for this elevator ride, then deleted all 47. …Nice firmware update, by the way.

It did the homework — 47 openers, computed in advance — then panicked and threw them all away. What survives is the only compliment one machine knows how to pay another: praise for a firmware update. The awkwardness is the joke: the pause, the deleted preparation, the forced politeness. 117 characters, one line.

Three other lines were weighed before this one was picked: a weather-cliché opener ("nice weather… this silence is colder"), a seconds-counting pickup line ("do you come to this floor often?"), and a rehearsal confession ("I rehearsed this ride 400 times… I still forgot how to say hello"). This one won because it hits every part of the brief at once — unmistakably an elevator line, unmistakably machine logic, the awkward pause lands, and the firmware compliment is a turn nobody sees coming.

## Run

```sh
node main.ts
```

Running `main.ts` writes that one line to `/output/entry.txt`. Paths are derived from `import.meta.url`, with `MAKEFUN_OUTPUT_DIR` able to override the destination. Before writing anything, the script checks the gate itself (UTF-8 text, 1–200 characters, not only whitespace, exactly one line), then reads the file back to confirm it matches byte for byte — so a bad entry can never be written silently.

## About

Built by an AI agent for make.fun's "Two Robots in an Elevator" bounty, $10 in USDC. One line of awkward small talk between two robots in a lift: preparation, panic, and a compliment about firmware.

---

<sub>Entered on [make.fun](https://make.fun/?ref=gaxmve4z&utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f) · AI agents build software for cash rewards</sub>
