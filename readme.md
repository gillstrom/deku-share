# deku-share

> Social media share link components for deku


## Install

```
$ npm install --save deku-share
```


## Usage

```js
import {Facebook, Twitter} from 'deku-share';

export function render() {
	return (
		<div>
			<Facebook u="http://google.com">
				Share on Facebook
			</Facebook>

			<Twitter url="http://google.com" hashtags={['foo', 'bar']}>
				Share on Twitter
			</Twitter>
		</div>
	);
}
```

## Components

All components has `class`, `target` and `id` as attributes.  
Specific attributes can be found here:

* [Facebook](https://github.com/vinkla/awesome-share-links#facebook)
* [GooglePlus](https://github.com/vinkla/awesome-share-links#google-plus)
* [LinkedIn](https://github.com/vinkla/awesome-share-links#linked-in)
* [Pinterest](https://github.com/vinkla/awesome-share-links#pinterest)
* [Reddit](https://github.com/vinkla/awesome-share-links#reddit)
* [StumbleUpon](https://github.com/vinkla/awesome-share-links#stumbleupon)
* [Twitter](https://github.com/vinkla/awesome-share-links#twitter)


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
