import { shortenText } from '../utils/functions';
import { wordCount, attachUserName } from '../../server/utils';
import { shortText, longText, posts, users } from './__data__/testData';

test(`shortenText doesn't shorten text with less than 100 characters`, () => {
    expect(shortenText(shortText)).toHaveLength(29);
});

test(`shortenText shortens text with more than 100 characters and adds an ellipses`, () => {
    let shortened = shortenText(longText);
    expect(shortened).not.toHaveLength(longText.length);
    expect(shortened.slice(-3)).toBe('...');
});

test(`wordCount returns the correct number of words`, () => {
    expect(wordCount(posts)).toBe(233);
});

test('attachUserName should correctly attach a users full name to a post', () => {
    const newPosts = attachUserName(users, posts);
    expect(newPosts[0]).toHaveProperty('displayName');
  });

test(`Attach username removes any post with no matching user`, () => {
    let newPosts = attachUserName(users, posts);
    let deletedPost = posts[5];
    expect(newPosts).not.toContainEqual('deletedPost')
});