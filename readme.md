### 📌 **Treasure Raiders Game**

🎯 **Treasure Raiders** is an interactive Reddit post-based game built using **Devvit**. Players must find the hidden treasure on a **5x5 grid** by clicking on cells and receiving feedback based on their proximity to the treasure. You have **5 attempts** to find the treasure!

---

### 🚀 **Features**

- 🎲 **5x5 Grid:** Explore a grid of cells to uncover the hidden treasure.
- 🔥 **Proximity Feedback:**
  - `🔥` → **Hot** (Very close to the treasure)
  - `🌡️` → **Warm** (Nearby)
  - `❄️` → **Cold** (Far away)
- 💰 **Treasure Icon:** Reveals the treasure when found.
- ⏱️ **Delay Animation:**
  - Treasure reveal is delayed by **1.5 seconds** before showing the game-over screen for better visibility.
- 🔁 **Restart Option:** Restart the game after winning or losing.
- ⚡ **Responsive UI:** Works seamlessly within Reddit posts.

---

### 🎯 **How to Play**

1. **Start the Game:**
   - Click on the **"Start The Hunt"** button to begin.
2. **Click the Grid Cells:**
   - Each click reveals a feedback icon indicating how close you are to the treasure.
3. **Win or Lose:**
   - If you find the treasure, you win! 🎉
   - If you run out of attempts, it's game over ❌.
4. **Restart:**
   - Click the refresh button 🔁 to start a new game.

---

### ⚙️ **Technology Stack**

- 🔥 **Devvit SDK:** To build interactive Reddit post types.
- ⚛️ **React-style Hooks:** `useState` for state management.
- 🎯 **Modular Components:**
  - Grid rendering, game logic, and dynamic UI feedback.

---

### 🔥 **Game States and Icons**

| Icon | Meaning          |
| ---- | ---------------- |
| ⬜   | Unexplored cell  |
| 💰   | Treasure         |
| 🔥   | Very close (hot) |
| 🌡️   | Nearby (warm)    |
| ❄️   | Far away (cold)  |
| 🔁   | Restart button   |

### 🛠️ **Customization**

You can easily modify:

- **Grid Size:**
  - Change the `GRID_SIZE` constant to increase or decrease the grid dimensions.
- **Attempts:**
  - Modify the `MAX_ATTEMPTS` constant to increase or decrease the number of tries.

---

### 📌 **Contributing**

🔥 Contributions are welcome! If you want to enhance the game, feel free to submit a PR or suggest new features.

---

### 🛡️ **License**

MIT License © 2025 **Treasure Raider Game**

---
