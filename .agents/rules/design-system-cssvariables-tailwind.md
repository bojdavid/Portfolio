---
trigger: always_on
---


When implementing or refactoring the UI, first inspect the existing design system and Tailwind configuration. The styling system should be **centralized, consistent, responsive, and easy to modify**.

Use **CSS variables as the source of truth for design tokens** and use **Tailwind utilities to consume those tokens throughout the application**.

#### Design Tokens

Centralize reusable design values using CSS custom properties.

The system should define tokens for:

* Colors
* Font sizes
* Font weights
* Line heights
* Spacing
* Border radius
* Borders
* Shadows
* Component dimensions
* Transitions
* Other recurring visual values

For example:

```css
:root {
  /* Typography */
  --font-size-xs: clamp(...);
  --font-size-sm: clamp(...);
  --font-size-md: clamp(...);
  --font-size-lg: clamp(...);
  --font-size-xl: clamp(...);

  /* Spacing */
  --s1: clamp(...);
  --s2: clamp(...);
  --s3: clamp(...);
  --s4: clamp(...);
  --s5: clamp(...);
  --s6: clamp(...);

  /* Colors */
  --color-primary: ...;
  --color-secondary: ...;
  --color-background: ...;
  --color-surface: ...;
  --color-text: ...;
  --color-text-muted: ...;
  --color-border: ...;
  --color-success: ...;
  --color-warning: ...;
  --color-error: ...;

  /* Other tokens */
  --radius-sm: ...;
  --radius-md: ...;
  --radius-lg: ...;
}
```

The exact values must be derived from the existing project's visual language where one exists.

#### Tailwind Integration

Tailwind should consume the CSS variables rather than replacing them with duplicated hard-coded values.

Extend the Tailwind configuration/theme so the design tokens can be used through Tailwind utilities.

For example, the design system should allow patterns such as:

```tsx
<div className="p-s3 gap-s2 rounded-md bg-surface text-text">
  ...
</div>
```

or the equivalent Tailwind syntax supported by the project's Tailwind version.

Colors should similarly be mapped to the CSS variables so components can use semantic Tailwind classes such as:

```text
bg-primary
bg-surface
text-text
text-text-muted
border-border
text-error
```

The goal is for Tailwind to provide the **developer-facing utility API**, while CSS variables provide the **centralized design-token values**.

#### Fluid Typography

Use `clamp()` for font sizes where appropriate so typography scales smoothly across viewport sizes.

For example:

```css
--font-size-sm: clamp(...);
--font-size-md: clamp(...);
--font-size-lg: clamp(...);
--font-size-xl: clamp(...);
```

These values should then be exposed through Tailwind rather than repeatedly defining arbitrary responsive font sizes in individual components.

Prefer the project's semantic typography tokens over arbitrary values such as:

```text
text-[17px]
text-[23px]
text-[31px]
```

unless there is a genuine design requirement.

#### Fluid Spacing

Use a consistent spacing scale:

```text
s1
s2
s3
s4
s5
s6
...
```

Spacing tokens should use `clamp()` where fluid scaling provides value.

Components should consume these tokens through Tailwind utilities instead of introducing arbitrary spacing values.

Prefer:

```text
p-s3
gap-s2
mt-s4
px-s5
```

over repeatedly introducing arbitrary values such as:

```text
p-[17px]
gap-[13px]
mt-[29px]
```

unless the value is intentionally unique.

#### Semantic Tokens

Prefer semantic design tokens over purely visual naming where appropriate.

For example:

```text
primary
secondary
background
surface
text
text-muted
border
success
warning
error
```

This makes the system easier to change later. A component should generally care that it needs a `surface`, not that the current surface happens to be a particular hex value.

#### Dark Mode and Themes

If the project supports dark mode or multiple themes, keep theme-specific values in CSS variables.

For example:

```css
:root {
  --color-background: ...;
  --color-surface: ...;
  --color-text: ...;
}

.dark {
  --color-background: ...;
  --color-surface: ...;
  --color-text: ...;
}
```

Tailwind components should continue consuming the semantic variables rather than defining separate hard-coded colors for each theme.

#### Reuse Existing Tailwind Configuration

Before adding new Tailwind tokens or utilities:

1. Inspect the existing Tailwind configuration.
2. Inspect existing CSS variables and theme definitions.
3. Inspect existing utility classes and component patterns.
4. Reuse existing tokens whenever possible.
5. Extend the system only when a genuine requirement exists.
6. Avoid creating duplicate tokens representing the same concept.

Do not introduce a second competing styling system.

#### Avoid Arbitrary Tailwind Values

Arbitrary Tailwind values should be the exception, not the default.

Avoid repeatedly using:

```text
text-[15px]
p-[18px]
gap-[22px]
rounded-[7px]
bg-[#...]
```

when those values belong to the application's design system.

If a value is used repeatedly or represents an important design decision, consider whether it should become a design token.

#### Component Styling

Components should primarily use the established Tailwind utilities and design tokens.

Avoid embedding large amounts of bespoke CSS inside individual components when the styling can be represented through the existing design system.

The preferred hierarchy is:

**Design token → CSS variable → Tailwind theme/utility → Component**

This ensures that changing a design token can consistently affect the application without requiring individual components to be manually updated.

#### Design-System Consistency

Before introducing a new visual value, determine:

* Does an existing token already represent this?
* Can an existing Tailwind utility be used?
* Should this value become a new design token?
* Is the value genuinely component-specific?
* Will this create visual inconsistency elsewhere?

The final implementation should have **one coherent design system**, with CSS variables acting as the source of truth and Tailwind providing the primary styling interface.
