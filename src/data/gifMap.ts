// Dudu & Bubu GIF mapping - using Tenor embed GIFs for each story event
export interface GifEntry {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

export const gifMap: Record<string, GifEntry> = {
  // Scene 1 - First Look
  walking: {
    url: "https://media.tenor.com/uEN3NzmWxjgAAAAM/bubu-dudu.gif",
    alt: "Dudu walking",
  },
  shyLook: {
    url: "https://media.tenor.com/3V_7t1R3mKAAAAAM/bubu-dudu-shy.gif",
    alt: "Bubu shy look",
  },
  // Scene 2 - Staircase Meetings
  shyInteraction: {
    url: "https://media.tenor.com/d0yCaARYGaQAAAAM/cute-love.gif",
    alt: "Shy interaction",
  },
  hug: {
    url: "https://media.tenor.com/oeYC3VdmUXoAAAAM/bubu-dudu-hug.gif",
    alt: "Bubu Dudu hugging",
  },
  // Scene 3 - Love Growing
  lateNightChat: {
    url: "https://media.tenor.com/AjfME7KJMrMAAAAM/bubu-dudu.gif",
    alt: "Late night chat",
  },
  heartReaction: {
    url: "https://media.tenor.com/7_E4FDhOoVsAAAAM/love-bubu.gif",
    alt: "Heart reaction",
  },
  caring: {
    url: "https://media.tenor.com/5lP5lJzMd4AAAAAM/bubu-dudu.gif",
    alt: "Caring moment",
  },
  // Scene 4 - Proposal
  proposing: {
    url: "https://media.tenor.com/W9n3PNyivJMAAAAM/bubu-dudu-love.gif",
    alt: "Love proposal",
  },
  thinking: {
    url: "https://media.tenor.com/aCkx2VJFE4QAAAAM/bubu-and-dudu.gif",
    alt: "Thinking",
  },
  acceptanceHug: {
    url: "https://media.tenor.com/oeYC3VdmUXoAAAAM/bubu-dudu-hug.gif",
    alt: "Acceptance hug",
  },
  // Scene 5 - College Journey
  walkingTogether: {
    url: "https://media.tenor.com/c2fgBvKQussAAAAM/bubu-dudu.gif",
    alt: "Walking together",
  },
  eating: {
    url: "https://media.tenor.com/ZLsGkuMjGQYAAAAM/bubu-dudu.gif",
    alt: "Eating together",
  },
  iceCream: {
    url: "https://media.tenor.com/GDXW5bWK8GIAAAAM/bubu-dudu.gif",
    alt: "Ice cream together",
  },
  // Scene 6 - Memories
  movieWatching: {
    url: "https://media.tenor.com/dWU6hRJaB5MAAAAM/bubu-dudu.gif",
    alt: "Movie watching",
  },
  tripHappiness: {
    url: "https://media.tenor.com/uEN3NzmWxjgAAAAM/bubu-dudu.gif",
    alt: "Trip happiness",
  },
  parkSitting: {
    url: "https://media.tenor.com/5lP5lJzMd4AAAAAM/bubu-dudu.gif",
    alt: "Park sitting",
  },
  festival: {
    url: "https://media.tenor.com/c2fgBvKQussAAAAM/bubu-dudu.gif",
    alt: "Festival fun",
  },
  // Scene 7 - Deep Love
  holdingHands: {
    url: "https://media.tenor.com/d0yCaARYGaQAAAAM/cute-love.gif",
    alt: "Holding hands",
  },
  comfortHug: {
    url: "https://media.tenor.com/oeYC3VdmUXoAAAAM/bubu-dudu-hug.gif",
    alt: "Comfort hug",
  },
  // Scene 8 - Birthday Planning
  secretPlanning: {
    url: "https://media.tenor.com/aCkx2VJFE4QAAAAM/bubu-and-dudu.gif",
    alt: "Secret planning",
  },
  cakeSurprise: {
    url: "https://media.tenor.com/ZLsGkuMjGQYAAAAM/bubu-dudu.gif",
    alt: "Cake surprise",
  },
  // Scene 9 - Birthday Climax
  cakeCutting: {
    url: "https://media.tenor.com/GDXW5bWK8GIAAAAM/bubu-dudu.gif",
    alt: "Cake cutting",
  },
  celebration: {
    url: "https://media.tenor.com/7_E4FDhOoVsAAAAM/love-bubu.gif",
    alt: "Celebration",
  },
  // Final Scene
  foreverTogether: {
    url: "https://media.tenor.com/W9n3PNyivJMAAAAM/bubu-dudu-love.gif",
    alt: "Forever together",
  },
  kiss: {
    url: "https://media.tenor.com/3V_7t1R3mKAAAAAM/bubu-dudu-shy.gif",
    alt: "Kiss",
  },
  dance: {
    url: "https://media.tenor.com/AjfME7KJMrMAAAAM/bubu-dudu.gif",
    alt: "Dancing together",
  },
};
