import assertElement from 'assert-element';
import componentMock from 'component-mock';
import test from 'ava';
import {Facebook, Twitter} from './';

test('facebook', () => {
	const mock = componentMock(Facebook);
	const el = mock.render({props: {
		app_id: 123456,
		class: 'SocialShare-facebook',
		u: 'google.com'
	}});

	assertElement.isNode(el, 'a');
	assertElement.hasClass(el, 'SocialShare');
	assertElement.hasClass(el, 'SocialShare-facebook');
	assertElement.hasAttribute(el, 'href', 'https://facebook.com/sharer.php?app_id=123456&u=google.com');
});

test('twitter', () => {
	const mock = componentMock(Twitter);
	const el = mock.render({props: {
		class: 'SocialShare-twitter',
		hashtags: ['foo', 'bar'],
		in_reply_to: 'testreply',
		target: '_blank',
		url: 'google.com',
		via: 'testvia'
	}});

	assertElement.isNode(el, 'a');
	assertElement.hasClass(el, 'SocialShare');
	assertElement.hasClass(el, 'SocialShare-twitter');
	assertElement.hasAttribute(el, 'target', '_blank');
	assertElement.hasAttribute(el, 'href', 'https://twitter.com/share?hashtags=foo%2Cbar&in_reply_to=testreply&url=google.com&via=testvia');
});
