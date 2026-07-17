THE PATISSERIE OF THE UNCONSCIOUS — custom dial update

Replace the three code files in the project root and copy the included assets/dessert-dial.png into the existing assets folder.

This update changes only the dial presentation:
- uses the custom dial artwork at assets/dessert-dial.png;
- prevents the image from blocking clicks;
- hides the generated SVG hub while the custom artwork is loaded;
- shows the fallback only if the PNG genuinely fails;
- keeps the existing four-sector selection logic.
