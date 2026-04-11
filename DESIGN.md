# DESIGN.md

## Overview

The LNCC Information Engineering Department site should feel rational, credible, and contemporary without slipping into startup-style spectacle. It is an academic department website first, so the visual system must help prospective students, parents, current students, and institutional partners quickly trust the department's teaching strength, organizational clarity, and professional direction.

The homepage carries brand impression and emotional lift, so it can use stronger imagery, deeper overlays, and sharper headline contrast. Interior pages should be noticeably quieter: light backgrounds, clear hierarchy, steady spacing, and information-forward layouts. The whole site should share one blue-gray academic technology language, but the dramatic homepage hero must remain a homepage exception rather than a site-wide default.

## Colors

### Primary
- `#2563eb` - primary actions, active states, key links, interaction emphasis
- `#1d4ed8` - hover states for primary actions, headline accents, deeper emphasis

### Secondary
- `#0f172a` - dark visual foundation for homepage image overlays, footer background, and dark sections
- `#334155` - secondary dark text, supporting headings, structural contrast inside dark UI

### Tertiary
- `#38bdf8` - lighter accent for focus rings, search emphasis, and secondary interactive highlights

### Neutral
- `#f8fafc` background
- `#ffffff` surface
- `#e2e8f0` border
- `#0f172a` text-primary
- `#64748b` text-muted

## Typography

### Headline
- Family: Alibaba PuHuiTi, Noto Sans SC, sans-serif
- Weight: 600-700
- Size: `clamp(2rem, 3vw + 1rem, 4.5rem)` for page and hero headlines

### Body
- Family: Alibaba PuHuiTi, Noto Sans SC, sans-serif
- Weight: 400-500
- Size: `16px-18px`

### Label
- Family: Alibaba PuHuiTi, Noto Sans SC, sans-serif
- Weight: 500-600
- Size: `12px-14px`

Typography should feel compact, direct, and clearly tiered. It should not rely on decorative letterforms or stylized English copy to fake a "tech" mood. English may appear as support text or brand context, but Chinese content remains the visual and informational primary layer.

## Elevation

Depth should be expressed primarily through background shifts, overlays, boundaries, and whitespace. Shadows are supportive, not dominant. The homepage hero may create depth through darkened imagery, layered gradients, and foreground/background contrast; interior sections should lean more on pale surfaces, light borders, and restrained shadows.

Recommended depth system:
- Flat: no shadow, separation created by background or border only
- Soft: `0 8px 30px rgb(15 23 42 / 0.06)` for cards or floating surfaces that need light lift
- Deep: reserved for large visual zones or overlays on the homepage, not for routine information cards

## Components

### Header
- Position: absolute and floating on the homepage hero; may settle into a more stable dark translucent shell over regular content
- Background: transparent to black top-down gradient, never a heavy opaque bar over the hero
- Height: `76px-84px` desktop, `68px-72px` mobile
- Navigation style: text-led primary navigation with lighter icon utilities; active state should use line or color emphasis rather than filled pills
- Search trigger: icon-only button with lower visual weight than the main navigation

### Hero
- Role: reserved for the homepage and a very small number of priority landing sections
- Layout: large-format imagery, dark overlay, left-aligned headline block
- Overlay: cool dark gradient for readability rather than colorful washes
- Motion: slow, smooth fades and transforms are acceptable, but motion must never compete with reading

### Footer
- Background: full-width dark closure that visually echoes the homepage hero
- Structure: brand and contact information on the left, quick links on the right
- Typography: small, readable body copy with higher-contrast headings; avoid large fields of bright blue

### Buttons
- Border radius: `999px` for compact icon and utility buttons, `12px-16px` for standard buttons
- Padding: `10px 16px` to `14px 24px`
- Variants: primary, secondary, ghost
- States: hover should increase contrast and may introduce slight transform; focus must use a clear blue ring; disabled must reduce contrast without pretending to be interactive

### Inputs
- Border radius: `12px`
- Border: `1px solid #cbd5e1`
- States: focus uses a cleaner border and blue outer ring; error uses a clear warm warning tone without flooding the UI with harsh red

### Chips / Tags
- Border radius: `999px`
- Variants: filled, outlined
- Usage: classification, tags, and status support only; never a substitute for primary navigation

### Lists
- Spacing: `16px-24px`
- Dividers: acceptable as light separators, but whitespace should do most of the grouping work

### Data Highlights
- Style: numbers may become larger and heavier, but must be paired with clear labels and generous breathing room
- Usage: appropriate for the homepage or summary sections; interior pages should avoid turning into metric dashboards

## Do's and Don'ts

### Do
- Keep the two-layer strategy: strong atmosphere on the homepage, strong information clarity on interior pages
- Use blue and cool neutrals to build a professional academic technology tone
- Use left alignment and controlled asymmetry to create rhythm instead of centering every section
- Preserve obvious hierarchy between brand, navigation, headline, body copy, and support text
- Maintain accessibility through contrast, focus states, and mobile-friendly target sizes

### Don't
- Don't repeat the homepage's dark image hero, carousel rhythm, and high-contrast headline treatment across all interior pages
- Don't turn the whole site into a wall of cards or nested cards
- Don't use purple-blue gradients, neon glows, or cheap cyber-tech styling shortcuts
- Don't let English support copy, decorative lines, or small labels overpower the main Chinese content
- Don't rely on excessive motion, heavy shadows, or over-saturated blue to create presence
