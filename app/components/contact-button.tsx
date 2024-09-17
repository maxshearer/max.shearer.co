"use client";

export default function ContactButton(): React.ReactNode {
  function handleContactClick() {
    window.location.href = "mailto:max@shearer.co";
  }

  return <button onClick={handleContactClick}>👋&nbsp; Say hello</button>;
}
