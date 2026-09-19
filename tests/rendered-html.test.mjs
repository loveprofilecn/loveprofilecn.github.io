import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${path}`, {headers:{accept:"text/html"}}),{ASSETS:{fetch:async()=>new Response("Not found",{status:404})}},{waitUntil(){},passThroughOnException(){}});
}

test("server renders branded public routes", async()=>{
  for(const path of ["/","/test","/result"]){const response=await render(path);assert.equal(response.status,200);assert.match(response.headers.get("content-type")??"",/^text\/html/i);const html=await response.text();assert.match(html,/LOVE BRAIN INDEX/);assert.doesNotMatch(html,/codex-preview|Your site is taking shape|react-loading-skeleton/)}
});

test("home includes product promise and disclaimer",async()=>{const html=await(await render()).text();assert.match(html,/恋爱脑/);assert.match(html,/24 个恋爱情境/);assert.match(html,/不构成心理诊断/)});
