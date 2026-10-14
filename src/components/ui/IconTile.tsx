import { Icon } from "./Icon";
import type { Item } from "@/lib/site";

export function IconTile({
  item,
  iconSize = 22,
  iconBgColor="bg-leaf-soft"
}: {
  item: Item;
  iconSize?: number;
  iconBgColor?:string
}) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl bg-white/60 p-4 text-center">
      <span className={`grid size-11 place-items-center rounded-full ${iconBgColor} text-leaf`}>
        <Icon name={item.icon} size={iconSize} />
      </span>
      <span className="text-xs font-extrabold leading-tight text-ink">
        {item.title}
      </span>
    </div>
  );
}
