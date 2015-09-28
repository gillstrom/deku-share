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
	const c = props.class ? `SocialShare ${props.class}` : 'SocialShare';
	const query = cleanQuery({
		title,
		url
	});

	return (
		<a href={`http://reddit.com/submit?${query}`} class={c} id={id} target={target}>
			{children}
		</a>
	);
}
