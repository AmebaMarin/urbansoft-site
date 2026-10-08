// 로컬 확인용 정적 서버: node serve.mjs  (http://localhost:5173)
import { createServer } from 'node:http';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const base = dirname(fileURLToPath(import.meta.url));
const dist = join(base, 'docs');
const T = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.xml': 'application/xml', '.txt': 'text/plain' };
createServer((req, res) => {
  const u = decodeURIComponent(req.url.split('?')[0]);
  let p = join(dist, u);
  if (!p.startsWith(dist)) { res.writeHead(403).end(); return; }
  if (existsSync(p) && statSync(p).isDirectory()) p = join(p, 'index.html');
  if (!existsSync(p)) { res.writeHead(404).end('not found'); return; }
  res.writeHead(200, { 'Content-Type': T[extname(p)] || 'application/octet-stream' }).end(readFileSync(p));
}).listen(5173, () => console.log('http://localhost:5173'));
