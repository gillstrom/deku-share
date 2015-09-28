/** @jsx dom */
import dom from 'magic-virtual-element';
import cleanQuery from 'clean-query';

export const propTypes = {
	app_id: {
		type: 'string'
	},
	class: {
		type: 'string'
	},
	id: {
		type: 'string'
	},
	target: {
		type: 'string'
	},
	u: {
		type: 'string'
	}
};

export function render({props}) {
	const {app_id, children, id, target, u} = props;
	const c = props.class ? `SocialShare ${props.class}` : 'SocialShare';
	const query = cleanQuery({
		app_id,
		u
	});

	return (
		<a href={`https://facebook.com/sharer.php?${query}`} class={c} id={id} target={target}>
			{children}
		</a>
	);
}
