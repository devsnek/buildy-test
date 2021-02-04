import { Workspace } from "runtime/core.ts";
import { Button, addButton } from "runtime/button.ts";

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
