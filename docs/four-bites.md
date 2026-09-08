# Four bites (2026-09-08)

Opening a world reveals the four reading controls; it is not itself a bite.
Each distinct fragment advances the dessert once, independent of reading order.
After four fragments the dessert is gone. Re-reading does not advance anything.
Reset restores the whole dessert. Switching worlds preserves session progress.
Napoleon no longer requires assembling layers before tasting.

The original artwork remains unchanged outside a per-dessert removal region.
An SVG scalloped edge removes the remaining food over three intermediate states;
the fourth state removes the entire region, including the food's cast shadow.
The empty plate is shown only inside that region and a porcelain silhouette.
This prevents the generated background from showing and keeps the original rim.
The plate does not float or shrink during tasting. A 380ms reveal interval lets
the visitor see a bite before its text opens; reduced-motion mode skips this.
An unloaded or failed empty-plate asset leaves the original image visible.

## Assets and generation

Created with the built-in image generation tool, precise-object-edit mode.
Each input was the matching existing `assets/*-whole.webp` file. Output assets:

- `assets/madeleine-empty-v1.webp`
- `assets/cannoli-empty-v1.webp`
- `assets/napoleon-empty-v1.webp`
- `assets/tiramisu-empty-v1.webp`
- `assets/petit-four-empty-v1.webp`

Prompt set: remove the complete dessert and its shadow, restore the porcelain
beneath, leave a few tiny crumbs; preserve the plate position, scale, viewpoint,
rim pattern, lighting and framing. For tiramisu preserve surrounding blue/gold
leaves, flowers, stars and coffee beans, retaining a little cocoa dust. For petit
four retain the empty gold paper case and original dark/gold background.
Madeleine/cannoli/Napoleon/petit-four: 4:3 canvas; tiramisu: square canvas.
No text, montage, new props, zooming, recentering or redesign.

The generator returned opaque backgrounds for several cutouts. They are NOT
used as transparent assets; the runtime's SVG clipping explicitly excludes them.
Generated files were downscaled to source dimensions and encoded as WebP, quality
84. Only one extra image per world is required, not four full-size bitmaps.

## Verification

`node --check script.js`

`node --check bite-stages.js`

`node tests/four-bites.cjs`

For a 25-state visual contact sheet, use the optional existing Sharp dependency:

`NODE_PATH="$CODEX_PRIMARY_RUNTIME_NODE_MODULES" BITE_PREVIEW=/workspace/scratch/74d612c0fc53/four-bites-review.png node tests/four-bites.cjs`

Browser checks: four new fragments, repeated fragment, alternate order, fourth
fragment CTA, return to world, reset, small viewport, image failures and motion
preference. The books/recipes remain accessible independently of collection.
