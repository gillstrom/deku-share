/** @jsx dom */
import dom from 'magic-virtual-element';
import cleanQuery from 'clean-query';

export const propTypes = {
	class: {
		type: 'string'
	},
	hashtags: {
		type: 'array'
	},
	id: {
		type: 'string'
	},
	in_reply_to: {
		type: 'string'
	},
	related: {
		type: 'string'
	},
	target: {
		type: 'string'
	},
	text: {
		type: 'string'
	},
	url: {
		type: 'string'
	},
	via: {
		type: 'string'
	}
};

export function render({props}) {
	const {children, hashtags, id, in_reply_to, related, target, text, url, via} = props;
	const c = props.class ? `SocialShare ${props.class}` : 'SocialShare';
	const query = cleanQuery({
		hashtags: hashtags.join(','),
		in_reply_to,
		related,
		text,
		url,
		via
	});

	return (
		<a href={`https://twitter.com/share?${query}`} class={c} id={id} target={target}>
			{children}
		</a>
	);
}
