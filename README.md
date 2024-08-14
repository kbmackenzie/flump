A simple CLI tool for mass-downloading full-size images from Fandom wiki pages' [image galleries][1].

## Contents
- [Installation](#installation)
- [Usage](#usage)
  - [Command-Line Options](#command-line-options)
- [API](#api)

In Fandom galleries, images are usually scaled down and the URL to the full-size image is often not present in the DOM until a user **clicks** on the image thumbnail (opening the [image lightbox][2]). Because of this, most simple image scrapers end up downloading very scaled-down, lower quality versions of images from galleries. The images in galleries are also often lazy loaded, which makes scraping harder.

This tool gets around that. It uses [puppeteer][3] and is designed to be **reliable**—*not* fast. For big pages (like [this one][4]), it can take around 5 minutes to download everything.

**Note:** Images that are not part of a Fandom gallery (see [this definition][1]) are not downloaded.

## Installation

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

### Command-Line Options

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

## API
  
* [flump](#module_flump)
    * _static_
        * [.scrapeImages(url)](#module_flump.scrapeImages) ⇒ <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>
        * [.downloadImages(url, options)](#module_flump.downloadImages) ⇒ <code>Promise.&lt;void&gt;</code>
    * _inner_
        * [~FlumpOptions](#module_flump..FlumpOptions) : <code>Object</code>

<a name="module_flump.scrapeImages"></a>

### flump.scrapeImages(url) ⇒ <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>
Scrape a Fandom wiki page for gallery images and get their URLs.

**Kind**: static method of [<code>flump</code>](#module_flump)  
**Returns**: <code>Promise.&lt;Array.&lt;string&gt;&gt;</code> - A list of image URLs as strings.  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | URL to a Fandom character page. |

<a name="module_flump.downloadImages"></a>

### flump.downloadImages(url, options) ⇒ <code>Promise.&lt;void&gt;</code>
Scrape a Fandom wiki page for gallery images and download all of them.

**Kind**: static method of [<code>flump</code>](#module_flump)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | URL to a Fandom character page. |
| options | <code>FlumpOptions</code> | Additional options. See [FlumpOptions](#module_flump..FlumpOptions). |

<a name="module_flump..FlumpOptions"></a>

### flump~FlumpOptions : <code>Object</code>
Additional options passed to [downloadImages](#module_flump.downloadImages).

**Kind**: inner typedef of [<code>flump</code>](#module_flump)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| quiet | <code>boolean</code> | Silence log messages. |
| output | <code>string</code> | The output folder for images. |


[1]: <https://community.fandom.com/wiki/Help:Galleries#Fandom_galleries>
[2]: <https://community.fandom.com/wiki/Help:Image_lightbox>
[3]: <https://github.com/puppeteer/puppeteer>
[4]: <https://jojo.fandom.com/wiki/Gyro_Zeppeli?so=search#Gallery>
