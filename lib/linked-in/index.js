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
	mini: {
		type: 'string'
	},
	source: {
		type: 'string'
	},
	summary: {
		type: 'string'
	},
	target: {
		type: 'string'
	},
	title: {
		type: 'string'
	},
	url: {
		type: 'string'
	}
};

export function render({props}) {
	const {children, id, mini, source, summary, target, title, url} = props;
	const c = props.class ? `SocialShare ${props.class}` : 'SocialShare';
	const query = cleanQuery({
		mini,
		source,
		summary,
		title,
		url
	});

	return (
		<a href={`https://linkedin.com/shareArticle?${query}`} class={c} id={id} target={target}>
			{children}
		</a>
	);
}
