# IZANAGI TYPOGRAPHY AND COLOR RULE

The Izanagi Labs typography and color system is immutable unless the user explicitly requests a global theme change.

## 1. Typography Strict Constraints

NEVER introduce a new:
- font family
- font size
- font weight
- line height
- letter spacing
- heading style

inside an individual component. All typography MUST use the global semantic typography system.

Before writing typography styles, first check the existing global typography tokens defined in `app/globals.css`. If an existing token is approximately appropriate, USE IT. Do not create a new token simply to achieve a tiny visual difference. New typography tokens may only be introduced when a genuinely new semantic hierarchy is required, and must be added to the global design system rather than locally.

Never use arbitrary Tailwind typography such as:
`text-[17px]`
`text-[53px]`
`leading-[1.07]`
`tracking-[0.13em]`
inside normal components.

Never import fonts from individual components.

### Semantic Typefaces
- **Instrument Serif**: Brand / statements (Marketing/display typography only).
- **Inter**: UI / content. Dashboards must look engineered and use Inter.
- **Space Mono**: Systems / technical microcopy (technical labels, diagrams).
- **Caveat**: Decorative handwritten annotations only.

## 2. Color Constraints

NEVER introduce arbitrary colors inside normal components.
Avoid:
`text-[#858582]`
`bg-[#F5F4EF]`
`border-[#D8D6CF]`

Use semantic tokens:
`text-foreground-faint`
`bg-background`
`border-border`
etc.

If a genuinely new semantic color is required, add it to the global theme first.

## 3. Exceptions

Precise illustration/layout geometry such as SVG coordinates, transforms, widths, and heights required by the composition are legitimate implementation-specific geometry and are exempt from this rule. The design system eliminates arbitrary **design decisions**, not layout geometry.

Consistency takes priority over matching an isolated component mockup exactly.
