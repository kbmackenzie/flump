A simple CLI tool for mass-downloading full-quality images from Fandom wiki pages' [image galleries][1].

In Fandom image galleries, images are usually scaled down, and the URL to the full-size version of an image is not present in the DOM until a user **clicks** on an image thumbnail and opens the [image lightbox][2]. Because of this, simple image scrapers typically end up downloading very scaled-down, lower quality versions of images from galleries. Additionally, images are often lazy loaded, which makes scraping harder.

This tool gets around that. It uses [puppeteer][3] and is designed to be **reliable**—*not* fast. For big pages (like [this one][4]), it can take around 5 minutes to download everything.

**Note:** Images that are not part of a Fandom gallery (see [this definition][1]) are not downloaded.

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

[1]: <https://community.fandom.com/wiki/Help:Galleries#Fandom_galleries>
[2]: <https://community.fandom.com/wiki/Help:Image_lightbox>
[3]: <https://github.com/puppeteer/puppeteer>
[4]: <https://jojo.fandom.com/wiki/Gyro_Zeppeli?so=search#Gallery>
