import { Workspace, registerPlugin } from "runtime/core.ts";
import { GithubCheckRunPlugin } from "pkg/buildy/github@1/plugins.ts";

export async function setup(ws: Workspace) {
  registerPlugin(new GithubCheckRunPlugin({
    repositorySlug: 'devsnek/buildy-test',
    name: (ws: Workspace) => {
      if (ws.job.task === '.ci/pipeline.ts') {
        return 'Click "Details" to start CI -->';
      }
      return ws.job.task;
    },
  }));
}
