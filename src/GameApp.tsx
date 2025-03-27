import { Devvit } from "@devvit/public-api";
import { useState } from "@devvit/public-api";

const GRID_SIZE = 5;
const MAX_ATTEMPTS = 5;
const EMPTY = "⬜";
const TREASURE = "💰";
const HOT = "🔥";
const WARM = "🌡️";
const COLD = "❄️";

const createEmptyGrid = () =>
  Array(GRID_SIZE)
    .fill(null)
    .map(() => Array(GRID_SIZE).fill(EMPTY));

const GameApp = () => {
  const [grid, setGrid] = useState(createEmptyGrid());
  const [treasureX, setTreasureX] = useState(
    Math.floor(Math.random() * GRID_SIZE)
  );
  const [treasureY, setTreasureY] = useState(
    Math.floor(Math.random() * GRID_SIZE)
  );
  const [attemptsLeft, setAttemptsLeft] = useState(MAX_ATTEMPTS);
  const [gameOver, setGameOver] = useState(false);
  const [isWinner, setIsWinner] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const calculateFeedback = (x: number, y: number): string => {
    const dx = Math.abs(treasureX - x);
    const dy = Math.abs(treasureY - y);
    const distance = dx + dy;

    if (distance === 0) return TREASURE;
    if (distance <= 1) return HOT;
    if (distance <= 2) return WARM;
    return COLD;
  };

  const handleCellClick = (row: number, col: number) => {
    if (grid[row][col] !== EMPTY || gameOver) return;

    const feedback = calculateFeedback(row, col);
    const newGrid = [...grid];
    newGrid[row][col] = feedback;
    setGrid(newGrid);

    if (feedback === TREASURE) {
      setIsWinner(true);
      setGameOver(true);
    } else {
      setAttemptsLeft((prev) => prev - 1);
      if (attemptsLeft - 1 === 0) {
        setGameOver(true);
      }
    }
  };

  const resetGame = () => {
    setGrid(createEmptyGrid());
    setTreasureX(Math.floor(Math.random() * GRID_SIZE));
    setTreasureY(Math.floor(Math.random() * GRID_SIZE));
    setAttemptsLeft(MAX_ATTEMPTS);
    setGameOver(false);
    setIsWinner(false);
    setGameStarted(false);
  };

  const startGame = () => {
    setGameStarted(true);
  };

  return (
    <vstack alignment="bottom center" gap="large" padding="medium">
      {!gameStarted ? (
        <vstack alignment="center" gap="medium" width="100%">
          <text size="xxlarge" weight="bold">
            🔥 Treasure Hunt Instructions
          </text>
          <vstack alignment="middle center" gap="small" width="90%">
            <text size="xlarge">
              🛡️ You have {MAX_ATTEMPTS} attempts to find the treasure.
            </text>
            <text size="large">
              🟡 Click on a grid cell to search for the treasure.
            </text>
            <text size="large">"🔥" means you are very close.</text>
            <text size="large">"🌡️" means you are nearby.</text>
            <text size="large">"❄️" means you are far away.</text>
            <text size="large">"💰" means you found the treasure!</text>
          </vstack>

          <button onPress={startGame} appearance="primary">
            Start The Hunt
          </button>
        </vstack>
      ) : (
        <>
          <hstack alignment="center" gap="small">
            <text size="large" weight="bold">
              🔥 Treasure Hunt
            </text>
            <text size="large">Attempts Left: {attemptsLeft}</text>
          </hstack>

          {!gameOver ? (
            <vstack gap="small" alignment="top">
              {grid.map((row, rowIndex) => (
                <hstack key={`${rowIndex}`} gap="small" alignment="center">
                  {row.map((cell, colIndex) => (
                    <button
                      key={`${rowIndex}-${colIndex}`}
                      onPress={() => handleCellClick(rowIndex, colIndex)}
                      appearance={cell === TREASURE ? "primary" : "secondary"}
                      size="medium"
                    >
                      {cell}
                    </button>
                  ))}
                </hstack>
              ))}
            </vstack>
          ) : (
            <vstack alignment="middle center" gap="medium">
              <text size="xlarge">
                {isWinner ? "🎉 You Found the Treasure!" : "❌ Game Over!"}
              </text>
              <button onPress={resetGame} icon="refresh" />
            </vstack>
          )}
        </>
      )}
    </vstack>
  );
};

export default GameApp;
