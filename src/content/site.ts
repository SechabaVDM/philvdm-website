/** Edit this file to update your portfolio copy. */
export const site = {
  name: "Phil VDM",
  shortName: "PHIL VDM",
  domain: "philvdm.co.za",
  title: "Phil VDM — Games & Apps",
  description:
    "Portfolio of Phil VDM — games like Echoes of the Terminal and apps like StudyQuest.",
  tagline: "Games and apps that stay with you.",
  location: "South Africa",
  email: "philvdm@gmail.com",
  about: {
    headline: "About Me",
    profileImage: "/images/profile.jpg",
    intro:
      "I'm Phil VDM — an independent creator from South Africa building atmospheric games and useful student apps.",
    paragraphs: [
      "I care about tension, mood, and products that feel alive — whether that's a stealth horror facility or a study app that makes schoolwork feel like progress.",
      "Echoes of the Terminal is my featured game. StudyQuest is the student productivity app I'm building alongside it.",
      "This site is where I'll share both as they grow — from early builds to finished releases.",
    ],
    facts: [
      { label: "Based in", value: "South Africa" },
      { label: "Focus", value: "Games · Apps" },
      { label: "Tools", value: "Unity · C# · Mobile" },
    ],
  },
  games: [
    {
      slug: "echoes-of-the-terminal",
      title: "Echoes of the Terminal",
      status: "In development",
      year: "2026",
      blurb:
        "A stealth horror game set in a decaying facility. Hide from patrol robots, recover keycards, and survive long enough to uncover what the terminal is still trying to say.",
      tags: ["Stealth", "Horror", "Unity"],
      image: "/images/echoes/teaser-menu.png",
      featured: true,
      teaserLabel: "Gameplay teaser",
      screenshots: [
        {
          src: "/images/echoes/teaser-menu.png",
          alt: "Echoes of the Terminal CRT main menu",
        },
        {
          src: "/images/echoes/teaser-hangar.jpg",
          alt: "Facility hangar with narrative transmission",
        },
        {
          src: "/images/echoes/teaser-robots.jpg",
          alt: "Patrol robots and red sensor beam",
        },
        {
          src: "/images/echoes/teaser-hide.jpg",
          alt: "Hiding behind crates in the facility",
        },
        {
          src: "/images/echoes/teaser-keys.jpg",
          alt: "Warehouse catwalks and key hunt",
        },
        {
          src: "/images/echoes/teaser-echo.png",
          alt: "ECHO dialogue in the terminal rain",
        },
      ],
    },
  ],
  apps: [
    {
      slug: "studyquest",
      title: "StudyQuest",
      kind: "App",
      status: "In development",
      year: "2026",
      blurb:
        "A student productivity app that turns schoolwork into quests. Log in with your student email, add assignments from your school schedule, track progress, and stay motivated with XP, daily missions, a study timer, and achievements.",
      tags: ["Mobile", "Productivity", "Students"],
      image: "/images/studyquest/login.png",
      icon: "/images/studyquest/icon.png",
      featured: true,
      teaserLabel: "App preview",
      palette: {
        navy: "#0A1628",
        surface: "#121D33",
        block: "#0B1220",
        purple: "#8B5CF6",
        soft: "#A78BFA",
        white: "#FFFFFF",
        muted: "#9AA6B8",
      },
      helps: [
        "Keeps assignments and deadlines in one place",
        "Makes studying feel more like progress in a game",
        "Supports focus with a study timer and daily missions",
        "Shows growth through levels, XP, and badges",
      ],
      howToStart: [
        "Log in or sign up with your student email",
        "Open Assignments",
        "Tap + to add work from your school schedule",
        "Track progress across Overview, Timer, Missions, Achievements, and Profile",
      ],
      screenshots: [
        {
          src: "/images/studyquest/login.png",
          alt: "StudyQuest login screen",
        },
        {
          src: "/images/studyquest/assignments.png",
          alt: "Assignments turned into quests",
        },
        {
          src: "/images/studyquest/missions.png",
          alt: "Daily missions with XP rewards",
        },
        {
          src: "/images/studyquest/profile.png",
          alt: "Profile with levels and study stats",
        },
        {
          src: "/images/studyquest/icon.png",
          alt: "StudyQuest app icon",
        },
      ],
    },
  ],
  contact: {
    headline: "Contact",
    body: "Press, collabs, or feedback on the games and apps — send a message.",
    cta: "Email me",
  },
};
