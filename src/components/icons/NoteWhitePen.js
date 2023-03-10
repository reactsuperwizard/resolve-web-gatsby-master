import React from 'react';

export default function NoteWhitePenIcon({
  width = 65,
  height = 66,
  style = {},
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={width}
      height={height}
      style={style}
      viewBox="0 0 65 66"
    >
      <path
        fill="#1F325D"
        d="M2.3335 2.16315V.163147H.333496V2.16315H2.3335Zm43.1917 2c1.1045 0 2-.89543 2-2s-.8955-2.000003-2-2.000003V4.16315Zm5.1744 59.83675v2h2v-2h-2Zm-48.3661 0H.333496v2H2.3335v-2Zm50.3661-22.8532c0-1.1046-.8954-2-2-2s-2 .8954-2 2h4ZM2.3335 4.16315h43.1917V.163147H2.3335V4.16315ZM50.6996 61.9999H2.3335v4h48.3661v-4Zm-46.3661 2V2.16315H.333496V63.9999H4.3335Zm44.3661-22.8532v22.8532h4V41.1467h-4Z"
      />
      <path
        stroke="#1F325D"
        strokeWidth="4"
        d="M53.4129 6.16171c1.0611-1.32057 2.976-1.56675 4.3366-.55751 1.3606 1.00923 1.6807 2.91319.7248 4.31181L38.2396 39.5235c-1.3669 2.0001-3.4135 3.436-5.7594 4.0409l-3.5705.9205-.155-3.684c-.1019-2.4204.6784-4.7956 2.1958-6.6841L53.4129 6.16171Z"
      />
      <path
        stroke="#1F325D"
        strokeLinecap="round"
        strokeWidth="4"
        d="M12.6724 14.0438h24.0748m-24.0748 8.5195h15.5303m-15.5303 8.5182h10.0374M12.6724 51.9186h8.3471"
      />
    </svg>
  );
}
