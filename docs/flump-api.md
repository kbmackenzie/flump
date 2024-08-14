<a name="module_flump"></a>

## flump
Fandom wiki gallery scraper.


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

