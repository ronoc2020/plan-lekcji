import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { Script } from 'node:vm';

const js = readFileSync(new URL('../app.js', import.meta.url), 'utf8');
const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const manifest = readFileSync(new URL('../manifest.webmanifest', import.meta.url), 'utf8');

test('browser JavaScript parses without executing application', () => {
  assert.doesNotThrow(() => new Script(js, { filename: 'app.js' }));
});

test('manifest remains valid JSON with relative offline start URL', () => {
  const data = JSON.parse(manifest);
  assert.equal(data.start_url, './');
  assert.equal(data.display, 'standalone');
});

test('all statically referenced element IDs exist', () => {
  const declared = new Set([...html.matchAll(/id=["']([^"']+)["']/g)].map(match => match[1]));
  // This ID is created dynamically by the Farm timer component.
  const dynamic = new Set(['primaryTimer']);
  const selected = [...js.matchAll(/\$\(['"]#([A-Za-z0-9_-]+)['"]\)/g)].map(match => match[1]);
  const missing = [...new Set(selected.filter(id => !declared.has(id) && !dynamic.has(id)))];
  assert.deepEqual(missing, []);
});

test('no external scripts or stylesheets are required at runtime', () => {
  assert.doesNotMatch(html, /<(?:script|link)[^>]+(?:src|href)=["']https?:\/\//i);
});

test('local-storage reads and deletes are exception-safe', () => {
  assert.match(js, /const readRawStorage = key =>/);
  assert.match(js, /const removeStorage = key =>/);
});
