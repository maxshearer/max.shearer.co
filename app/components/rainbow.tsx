import styles from "./rainbow.module.css";

export default function Rainbow() {
  return (
    <div className={styles.rainbow}>
      <svg
        viewBox="0 0 1107 982"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_0_1)">
          <circle
            className={styles.blur}
            cx="600"
            cy="800"
            r="400"
            transform="rotate(-52.4933 823.531 509.393)"
            fill="#7686FD"
          />
        </g>
        <g className={styles.blend} filter="url(#filter1_f_0_1)">
          <circle
            cx="1092.01"
            cy="57.3365"
            r="422"
            transform="rotate(-52.4933 1092.01 57.3365)"
            fill="#AF95D6"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_0_1"
            x="0.209534"
            y="-313.928"
            width="1646.64"
            height="1646.64"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            x="268.684"
            y="-765.985"
            width="1646.64"
            height="1646.64"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
