# Specification

## Summary
**Goal:** Take the website offline by enabling a site-wide maintenance mode that shows only an unavailable screen, enabled by default after deployment.

**Planned changes:**
- Add a single configuration switch (constant or environment-based flag) to control maintenance mode.
- When maintenance mode is enabled, render a single centered unavailable message screen in English and prevent rendering/access to all existing marketing sections (HeaderNav, Hero, About, Services, Process, ColorPlaceholders, Contact, Footer).
- Preserve all existing section code so maintenance mode can be turned off without deleting content.

**User-visible outcome:** After deployment, visitors see only a simple “site currently unavailable” screen with no access to the normal scrolling marketing page; the site can later be restored by flipping one configuration switch.
