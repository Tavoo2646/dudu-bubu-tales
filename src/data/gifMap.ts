// Dudu & Bubu GIF mapping - using GIPHY direct GIF URLs
export interface GifEntry {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

// GIPHY direct URL format: https://media.giphy.com/media/{ID}/giphy.gif
const giphy = (id: string) => `https://media.giphy.com/media/${id}/giphy.gif`;

export const gifMap: Record<string, GifEntry> = {
  // Scene 1 - First Look
  walking: {
    url: giphy("IFEyABqHRyg3CEMAlY"),
    alt: "Dudu walking",
  },
  shyLook: {
    url: giphy("33dLmeZAdGhVnbxdxJ"),
    alt: "Bubu shy look",
  },
  // Scene 2 - Staircase Meetings
  shyInteraction: {
    url: giphy("kCqhMzivjgI4kFMuhF"),
    alt: "Shy interaction",
  },
  hug: {
    url: giphy("Epxaw4yGSBhogNY2Md"),
    alt: "Bubu Dudu hugging",
  },
  // Scene 3 - Love Growing
  lateNightChat: {
    url: giphy("Ey9c4OTwlZWCuVafkZ"),
    alt: "Late night chat",
  },
  heartReaction: {
    url: giphy("u2EG5bHYyTZhjmeWyJ"),
    alt: "Heart reaction",
  },
  caring: {
    url: giphy("vSbwVRwMn6tjE77Q7M"),
    alt: "Caring moment",
  },
  // Scene 4 - Proposal
  proposing: {
    url: giphy("UW2trnVEAftqckaHCI"),
    alt: "Love proposal",
  },
  thinking: {
    url: giphy("kCqhMzivjgI4kFMuhF"),
    alt: "Thinking",
  },
  acceptanceHug: {
    url: giphy("Epxaw4yGSBhogNY2Md"),
    alt: "Acceptance hug",
  },
  // Scene 5 - College Journey
  walkingTogether: {
    url: giphy("LT8B4oa9xvbhf2pFTR"),
    alt: "Walking together",
  },
  eating: {
    url: giphy("33dLmeZAdGhVnbxdxJ"),
    alt: "Eating together",
  },
  iceCream: {
    url: giphy("IFEyABqHRyg3CEMAlY"),
    alt: "Ice cream together",
  },
  // Scene 6 - Memories
  movieWatching: {
    url: giphy("Ey9c4OTwlZWCuVafkZ"),
    alt: "Movie watching",
  },
  tripHappiness: {
    url: giphy("LT8B4oa9xvbhf2pFTR"),
    alt: "Trip happiness",
  },
  parkSitting: {
    url: giphy("vSbwVRwMn6tjE77Q7M"),
    alt: "Park sitting",
  },
  festival: {
    url: giphy("u2EG5bHYyTZhjmeWyJ"),
    alt: "Festival fun",
  },
  // Scene 7 - Deep Love
  holdingHands: {
    url: giphy("L2CGLm2BRDOXCe1uKz"),
    alt: "Holding hands",
  },
  comfortHug: {
    url: giphy("Epxaw4yGSBhogNY2Md"),
    alt: "Comfort hug",
  },
  // Scene 8 - Birthday Planning
  secretPlanning: {
    url: giphy("kCqhMzivjgI4kFMuhF"),
    alt: "Secret planning",
  },
  cakeSurprise: {
    url: giphy("vpO1CCKoTQp0Xssnvk"),
    alt: "Cake surprise",
  },
  // Scene 9 - Birthday Climax
  cakeCutting: {
    url: giphy("UW2trnVEAftqckaHCI"),
    alt: "Cake cutting",
  },
  celebration: {
    url: giphy("u2EG5bHYyTZhjmeWyJ"),
    alt: "Celebration",
  },
  // Final Scene
  foreverTogether: {
    url: giphy("Epxaw4yGSBhogNY2Md"),
    alt: "Forever together",
  },
  kiss: {
    url: giphy("L2CGLm2BRDOXCe1uKz"),
    alt: "Kiss",
  },
  dance: {
    url: giphy("IFEyABqHRyg3CEMAlY"),
    alt: "Dancing together",
  },
};
