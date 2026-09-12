import { describe, it, expect } from "vitest";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { FullscreenWorldViewer } from "@/components/world/FullscreenWorldViewer";
import { World } from "@/engine/World";
import { growingUniverseWorld, growingForestWorld } from "@/data/worlds";

describe("Phase F: World UI Viewer & Single Title Architecture", () => {
  it("renders the world title exactly once in modal mode (FullscreenWorldViewer)", () => {
    const html = renderToStaticMarkup(
      <FullscreenWorldViewer
        world={growingUniverseWorld}
        isOpen={true}
        onClose={() => {}}
      />
    );

    // Count occurrences of the world title text in rendered HTML
    const titleRegex = new RegExp(growingUniverseWorld.name, "g");
    const matches = html.match(titleRegex) || [];
    expect(matches.length).toBe(1);

    // Verify modal header has the authoritative title
    expect(html).toContain('id="fullscreen-world-title"');
    expect(html).toContain(growingUniverseWorld.name);

    // Verify world description remains visible
    expect(html).toContain(growingUniverseWorld.description);

    // Verify theme dot indicator exists
    expect(html).toContain(`background-color:${growingUniverseWorld.theme.primaryColor}`);

    // Verify Full Page View link exists
    expect(html).toContain("Full Page View");
    expect(html).toContain(`/worlds/${growingUniverseWorld.id}`);

    // Verify close button exists
    expect(html).toContain('aria-label="Close world preview"');
  });

  it("renders the world title exactly once in direct/full-page mode (<World /> default)", () => {
    const html = renderToStaticMarkup(
      <World world={growingForestWorld} />
    );

    // In direct/full-page mode, World renders its own header by default
    const titleRegex = new RegExp(growingForestWorld.name, "g");
    const matches = html.match(titleRegex) || [];
    expect(matches.length).toBe(1);

    // Description is rendered
    expect(html).toContain(growingForestWorld.description);
  });

  it("omits inner title when showTitle={false} is passed explicitly", () => {
    const html = renderToStaticMarkup(
      <World world={growingUniverseWorld} showTitle={false} />
    );

    // World name should not be present in the header when showTitle is false
    expect(html).not.toContain(growingUniverseWorld.name);

    // World description remains rendered
    expect(html).toContain(growingUniverseWorld.description);
  });
});
