# Crunchatizer

A goofy project built in SvelteKit to explore distortion caused by image resizing with various algorithms. Mainly used to refresh my Svelte knowledge post v5 release (runes).

Available at [https://crunchatize.cooldude.cool](https://crunchatize.cooldude.cool)


## Developing

If you want to work on this for some reason, clone the repository and install the dependencies:

```bash
yarn install
```

You can then run the project with hot reload using:

```bash
yarn dev --open
```

## Major Acknowledgements
- [SvelteKit](https://svelte.dev/docs/kit/introduction) - The framework I built this in. Probably the most enjoyable JS framework I've worked in so far.
- [sharp](https://sharp.pixelplumbing.com/) - What I use for image processing on the server. Genuinely impressively fast library. This project would be dead in the water without it.
