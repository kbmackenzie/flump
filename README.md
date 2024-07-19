A simple CLI tool for mass-downloading full-quality images from Fandom wiki pages' [image galleries][2].

I created this tool because I wanted to save a ton of images from Fandom wiki page galleries and I had trouble mass-downloading them with regular image scraping tools. As it turns out, most image scrapers online fail to scrape full-quality images from Fandom wiki pages' image galleries because the URL to the full-quality version of a given image is often not present in the DOM **until** the [image lightbox][1] is opened—which requires user interaction.

This tool gets around that limitation. It uses [puppeteer][3] and is designed to be **reliable**—*not* fast. For big pages (like [this one][4]), it can take around 5 minutes to download everything.

## Install

This tool can be installed with NPM:
```bash
npm install -g flump
```

## Usage

All you have to do is pass the URL to the wiki page as an argument:
```bash
flump "page-url-here"
```
You can also set the destination folder for the images:
```bash
flump "page-url-here" --output="folder-name"
```

## Command-Line Options

```
Usage: flump [options] <url>

Fandom wiki gallery scraper.

Arguments:
  url                  URL of a Fandom wiki page to scrape

Options:
  -V, --version        output the version number
  -o, --output <path>  directory where images should be dumped
  -q, --quiet          silence log messages
  -h, --help           display help for command
```

[1]: <https://community.fandom.com/wiki/Help:Image_lightbox>
[2]: <https://community.fandom.com/wiki/Help:Galleries>
[3]: <https://github.com/puppeteer/puppeteer>
[4]: <https://jojo.fandom.com/wiki/Gyro_Zeppeli>
