import Icon from "./Icon";

type CheckListItem = {
  text: string;
  icon: string;
};

type CheckListProps = {
  items: CheckListItem[];
};

export function CheckList({ items }: CheckListProps) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li
          key={item.text}
          className="flex items-start gap-2.5 text-sm text-ink/85"
        >
          <Icon
            name={item.icon}
            className="mt-0.5 h-4 w-4 shrink-0 text-ember"
            aria-hidden="true"
          />
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  );
}