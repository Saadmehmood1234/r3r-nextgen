import type { Item } from "@/lib/site";
import Icon from "./Icon";

// export function IconTile({
//   item,
//   iconSize = 22,
//   iconBgColor="bg-leaf-soft"
// }: {
//   item: Item;
//   iconSize?: number;
//   iconBgColor?:string
// }) {
//   return (
//     <div className="flex h-full w-full flex-col items-center gap-2 rounded-xl bg-white/60 p-4 text-center">
//       <span className={`grid size-11 place-items-center rounded-full ${iconBgColor} text-leaf`}>
//         <Icon name={item.icon} size={iconSize} />
//       </span>
//       <span className="text-xs font-bold leading-tight text-ink">
//         {item.title}
//       </span>
//     </div>
//   );
// }


export function IconTile({
  icon,
  title,
  className = "",
}: {
  icon: string;
  title: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-xl bg-white/60 p-3 text-center ${className}`}
    >
      <span className="text-leaf">
        <Icon name={icon} className="h-7 w-7" />
      </span>
      <span className="text-[11px] font-semibold leading-tight text-ink">
        {title}
      </span>
    </div>
  );
}
