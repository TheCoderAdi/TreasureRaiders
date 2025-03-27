import { Devvit } from "@devvit/public-api";

interface HeaderProps {
  attemptsLeft: number;
}

const GameHeader = ({ attemptsLeft }: HeaderProps) => {
  return (
    <hstack alignment="middle center" gap="small" padding="medium">
      <text size="large" weight="bold">
        🔥 Treasure Hunt
      </text>
      <spacer />
      <text size="small">Attempts Left: {attemptsLeft}</text>
    </hstack>
  );
};

export default GameHeader;
