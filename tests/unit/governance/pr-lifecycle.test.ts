import { describe, it, expect } from "vitest";
import {
  extractDiscordUsername,
  getMergedPRIdempotencyMarker,
  buildMergedNotificationMessage,
  shouldSendMergedPRNotification,
} from "../../../scripts/pr-lifecycle-parser";

describe("PR Lifecycle Parser & Merged Notification Unit Tests", () => {
  const standardPRBody = `
## 👤 Contributor Information

- **GitHub Username:** \`@ShenSandaru\`
- **Discord Username:** \`ShenSandaru\`

---

## 🔴 IMPORTANT — LINK YOUR ISSUE

Closes #123
`;

  it("TEST 1: merged PR with valid Discord username -> notification payload and content are generated", () => {
    const discordUsername = extractDiscordUsername(standardPRBody);
    expect(discordUsername).toBe("ShenSandaru");

    const decision = shouldSendMergedPRNotification({
      isMerged: true,
      hasIdempotencyMarker: false,
      discordUsername,
    });
    expect(decision.shouldSend).toBe(true);

    const payload = buildMergedNotificationMessage({
      githubUsername: "ShenSandaru",
      discordUsername: discordUsername!,
      prNumber: 123,
      prUrl: "https://github.com/ShenSandaru/MakeYourWorld-OpenCircle/pull/123",
      prTitle: "Add Butterfly to Growing Forest",
    });

    expect(payload.content).toBe(
      [
        "🎉 **Contribution Merged!**",
        "",
        "**GitHub:** @ShenSandaru",
        "**Discord:** ShenSandaru",
        "**PR:** #123",
        "",
        "Thank you for contributing to Growing Worlds!",
      ].join("\n")
    );

    expect(payload.embed.title).toContain("#123");
    expect(payload.embed.color).toBe(65280);
    expect(payload.embed.fields.find((f) => f.name === "Discord")?.value).toBe("ShenSandaru");
    expect(payload.embed.fields.find((f) => f.name === "GitHub")?.value).toContain("@ShenSandaru");
  });

  it("TEST 2: closed but unmerged PR -> no notification should be sent", () => {
    const discordUsername = extractDiscordUsername(standardPRBody);
    const decision = shouldSendMergedPRNotification({
      isMerged: false,
      hasIdempotencyMarker: false,
      discordUsername,
    });

    expect(decision.shouldSend).toBe(false);
    expect(decision.reason).toContain("not merged");
  });

  it("TEST 3: missing or empty Discord username -> no invalid notification", () => {
    const missingBody = `
## 👤 Contributor Information
- **GitHub Username:** @contributor
- **Discord Username:** _No response_
`;
    const extracted = extractDiscordUsername(missingBody);
    expect(extracted).toBeNull();

    const decision = shouldSendMergedPRNotification({
      isMerged: true,
      hasIdempotencyMarker: false,
      discordUsername: extracted,
    });

    expect(decision.shouldSend).toBe(false);
    expect(decision.reason).toContain("No valid Discord username found");
  });

  it("TEST 4: default template placeholder is rejected as invalid Discord username", () => {
    const defaultTemplateBody = `
## 👤 Contributor Information
- **GitHub Username:** \`@your-github-username\`
- **Discord Username:** \`your-discord-username\`
`;
    const extracted = extractDiscordUsername(defaultTemplateBody);
    expect(extracted).toBeNull();

    const decision = shouldSendMergedPRNotification({
      isMerged: true,
      hasIdempotencyMarker: false,
      discordUsername: extracted,
    });

    expect(decision.shouldSend).toBe(false);
  });

  it("TEST 5: Markdown formatting variations in the Discord Username field", () => {
    // Variations: bold variations, backticks, spaces, colons, @-prefix
    const variation1 = "- **Discord Username:** `ShenSandaru`";
    const variation2 = "**Discord Username**: @ShenSandaru";
    const variation3 = "- Discord Username: ShenSandaru";
    const variation4 = "| **Discord Username** | `ShenSandaru` |";
    const variation5 = "### 💬 Discord Username\n\nShenSandaru\n";
    const variation6 = "- **Discord Username:** **`ShenSandaru`**";

    expect(extractDiscordUsername(variation1)).toBe("ShenSandaru");
    expect(extractDiscordUsername(variation2)).toBe("ShenSandaru");
    expect(extractDiscordUsername(variation3)).toBe("ShenSandaru");
    expect(extractDiscordUsername(variation4)).toBe("ShenSandaru");
    expect(extractDiscordUsername(variation5)).toBe("ShenSandaru");
    expect(extractDiscordUsername(variation6)).toBe("ShenSandaru");
  });

  it("TEST 6: correct GitHub username comes from PR author login and cannot be spoofed by body", () => {
    // Suppose body says something untruthful
    const spoofedBody = `
- **GitHub Username:** @imposter
- **Discord Username:** real_contributor
`;
    const authoritativeAuthor = "authoritative-student";
    const extractedDiscord = extractDiscordUsername(spoofedBody);

    const payload = buildMergedNotificationMessage({
      githubUsername: authoritativeAuthor, // authoritative PR user login
      discordUsername: extractedDiscord!,
      prNumber: 42,
    });

    expect(payload.content).toContain("**GitHub:** @authoritative-student");
    expect(payload.content).not.toContain("@imposter");
  });

  it("TEST 7: duplicate merge event with existing idempotency marker does not produce duplicate notification", () => {
    const prNumber = 123;
    const marker = getMergedPRIdempotencyMarker(prNumber);
    expect(marker).toBe("<!-- growing-worlds:merged-pr-notification:123 -->");

    const decision = shouldSendMergedPRNotification({
      isMerged: true,
      hasIdempotencyMarker: true,
      discordUsername: "ShenSandaru",
    });

    expect(decision.shouldSend).toBe(false);
    expect(decision.reason).toContain("Idempotency marker detected");
  });
});
