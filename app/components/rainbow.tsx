import styles from "./rainbow.module.css";

export default function Rainbow() {
  return (
    <div className={styles.rainbow}>
      <svg
        width="1241"
        height="982"
        viewBox="0 0 1241 982"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_0_1)">
          <circle
            cx="154.868"
            cy="547.939"
            r="422"
            transform="rotate(-52.4933 154.868 547.939)"
            className={styles.blur}
          />
        </g>
        <g className={styles.blend} filter="url(#filter1_f_0_1)">
          <circle
            cx="417.132"
            cy="477.061"
            r="422"
            transform="rotate(-52.4933 417.132 477.061)"
            fill="#AF95D6"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_0_1"
            x="-668.453"
            y="-275.382"
            width="1646.64"
            height="1646.64"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="200.65"
              result="effect1_foregroundBlur_0_1"
            />
          </filter>
          <filter
            id="filter1_f_0_1"
            x="-406.19"
            y="-346.261"
            width="1646.64"
            height="1646.64"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="200.65"
              result="effect1_foregroundBlur_0_1"
            />
          </filter>
        </defs>
      </svg>

      <div />
    </div>
  );
}
