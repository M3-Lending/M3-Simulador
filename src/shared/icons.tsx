import feather from "feather-icons";
import React from "react";

type PropsSvg = React.ComponentProps<"svg">;

export const Icons = {
  ArrowDown: ({ ...PropsSvg }: PropsSvg) => (
    <svg
      {...PropsSvg}
      dangerouslySetInnerHTML={{
        __html: feather.icons["arrow-down"].toSvg(),
      }}
    />
  ),
};
