import type * as z from "zod";

import type { selectPublicMonitorSchema } from "@openstatus/db/src/schema";
import { Badge } from "@openstatus/ui";

export function AffectedMonitors({
  monitors,
}: {
  monitors: z.infer<typeof selectPublicMonitorSchema>[];
}) {
  return (
    <ul role="list" className="flex gap-2">
      {monitors.length > 0 ? (
        monitors.map(({ name }, i) => (
          <li key={i} className="text-xs">
            <Badge variant="secondary">{name}</Badge>
          </li>
        ))
      ) : (
        <li className="text-muted-foreground text-sm">Monitor(s) missing</li>
      )}
    </ul>
  );
}
