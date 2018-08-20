# Random Color Seeded

A simple CLI tool to generate a random color with seed.

Utilizes [HSLuv](http://www.hsluv.org/) to easily make random colors with consistent perceived levels of saturation and lightness 
Utilizes [seedrandom](https://github.com/davidbau/seedrandom) for seeding capabilities
Configurable using command line srguments

Install:

```
npm i -g random-color-seeded
``` 
# Run

```bash
random-color-seeded foo
```

Default Saturation and Lightness is 90. You can set both via command line flags within the range of 1-100:

```
random-color-seeded --lightness=50 --saturation=70 foo
```

You might also utlize environment vars to define Seed / Saturation / Lightness:

```
LIGHTNESS=50 SATURATION=70 random-color-seeded foo
```
