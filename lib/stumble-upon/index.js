/** @jsx dom */
import dom from 'magic-virtual-element';
import cleanQuery from 'clean-query';

export const propTypes = {
	class: {
		type: 'string'
	},
	id: {
		type: 'string'
	},
	title: {
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
	const {children, id, title, target, url} = props;
	const query = cleanQuery({
		title,
		url
	});

	return (
		<a href={`https://www.stumbleupon.com/submit?${query}`} class={['SocialShare', props.class]} id={id} target={target}>
			{children}
		</a>
	);
}
