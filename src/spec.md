# Specification

## Summary
**Goal:** Refresh the site’s theme to a Chaniya Choli–inspired color palette and ensure all photo/placeholder text remains neutral (non-accent) in all states.

**Planned changes:**
- Update the existing CSS variable theme tokens in `frontend/src/index.css` to a Chaniya Choli–inspired palette (deep red/maroon with warm-gold/neutral accents) and ensure consistent use across backgrounds, cards, borders, accents, buttons, and link/active states in both light and dark modes.
- Remove accent/primary/hover-based colored text styling from all photo/placeholder areas (including `ColorPlaceholdersSection` and any other placeholder boxes such as logo/photo labels) so placeholder text stays `foreground/muted` and does not change color on hover.

**User-visible outcome:** The website displays a cohesive Chaniya Choli–inspired theme throughout, and any text inside photo placeholders stays neutral and readable without turning into accent colors on hover or interaction.
