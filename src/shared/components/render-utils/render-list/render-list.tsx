import React from "react";

type RenderListProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
};

export const RenderListcComponent = <T,>({
  items,
  renderItem,
}: RenderListProps<T>) => {
  return (
    <>
      {items.map((item, index) => (
        <React.Fragment key={index}>{renderItem(item, index)}</React.Fragment>
      ))}
    </>
  );
};

export const RenderList = React.memo(RenderListcComponent) as <T>(
  props: RenderListProps<T>
) => React.JSX.Element;
