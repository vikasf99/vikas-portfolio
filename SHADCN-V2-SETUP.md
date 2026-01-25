# shadcn/ui v2 Setup Guide

This project now has a separate directory for the latest shadcn/ui components that won't affect your existing build.

## Directory Structure

- **Existing components**: `src/components/ui/` (unchanged)
- **New components**: `src/components/ui-v2/` (latest shadcn/ui)

## How to Add New Components

Use the new config file when adding components:

```bash
npx shadcn@latest add --config components-v2.json [component-name]
```

For example:
```bash
npx shadcn@latest add --config components-v2.json button
npx shadcn@latest add --config components-v2.json card
```

## How to Import

### New Components (from ui-v2)
```typescript
import { Button } from "@/ui-v2/button"
import { Card } from "@/ui-v2/card"
```

### Existing Components (unchanged)
```typescript
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
```

## Configuration Files

- **Existing**: `components.json` → points to `src/components/ui/`
- **New**: `components-v2.json` → points to `src/components/ui-v2/`

## TypeScript Path Aliases

Both paths are configured in `tsconfig.json`:
- `@/*` → `./src/*` (existing)
- `@/ui-v2/*` → `./src/components/ui-v2/*` (new)

## Benefits

✅ Existing build remains completely unchanged
✅ Can gradually migrate components
✅ Easy to test new components alongside old ones
✅ Clear separation between old and new components

## Notes

- The new components use the same Tailwind config and CSS variables
- Both directories share the same `utils.ts` file
- No conflicts between old and new components
