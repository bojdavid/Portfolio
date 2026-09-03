---
trigger: always_on
---

Work through this task systematically. Do not start by immediately writing or moving code.

### 1. Inspect the Existing Codebase

Before making changes, inspect the relevant parts of the project to understand:

* Current directory structure.
* Existing pages and components.
* Existing hooks.
* Existing API logic.
* Existing types.
* Existing layouts.
* Existing shared utilities.
* Existing design system and UI patterns.
* Existing naming conventions.
* Existing feature organization.

Search for existing implementations that may already solve part of the requirement.

**Do not create a new file if an appropriate existing implementation can be reused or extended.**

---

### 2. Determine Where Each Responsibility Belongs

Before implementing anything, classify the code according to its responsibility.

Use the project's existing architecture, but generally follow:

```text
Pages       → page/route composition
Components  → UI/presentation
Hooks       → state and reusable behavior
API         → API/server communication
Types       → shared type definitions
Layout      → page/application layout
Utilities   → genuinely reusable generic logic
```

Feature-specific code should remain associated with its feature.

Shared code should only be placed in shared locations when it is genuinely reusable.

Do not reorganize the project into a completely different architecture unless the task specifically requires it.

---

### 3. Plan Large Implementations Before Coding

For a large feature or refactor, first break the implementation into logical responsibilities.

Determine:

* Which existing files will be modified.
* Which components need to be extracted.
* Which new components are required.
* Which hooks are required.
* Which API functions are required.
* Which types are required.
* Which existing components can be reused.
* Where each new file should live.

Establish the intended file structure before implementing a large amount of code.

Do not create one large file and attempt to reorganize it afterward.

---

### 4. File Creation

Every new file should have a clear responsibility.

Before creating a file, ask:

> Does this functionality already exist somewhere?

If it does, reuse or extend it when appropriate.

If a new file is necessary, place it in the most appropriate existing feature/responsibility directory.

Do not create unnecessary files simply to satisfy a structural rule.

Do not create tiny files whose only purpose is to reduce the line count.

---

### 5. File Size

Keep implementation files **below 150 lines whenever reasonably possible**.

Treat this as a strong guideline rather than an absolute requirement.

When a file approaches or exceeds 150 lines:

1. Identify why it is large.
2. Look for distinct responsibilities.
3. Extract meaningful components, hooks, utilities, or logic.
4. Keep closely related logic together.
5. Verify that the split actually improves maintainability.

Do not sacrifice readability, cohesion, or functionality simply to get below 150 lines.

A cohesive file slightly above the limit is preferable to unnecessary fragmentation.

---

### 6. Component Extraction

When inspecting pages or existing components:

Extract a component when it is:

* Substantial.
* Reusable.
* Feature-specific and independently meaningful.
* Repeated in multiple places.
* Complex enough to have its own responsibility.

Pages should primarily compose components rather than contain large reusable JSX implementations.

Do not extract every small JSX fragment into its own file.

Prefer meaningful component boundaries.

---

### 7. Hooks and State Logic

Keep reusable state and behavior inside the project's established hooks architecture.

When hooks are organized by feature, place them according to the feature they serve.

Avoid putting feature-specific behavior into generic/shared hooks.

If a hook contains multiple unrelated responsibilities, consider splitting it.

Do not split a cohesive hook simply because it is approaching the line limit.

---

### 8. API Logic

Keep API communication in the project's established API layer.

Before creating a new API function:

1. Search for an existing endpoint implementation.
2. Reuse it if appropriate.
3. Extend it if necessary.
4. Only create a new implementation when the functionality is genuinely new.

Do not duplicate API calls across components.

Components should not become the location for substantial API/service logic.

---

### 9. Design System

Before implementing UI, inspect the existing application for its visual patterns.

Use the existing design system as the source of truth for:

* Typography.
* Font sizes.
* Font weights.
* Line heights.
* Colors.
* Spacing.
* Borders.
* Border radius.
* Shadows.
* Icons.
* Buttons.
* Inputs.
* Cards.
* Tables.
* Modals.
* Navigation.
* Loading states.
* Empty states.
* Error states.

Reuse existing components and design tokens whenever possible.

Do not introduce a new visual style for an individual feature.

When a new component is required, use the closest existing component as its structural and visual reference.

---

### 10. Responsive Behavior

Follow the existing responsive patterns.

Before implementing a new layout, inspect how similar layouts behave across:

* Mobile.
* Tablet.
* Desktop.

Reuse the project's existing breakpoints and responsive utilities.

Do not introduce arbitrary breakpoints unless necessary.

---

### 11. Accessibility

Implement accessibility as part of the feature rather than as a final cleanup step.

Ensure:

* Semantic HTML is used.
* Buttons are buttons.
* Links are links.
* Form controls have accessible labels.
* Interactive elements have accessible names.
* Keyboard interaction works.
* Focus states are preserved.
* Appropriate ARIA attributes are used when necessary.
* Validation and errors are communicated appropriately.

Follow the existing accessibility patterns in the project.

---

### 12. Handle Complete UI States

For data-driven features, account for the relevant states:

```text
Loading
Success
Empty
Error
```

Where applicable, also handle:

```text
Submitting
Disabled
Unauthorized
Forbidden
Retry
Partial data
```

Reuse existing state components and patterns rather than creating new versions unnecessarily.

---

### 13. Preserve Existing Functionality

Do not change existing behavior unless explicitly required.

Preserve:

* Routes.
* API contracts.
* Authentication.
* Authorization/RBAC.
* Business logic.
* State behavior.
* User flows.
* Existing integrations.
* Existing UI behavior.

If refactoring an existing implementation, the result should behave the same unless the requested task explicitly changes the behavior.

---

### 14. Implement Incrementally

For large changes:

1. Make the architectural changes.
2. Update imports and references.
3. Implement the core functionality.
4. Extract/refine components.
5. Integrate hooks/API/types.
6. Apply the design system.
7. Handle responsive and accessibility requirements.
8. Verify the result.

Do not make a large number of unrelated changes simultaneously.

Keep the implementation understandable throughout the process.

---

### 15. Final Audit

Before considering the task complete, inspect the resulting code again.

Verify:

* Every file is in the appropriate directory.
* No unnecessary files were created.
* Files are preferably below 150 lines.
* Pages are primarily composition layers.
* Components have clear responsibilities.
* Hooks contain appropriate state/behavior logic.
* API logic remains in the API layer.
* Types are not unnecessarily duplicated.
* Existing components were reused where appropriate.
* No duplicated implementations were introduced.
* The design system is consistently applied.
* Responsive behavior is handled.
* Accessibility requirements are met.
* Loading, error, empty, and success states are handled where relevant.
* Imports are correct.
* No unused code was introduced.
* No existing functionality was unintentionally changed.

### Final Principle

Do not optimize for simply completing the requested feature.

Optimize for leaving the implementation **cleaner, better organized, visually consistent, maintainable, and ready for the next feature** without introducing unnecessary complexity.
