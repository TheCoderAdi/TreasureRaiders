import { Devvit } from "@devvit/public-api";

interface GameOverProps {
  isWinner: boolean;
  onRestart: () => void;
}

const GameOver = ({ isWinner, onRestart }: GameOverProps) => {
  return (
    <vstack alignment="middle center" gap="medium" padding="medium">
      <text size="xlarge" weight="bold">
        {isWinner ? "🎯 You Found the Treasure! 🎉" : "❌ Game Over!"}
      </text>
      <button onPress={onRestart} icon="refresh" />
    </vstack>
  );
};

export default GameOver;
