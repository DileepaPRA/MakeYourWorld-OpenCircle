# Growing Worlds 🌿

A collaborative, open-source 2D paper-collage world platform built by student developers and open-source beginners.

---

## 📖 What is Growing Worlds?

**Growing Worlds** is an educational open-source platform presenting **10 interactive paper-collage worlds** (_Forest, Universe, Ocean, City, Village, Island, Farm, Campus, Fantasy, and Alien Planet_).

Instead of artificial exercises, students make real contributions through an approachable workflow:

1. **Commit 1**: Choose an existing handcrafted paper SVG asset from the repository and declare its object metadata.
2. **Commit 2**: Position the item in an assigned world segment and verify coordinates.

Every merged contribution permanently lives in the interactive world with the contributor's chosen display name rendered beneath it!

---

## 🚀 Quick Start for Contributors

### 1. Prerequisites

- **Node.js**: `v20.x` or higher (LTS recommended)
- **npm**: `v10.x` or higher
- **Git**

### 2. Setup Your Environment

```bash
# 1. Fork this repository on GitHub, then clone your fork:
git clone https://github.com/<your-username>/MakeYourWorld-OpenCircle.git
cd MakeYourWorld-OpenCircle

# 2. Add the upstream repository:
git remote add upstream https://github.com/ShenSandaru/MakeYourWorld-OpenCircle.git

# 3. Install dependencies:
npm install

# 4. Start the local development server:
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌟 The Contribution Workflow

1. **Claim an Issue Slot**: Browse our [Good First Issues](https://github.com/ShenSandaru/MakeYourWorld-OpenCircle/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) and comment on an open Contribution Slot to claim it.
2. **Create Your Branch**: Always branch from upstream `dev`:
   ```bash
   git checkout dev
   git pull upstream dev
   git checkout -b contrib/<world>-<object-name>
   ```
3. **Commit 1: Register Object (~1–5 LOC)**:
   - Select an existing paper SVG in `public/assets/worlds/<world>/` (no new SVG creation required!).
   - Register the item in `src/data/worlds/<world>/objects.ts` with your display name and GitHub username.
   - Run `npm test` and commit.
4. **Commit 2: World Placement (~1–5 LOC)**:
   - Place the item in `src/data/worlds/<world>/placements.ts` specifying the issue's assigned `segmentId` and coordinates `x, y` (0–100%).
   - Visually check the diorama locally at `http://localhost:3000/worlds/<world-id>`.
   - Run `npm test && npm run lint` and commit.
5. **Open Pull Request**: Submit your PR targeting the **`dev`** branch using our PR template.

> 💡 **Commit Count Note**: A **minimum of 2 commits** is expected. If additional commits are made to adjust coordinates or formatting, that is completely fine!

For complete step-by-step guidance, read our [CONTRIBUTING.md](CONTRIBUTING.md) and [How to Contribute page](http://localhost:3000/how-to-contribute).

---

## 🗺️ The 10 Implemented Worlds

| World                | Category / Theme                                          | Segments                                    |
| :------------------- | :-------------------------------------------------------- | :------------------------------------------ |
| **Growing Forest**   | Woodland flora, fauna, and canopy ecosystem               | `forest-01`, `forest-02`, `forest-03`       |
| **Growing Universe** | Cosmic stars, planets, satellites, and nebulae            | `universe-01`, `universe-02`, `universe-03` |
| **Growing Ocean**    | Shallow coral reef, kelp forest, and twilight shelf       | `ocean-01`, `ocean-02`, `ocean-03`          |
| **Growing City**     | Brownstone street, town square, and transit platform      | `city-01`, `city-02`, `city-03`             |
| **Growing Village**  | River watermill, cobblestone street, and market square    | `village-01`, `village-02`, `village-03`    |
| **Growing Island**   | Arrival beach, palm lagoon, and volcanic ridge            | `island-01`, `island-02`, `island-03`       |
| **Growing Farm**     | Homestead yard, golden wheat fields, and pasture windmill | `farm-01`, `farm-02`, `farm-03`             |
| **Growing Campus**   | University gate, academic quad, and library plaza         | `campus-01`, `campus-02`, `campus-03`       |
| **Fantasy World**    | Enchanted glade, ancient rune arch, and high spire        | `fantasy-01`, `fantasy-02`, `fantasy-03`    |
| **Alien Planet**     | Touchdown basin, spore forest, and crystal geysers        | `alien-01`, `alien-02`, `alien-03`          |

---

## 🛠️ Commands Reference

| Script                   | Action                                                      |
| :----------------------- | :---------------------------------------------------------- |
| `npm run dev`            | Starts local Next.js development server at `localhost:3000` |
| `npm test`               | Runs all Vitest schema, positioning, and catalog tests      |
| `npm run test:watch`     | Runs Vitest in interactive watch mode                       |
| `npm run test:integrity` | Runs repository-wide integrity and duplicate asset audit    |
| `npm run lint`           | Checks TypeScript and React code for ESLint errors          |
| `npm run format:check`   | Checks files against Prettier style standards               |
| `npm run format`         | Auto-formats code with Prettier and Tailwind plugin         |
| `npm run typecheck`      | Verifies full TypeScript type-safety (`tsc --noEmit`)       |
| `npm run build`          | Compiles 100% static production bundle for all 10 worlds    |
| `npm run test:e2e`       | Runs Playwright end-to-end browser test suite               |

---

## 📄 License

Growing Worlds is open-source software licensed under the [MIT License](LICENSE).

For details on third-party libraries, UI components, and icons used by this project, see [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md).
