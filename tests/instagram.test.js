import assert from 'node:assert/strict';
import { test } from 'node:test';
import { instagramPostUrl } from '../src/lib/instagram.js';

test('normalizes post and reel links; rejects non-post and untrusted links', () => {
  assert.equal(instagramPostUrl(' https://instagram.com/reel/Ab_c-12/?igsh=abc '), 'https://www.instagram.com/reel/Ab_c-12/');
  assert.equal(instagramPostUrl('https://www.instagram.com/p/ABC/'), 'https://www.instagram.com/p/ABC/');
  for (const value of [null, '', 'https://instagram.com/de_partiburen/', 'https://instagram.com.evil.test/p/ABC/', 'javascript:alert(1)', 'https://evil.test/p/ABC/', 'https://user@instagram.com/p/ABC/']) {
    assert.equal(instagramPostUrl(value), undefined);
  }
});
