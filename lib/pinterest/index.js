/** @jsx dom */
import dom from 'magic-virtual-element';
import cleanQuery from 'clean-query';

export const propTypes = {
	class: {
		type: 'string'
	},
	description: {
		type: 'string'
	},
	id: {
		type: 'string'
	},
	media: {
		type: 'string'
	},
	target: {
		type: 'string'
	},
	url: {
		type: 'string'
	}
};

export function render({props}) {
	const {children, description, id, media, target, url} = props;
	const query = cleanQuery({
		description,
		media,
		url
	});

	return (
		<a href={`https://pinterest.com/pin/create/bookmarklet?${query}`} class={['SocialShare', props.class]} id={id} target={target}>
			{children}
		</a>
	);
}
