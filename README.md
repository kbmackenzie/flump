A simple tool for scraping full-size images from Fandom wiki pages' [image galleries][2].

I created this tool because I wanted to save a lot of images from Fandom wiki image galleries, and clicking on each one + waiting for the [image lightbox][1] to open was too tiring.

As it turns out, __most__ image scrapers online fail to scrape full-size images on Fandom because often the URL to the full-size image isn't present in the DOM at all **until** the [image lightbox][1] is opened—which requires user interaction.

This tool gets around that limitation. It uses [puppeteer][3] and is designed to be **reliable**—*not* fast.

## Install
This tool can be installed with NPM:
```bash
npm install -g flump
```

## Usage
```
Usage: flump [options] <url>

Fandom wiki gallery scraper.

Arguments:
  url                  URL of a Fandom wiki page to scrape

Options:
  -V, --version        output the version number
  -o, --output <path>  directory where images should be dumped
  -h, --help           display help for command
```

[1]: <https://community.fandom.com/wiki/Help:Image_lightbox>
[2]: <https://community.fandom.com/wiki/Help:Galleries>
[3]: <https://github.com/puppeteer/puppeteer>
