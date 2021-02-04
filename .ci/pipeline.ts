import { Workspace } from "runtime/core.ts";

export async function run(ws: Workspace) {
    console.log(`Hello World! (sha = ${ws.sha})`);
}
