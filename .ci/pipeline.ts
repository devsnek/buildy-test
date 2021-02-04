import { Workspace, registerPlugin } from "runtime/core.ts";
import { Button, addButton } from "runtime/button.ts";
import { GithubCheckRunPlugin } from "pkg/buildy/github@1/plugins.ts";

export async function setup(ws: Workspace) {
  registerPlugin(new GithubCheckRunPlugin({
    repositorySlug: 'devsnek/buildy-test',
  }));
}

export async function run(ws: Workspace) {
    console.log(`Hello World! (sha = ${ws.sha})`);
    await addButton(Button.createJob({
      name: 'demo button',
      task: '.ci/pipeline.ts:button',
    }));
}

export async function button(ws: Workspace) {
  console.log('The button was pressed!');
}
