import { Icon } from "./Icon";
import type { Item } from "@/lib/site";

export function IconTile({ item }: { item: Item }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl bg-white/60 p-4 text-center">
      <span className="grid size-11 place-items-center rounded-full bg-leaf-soft text-leaf">
        <Icon name={item.icon} size={22} />
      </span>
      <span className="text-xs font-semibold leading-tight text-ink">
        {item.title}
      </span>
    </div>
  );
}
