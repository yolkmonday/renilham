---
name: Ranah Minang Heritage
colors:
  surface: '#fff8f5'
  surface-dim: '#e1d8d4'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fbf2ed'
  surface-container: '#f5ece7'
  surface-container-high: '#efe6e2'
  surface-container-highest: '#e9e1dc'
  on-surface: '#1e1b18'
  on-surface-variant: '#5a413d'
  inverse-surface: '#34302c'
  inverse-on-surface: '#f8efea'
  outline: '#8e706c'
  outline-variant: '#e2bfb9'
  surface-tint: '#b22b1d'
  primary: '#570000'
  on-primary: '#ffffff'
  primary-container: '#800000'
  on-primary-container: '#ff8371'
  inverse-primary: '#ffb4a8'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#262818'
  on-tertiary: '#ffffff'
  tertiary-container: '#3c3e2d'
  on-tertiary-container: '#a8a992'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#ffb4a8'
  on-primary-fixed: '#410000'
  on-primary-fixed-variant: '#8f0f07'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#e4e4cc'
  tertiary-fixed-dim: '#c8c8b0'
  on-tertiary-fixed: '#1b1d0e'
  on-tertiary-fixed-variant: '#474836'
  background: '#fff8f5'
  on-background: '#1e1b18'
  surface-variant: '#e9e1dc'
typography:
  headline-xl:
    fontFamily: Carla Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Carla Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg:
    fontFamily: Carla Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Carla Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  section-gap: 80px
---

## Brand & Style

This design system is crafted to evoke the sacred and majestic atmosphere of a traditional Minangkabau wedding. The brand personality is deeply rooted in heritage, celebrating the "Adat Basandi Syarak, Syarak Basandi Kitabullah" philosophy through a lens of refined elegance. It targets families and couples who value cultural preservation and sophisticated craftsmanship.

The design style is **Modern Editorial with Traditional Accents**. It utilizes high-contrast typography and generous whitespace to maintain a contemporary feel, while integrating intricate "Songket" motifs and "Suntiang-inspired" golden details. The aesthetic avoids clutter, focusing on the quality of ornamentation and the weight of tradition. The emotional response should be one of reverence, joy, and prestige.

## Colors

The palette is derived from the "Marawa" and traditional "Baralek" attire.

*   **Primary (Maroon):** A deep, velvet-like maroon (#800000) used for headings, primary calls-to-action, and significant structural elements. It represents courage and the warmth of the community.
*   **Secondary (Royal Gold):** A metallic-inspired gold (#D4AF37) used for ornamentation, borders, and accents. It mimics the "Benang Hameh" (gold thread) found in Songket weaving.
*   **Tertiary (Cream/Off-White):** A soft, parchment-like cream (#F5F5DC) serves as the primary canvas, providing a warmer, more historical feel than a clinical white.
*   **Neutral (Charcoal):** A near-black (#2D2926) for body text to ensure high legibility while remaining softer than pure black.

## Typography

This design system uses a high-contrast typographic pairing to balance tradition and clarity.

*   **Headings:** **Carla Sans** (loaded locally) provides an elegant, modern feel. Use it for the names of the couple, section titles, and pull quotes.
*   **Body & Details:** **DM Sans** is used for all functional information, such as dates, addresses, and maps. It provides a clean, neutral counterpoint to the title font.
*   **Styling:** Use `label-caps` for metadata or "Save the Date" tags to create a sense of organized hierarchy.

## Layout & Spacing

The layout follows a **Fixed Grid** approach for desktop to mirror the structured nature of a formal printed invitation. 

*   **Grid:** A 12-column grid with generous 24px gutters. Content is often centered to emphasize the formal, ceremonial nature of the event.
*   **Negative Space:** Significant vertical spacing (`section-gap`) is encouraged between different narrative blocks (e.g., between the "The Story" and "The Event Details") to allow the visual elements to breathe.
*   **Mobile Adaptivity:** On mobile, the layout collapses to a single column with 20px side margins. Large display headings should scale down to ensure no awkward line breaks in long Indonesian names.

## Elevation & Depth

To maintain a sophisticated and "tangible" feel, this design system uses **Tonal Layers** and **Low-contrast outlines** rather than heavy shadows.

*   **Surfaces:** The primary surface is the Cream background. Use subtle gold outlines (1px) for cards and containers to suggest the edge of a high-quality cardstock.
*   **Patterns as Depth:** Depth is created through the layering of "Pucuak Rebuang" motifs. These should be applied as low-opacity SVG backgrounds or watermark effects behind content.
*   **Imagery:** Photography should have a slight inner glow or a gold frame to sit "within" the page rather than floating on top.

## Shapes

The shape language is **Soft and Rectilinear**. 

*   **Corners:** We use a "Soft" roundedness (0.25rem) to avoid the clinical feel of sharp corners while maintaining the formality of a traditional document.
*   **Borders:** Use intricate "Songket" border-patterns for primary containers. These frames should be treated as structural elements, not just decoration.
*   **Dividers:** Use custom SVG dividers featuring Minangkabau wood-carving motifs (*Ukiran*) to separate sections instead of simple horizontal lines.

## Components

*   **Buttons:** Primary buttons use the Deep Maroon background with Gold text. They should be rectangular with a subtle 4px corner radius. A "Gold Foil" hover effect (slight gradient shift) is recommended.
*   **Cards:** Event cards (for Akad Nikah and Resepsi) should have a Cream background, a 1px Gold border, and a subtle "Songket" pattern header.
*   **Input Fields:** For RSVP forms, use minimal bottom-border only styles in Gold to maintain an elegant, handwritten feel.
*   **Chips/Badges:** Use for "Vaccinated Only" or "Dress Code" indicators. These should be Deep Maroon with a Gold outline, utilizing `label-caps` typography.
*   **Photo Placeholders:** Images of the couple should be treated with a warm, slightly desaturated filter to match the Cream and Gold palette. Use gold-framed "Polaroid" or "Arch" shapes for editorial flair.
*   **Countdown Timer:** A minimalist timer using `headline-md` for numbers and `label-caps` for units, separated by Gold vertical lines.
