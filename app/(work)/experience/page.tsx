import Link from "next/link";
import styles from "./page.module.css";

export default function ExperiencePage(): React.ReactNode {
  return (
    <div className={styles.experience}>
      <header className={styles.header}>
        <Link href="/">
          &larr;<span className="sr-only">Back</span>
        </Link>
        <h1>Experience</h1>
      </header>

      <dl>
        <div>
          <dt>
            <span>2016 &rarr;</span> now: AFEW, London
          </dt>
          <dd>Co-founder, creative/technical developer</dd>
        </div>
        <div>
          <dt>
            <span>2022 &rarr; 2023:</span> Tradegraft, London
          </dt>
          <dd>Co-founder, lead developer</dd>
        </div>
        <div>
          <dt>
            <span>2013 &rarr; 2016:</span> Tui media, London
          </dt>
          <dd>Senior UI developer</dd>
        </div>
        <div>
          <dt>
            <span>2011 &rarr; 2012:</span> Branded3, Leeds
          </dt>
          <dd>Designer/developer</dd>
        </div>
        <div>
          <dt>
            <span>2007 &rarr; 2010:</span> Leeds Metropolitan University
          </dt>
          <dd>BSc Multimedia Technology</dd>
        </div>
        <div>
          <dt>
            <span>2006 &rarr; 2007:</span> 2Cs Communications, Ipswich
          </dt>
          <dd>Web developer</dd>
        </div>
      </dl>

      <h2>Skills</h2>

      <dl>
        <div>
          <dt>Design</dt>
          <dd>
            <ul>
              <li>Figma</li>
              <li>Sketch</li>
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>Lightroom</li>
            </ul>
          </dd>
        </div>
        <div>
          <dt>Frontend</dt>
          <dd>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript/TypeScript</li>
              <li>Vue.js/Nuxt</li>
              <li>React/Next.js</li>
              <li>Svelte/SvelteKit</li>
            </ul>
          </dd>
        </div>
        <div>
          <dt>Backend</dt>
          <dd>
            <ul>
              <li>Go</li>
              <li>Node.js</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>Firebase</li>
              <li>Redis</li>
            </ul>
          </dd>
        </div>
        <div>
          <dt>Infra</dt>
          <dd>
            <ul>
              <li>Google Cloud:</li>
              <li>Cloud Run</li>
              <li>Cloud Build</li>
              <li>Cloud Functions</li>
              <li>Cloud Storage</li>
              <li>Stripe</li>
            </ul>
          </dd>
        </div>
        <div>
          <dt>Mobile</dt>
          <dd>
            <ul>
              <li>React Native</li>
              <li>Expo</li>
              <li>RevenueCat</li>
            </ul>
          </dd>
        </div>
      </dl>
    </div>
  );
}
