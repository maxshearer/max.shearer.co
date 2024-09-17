import Image from "next/image";
import Rainbow from "@/app/components/rainbow";
import WorkItem from "@/app/components/work-item";
import styles from "./layout.module.css";

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <Rainbow />

      <div className={styles.page}>
        <main className={styles.main}>{children}</main>

        <section className={styles.work}>
          <WorkItem label="Waywise: an AI-generated travel guidebook for iOS">
            <Image
              src="/waywise.png"
              alt="Three mobile phone mockups with Waywise travel app displayed"
              width={1000}
              height={600}
            />
          </WorkItem>

          <WorkItem label="Think Shape: fashion app empowering people to buy less and buy better">
            <Image
              src="/think-shape.png"
              alt="Scattered iPhone mockups displaying various screens of the Think Shape app"
              width={1000}
              height={600}
            />
          </WorkItem>

          <WorkItem label="Yard Poker: texas hold&rsquo;em poker app for friends">
            <Image
              src="/yard-poker.png"
              alt="Mockup of a laptop displaying the Yard Poker web app"
              width={1000}
              height={600}
            />
          </WorkItem>

          <WorkItem
            label="Think Shape: fashion app empowering people to buy less and buy
                better"
          >
            <Image
              src="/think-shape.png"
              alt="Scattered iPhone mockups displaying various screens of the Think Shape app"
              width={1000}
              height={600}
            />
          </WorkItem>

          <WorkItem label="Rest Easy Radio for Premier Inn: 24-hour restful sounds from the British countryside">
            <Image
              src="/premier-inn.png"
              alt="Mockup of a laptop displaying the Premier Inn Rest Easy Radio website"
              width={1000}
              height={600}
            />
          </WorkItem>
        </section>
      </div>
    </div>
  );
}
