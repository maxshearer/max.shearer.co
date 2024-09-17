import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
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

      <div className={styles.page}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            <strong>Max Shearer</strong>—Designer and full(ish)-stack developer,
            building <Link href="https://waywi.se">Waywise</Link> on the side.
          </h1>
          <p>
            I&rsquo;ve been a professional web tinkerer for over 15 years. The
            technologies I&rsquo;m having the most fun with right now are React
            Native, Go, Supabase and all of the AI goodies that are in vogue at
            the moment.
          </p>
          <p>
            Day-to-day I run AFEW, a small digital studio where we build
            websites and apps for everyone from SMEs to big corps.
          </p>
          <p>
            In my spare time I&rsquo;m building Waywise, an AI-generated travel
            guidebook for iOS to allow travellers to explore cities in a more
            socially responsible way.
          </p>

          <nav className={styles.nav}>
            <ul>
              <li>
                <Link href="/resume">📄&nbsp; Resume</Link>
              </li>
              <li>
                <button>👋&nbsp; Say hello</button>
              </li>
              <li>
                <Link href="https://x.com/maxshearer">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.1007 11.0356L22.8386 0.878418H20.768L13.1808 9.69772L7.12101 0.878418H0.131714L9.29537 14.2148L0.131714 24.8661H2.20244L10.2147 15.5526L16.6143 24.8661H23.6036L14.1002 11.0356H14.1007ZM11.2645 14.3323L10.3361 13.0043L2.94855 2.43723H6.12907L12.0909 10.9652L13.0193 12.2932L20.769 23.3782H17.5885L11.2645 14.3328V14.3323Z" />
                  </svg>
                  <span className="sr-only">X</span>
                </Link>
              </li>
              <li>
                <Link href="https://threads.net/shearer">
                  <svg
                    width="22"
                    height="24"
                    viewBox="0 0 22 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11.3172 24.8784H11.31C7.72918 24.8544 4.97638 23.6736 3.12598 21.3696C1.48198 19.3176 0.632377 16.464 0.603577 12.888V12.8712C0.632377 9.29282 1.48198 6.44162 3.12838 4.38962C4.97638 2.08322 7.73158 0.902418 11.31 0.878418H11.3172H11.3244C14.07 0.897618 16.3668 1.60322 18.15 2.97602C19.8276 4.26722 21.0084 6.10562 21.6588 8.44322L19.6188 9.01202C18.5148 5.05202 15.7212 3.02882 11.3148 2.99762C8.40598 3.01922 6.20518 3.93362 4.77478 5.71442C3.43798 7.38242 2.74678 9.79202 2.72038 12.8784C2.74678 15.9648 3.43798 18.3744 4.77718 20.0424C6.20758 21.8256 8.40838 22.74 11.3172 22.7592C13.9404 22.74 15.6756 22.128 17.118 20.7144C18.7644 19.1016 18.7356 17.1216 18.2076 15.9168C17.898 15.2064 17.334 14.616 16.5732 14.1672C16.3812 15.5184 15.9516 16.6128 15.2892 17.4384C14.4036 18.54 13.1484 19.1424 11.5596 19.2288C10.3572 19.2936 9.19798 19.0104 8.30038 18.4272C7.23718 17.7384 6.61558 16.6872 6.54838 15.4632C6.48358 14.2728 6.95638 13.1784 7.87798 12.3816C8.75878 11.6208 9.99718 11.1744 11.4612 11.0904C12.5388 11.0304 13.5492 11.0784 14.4804 11.232C14.3556 10.4904 14.106 9.90002 13.7316 9.47522C13.218 8.88962 12.4236 8.59202 11.3724 8.58482C11.3628 8.58482 11.3532 8.58482 11.3436 8.58482C10.4988 8.58482 9.35158 8.81762 8.62198 9.90482L6.86518 8.72642C7.84438 7.27202 9.43318 6.47042 11.3436 6.47042C11.358 6.47042 11.3724 6.47042 11.3868 6.47042C14.5812 6.48962 16.4844 8.44562 16.674 11.8584C16.782 11.904 16.89 11.952 16.9956 12C18.486 12.7008 19.5756 13.7616 20.1492 15.0696C20.946 16.8912 21.0204 19.86 18.6012 22.2288C16.7508 24.0384 14.5068 24.8568 11.3244 24.8784H11.3172ZM12.3204 13.188C12.078 13.188 11.8332 13.1952 11.5812 13.2096C9.74518 13.3128 8.60038 14.1552 8.66518 15.3528C8.73238 16.608 10.1172 17.1912 11.4492 17.1192C12.6732 17.0544 14.2668 16.5768 14.5356 13.4088C13.8588 13.2624 13.1172 13.188 12.3204 13.188Z" />
                  </svg>

                  <span className="sr-only">Threads</span>
                </Link>
              </li>
              <li>
                <Link href="https://github.com/maxshearer">
                  <svg
                    width="26"
                    height="24"
                    viewBox="0 0 26 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.8723 0.878418C6.11856 0.878418 0.658813 6.37842 0.658813 13.1827C0.658813 18.6217 4.15706 23.2257 9.01006 24.8552C9.61681 24.9777 9.83906 24.5904 9.83906 24.2647C9.83906 23.9794 9.81906 23.0017 9.81906 21.9829C6.42156 22.7164 5.71406 20.5162 5.71406 20.5162C5.16806 19.0902 4.35906 18.7237 4.35906 18.7237C3.24706 17.9699 4.44006 17.9699 4.44006 17.9699C5.67356 18.0514 6.32081 19.2329 6.32081 19.2329C7.41256 21.1069 9.17181 20.5774 9.87956 20.2514C9.98056 19.4569 10.3043 18.9069 10.6481 18.6014C7.93831 18.3162 5.08731 17.2569 5.08731 12.5307C5.08731 11.1862 5.57231 10.0862 6.34081 9.23067C6.21956 8.92517 5.79481 7.66192 6.46231 5.97117C6.46231 5.97117 7.49356 5.64517 9.81881 7.23417C10.8143 6.96483 11.841 6.82782 12.8723 6.82667C13.9036 6.82667 14.9548 6.96942 15.9256 7.23417C18.2511 5.64517 19.2823 5.97117 19.2823 5.97117C19.9498 7.66192 19.5248 8.92517 19.4036 9.23067C20.1923 10.0862 20.6573 11.1862 20.6573 12.5307C20.6573 17.2569 17.8063 18.2957 15.0763 18.6014C15.5213 18.9884 15.9053 19.7217 15.9053 20.8829C15.9053 22.5329 15.8853 23.8572 15.8853 24.2644C15.8853 24.5904 16.1078 24.9777 16.7143 24.8554C21.5673 23.2254 25.0656 18.6217 25.0656 13.1827C25.0856 6.37842 19.6058 0.878418 12.8723 0.878418Z"
                    />
                  </svg>

                  <span className="sr-only">GitHub</span>
                </Link>
              </li>
            </ul>
          </nav>
        </main>

        <section className={styles.work}>
          <div className={styles.workItem}>
            <div className={styles.workHeader}>
              <p>Waywise: an AI-generated travel guidebook for iOS</p>
            </div>

            <Image
              src="/waywise.png"
              alt="Three mobile phone mockups with Waywise travel app displayed"
              width={1000}
              height={600}
            />
          </div>

          <div className={styles.workItem}>
            <div className={styles.workHeader}>
              <p>Yard Poker: texas hold&rsquo;em poker app for friends</p>
            </div>

            <Image
              src="/yard-poker.png"
              alt="Mockup of a laptop displaying the Yard Poker web app"
              width={1000}
              height={600}
            />
          </div>

          <div className={styles.workItem}>
            <div className={styles.workHeader}>
              <p>
                Think Shape: fashion app empowering people to buy less and buy
                better
              </p>
            </div>

            <Image
              src="/think-shape.png"
              alt="Scattered iPhone mockups displaying various screens of the Think Shape app"
              width={1000}
              height={600}
            />
          </div>

          <div className={styles.workItem}>
            <div className={styles.workHeader}>
              <p>
                Rest Easy Radio for Premier Inn: 24-hour restful sounds from the
                British countryside
              </p>
            </div>

            <Image
              src="/premier-inn.png"
              alt="Mockup of a laptop displaying the Premier Inn Rest Easy Radio website"
              width={1000}
              height={600}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
