import { Devvit } from "@devvit/public-api";
import GameApp from "./GameApp.jsx";
import { LoadingPage } from "./LoadingPage.js";

Devvit.configure({
  redditAPI: true,
});

Devvit.addMenuItem({
  label: "Find out the treasure!",
  location: "subreddit",
  forUserType: "moderator",
  onPress: async (_event, context) => {
    const { reddit, ui } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    const post = await reddit.submitPost({
      title: "Find Treasure!",
      subredditName: subreddit.name,
      preview: <LoadingPage />,
    });
    ui.navigateTo(post);
  },
});

Devvit.addCustomPostType({
  name: "treasure-raiders",
  render: (_context) => <GameApp />,
});

export default Devvit;
