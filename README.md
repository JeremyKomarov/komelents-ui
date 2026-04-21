# Komelents UI

A personal React component library built with SCSS and BEM. Reusable, easy to extend, and publishable via npm.

---

## Stack

- React 19
- Vite 8
- SCSS + BEM
- No external UI dependencies

---

## Getting Started

### Run the showcase
```bash
npm install
npm run dev
```
Opens the component showcase at `http://localhost:5173`.

### Build the library for npm
```bash
npm run build:lib
```
Outputs `dist/komelents-ui.es.js` and `dist/komelents-ui.cjs.js`.

---

## Usage in a project

```bash
npm install komelents-ui
```

```jsx
import Button, { BUTTON_VARIANT, BUTTON_SIZE } from 'komelents-ui/Button';

<Button variant={BUTTON_VARIANT.PRIMARY} size={BUTTON_SIZE.MD}>
  Click me
</Button>
```

---

## Components

### Button

```jsx
import Button, { BUTTON_VARIANT, BUTTON_SIZE } from '@components/Button';

<Button variant={BUTTON_VARIANT.PRIMARY} size={BUTTON_SIZE.MD}>Click</Button>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `BUTTON_VARIANT` | `PRIMARY` | Visual style |
| `size` | `BUTTON_SIZE` | `MD` | Size |
| `loading` | `boolean` | `false` | Shows spinner, disables button |
| `disabled` | `boolean` | `false` | Disables button |
| `fullWidth` | `boolean` | `false` | Stretches to container width |
| `iconLeft` | `ReactNode` | — | Icon before label |
| `iconRight` | `ReactNode` | — | Icon after label |
| `onClick` | `function` | — | Click handler |

**BUTTON_VARIANT:** `PRIMARY` · `SECONDARY` · `GHOST` · `OUTLINE` · `DANGER` · `SUCCESS`

**BUTTON_SIZE:** `SM` · `MD` · `LG`

---

### Input

```jsx
import Input, { INPUT_VARIANT, INPUT_SIZE } from '@components/Input';

<Input label="Email" placeholder="you@example.com" variant={INPUT_VARIANT.DEFAULT} />
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `INPUT_VARIANT` | `DEFAULT` | Visual state |
| `size` | `INPUT_SIZE` | `MD` | Size |
| `label` | `string` | — | Label above the field |
| `helper` | `string` | — | Helper/error text below |
| `iconLeft` | `ReactNode` | — | Icon inside left |
| `iconRight` | `ReactNode` | — | Icon inside right |
| `disabled` | `boolean` | `false` | Disables field |

**INPUT_VARIANT:** `DEFAULT` · `ERROR` · `SUCCESS`

**INPUT_SIZE:** `SM` · `MD` · `LG`

---

### Select

```jsx
import Select, { SELECT_VARIANT, SELECT_SIZE } from '@components/Select';

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue',   label: 'Vue' },
];

<Select label="Framework" options={options} placeholder="Pick one…" />
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `options` | `{ value, label, disabled? }[]` | `[]` | Options list |
| `variant` | `SELECT_VARIANT` | `DEFAULT` | Visual state |
| `size` | `SELECT_SIZE` | `MD` | Size |
| `label` | `string` | — | Label above |
| `helper` | `string` | — | Helper/error text below |
| `placeholder` | `string` | — | Placeholder option |
| `disabled` | `boolean` | `false` | Disables select |

**SELECT_VARIANT:** `DEFAULT` · `ERROR` · `SUCCESS`

**SELECT_SIZE:** `SM` · `MD` · `LG`

---

### Tabs

```jsx
import Tabs, { TABS_VARIANT } from '@components/Tabs';

const tabs = [
  { id: 'overview', label: 'Overview', content: <p>Overview</p> },
  { id: 'api',      label: 'API',      content: <p>API docs</p> },
];

<Tabs tabs={tabs} variant={TABS_VARIANT.DEFAULT} />
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `tabs` | `{ id, label, content, icon?, disabled? }[]` | `[]` | Tab definitions |
| `variant` | `TABS_VARIANT` | `DEFAULT` | Visual style |
| `defaultTab` | `string` | first tab | Initially active tab id |
| `activeTab` | `string` | — | Controlled active tab |
| `onChange` | `function(id)` | — | Called on tab change |

**TABS_VARIANT:** `DEFAULT` · `PILLS` · `UNDERLINE`

---

### Modal

```jsx
import Modal, { MODAL_SIZE } from '@components/Modal';

<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Confirm action"
  size={MODAL_SIZE.MD}
  footer={<Button onClick={() => setOpen(false)}>OK</Button>}
>
  Modal content here.
</Modal>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `open` | `boolean` | `false` | Controls visibility |
| `onClose` | `function` | — | Called on close |
| `title` | `string` | — | Header title |
| `footer` | `ReactNode` | — | Footer slot (actions) |
| `size` | `MODAL_SIZE` | `MD` | Width preset |
| `closeOnOverlay` | `boolean` | `true` | Close on overlay click |

Closes on `Escape` key automatically.

**MODAL_SIZE:** `SM` · `MD` · `LG` · `FULL`

---

### Accordion

```jsx
import Accordion, { ACCORDION_VARIANT } from '@components/Accordion';

const items = [
  { id: '1', label: 'Question one', content: 'Answer one.' },
  { id: '2', label: 'Question two', content: 'Answer two.' },
];

<Accordion items={items} variant={ACCORDION_VARIANT.DEFAULT} />
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `{ id, label, content, disabled? }[]` | `[]` | Accordion items |
| `variant` | `ACCORDION_VARIANT` | `DEFAULT` | Visual style |
| `multiple` | `boolean` | `false` | Allow multiple open at once |
| `defaultOpen` | `string[]` | `[]` | Initially open item ids |

**ACCORDION_VARIANT:** `DEFAULT` · `BORDERED` · `FLUSH`

---

## Project Structure

```
src/
├── components/
│   └── Button/
│       ├── Button.jsx        # Component
│       ├── Button.scss       # BEM styles
│       ├── Button.types.js   # Enums
│       ├── Button.book.jsx   # Showcase examples
│       └── index.js          # Public export
├── styles/
│   ├── _variables.scss       # Design tokens
│   └── _mixins.scss          # Shared helpers
├── showcase/
│   └── Showcase.jsx          # Dev showcase page
└── index.js                  # Library entry point
```

### Path aliases

| Alias | Resolves to |
|---|---|
| `@components/*` | `src/components/*` |
| `@styles/*` | `src/styles/*` |
| `@showcase/*` | `src/showcase/*` |
| `@/*` | `src/*` |

---

## Adding a new component

1. Create `src/components/MyComponent/`
2. Add `MyComponent.jsx`, `MyComponent.scss`, `MyComponent.types.js`, `MyComponent.book.jsx`, `index.js`
3. Follow the enum pattern: `MY_COMPONENT_VARIANT = { DEFAULT: 'default', ... }`
4. Export from `src/index.js`
5. Register in the `SECTIONS` array in `Showcase.jsx`

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start showcase dev server |
| `npm run build` | Build showcase for production |
| `npm run build:lib` | Build library bundle for npm |
| `npm run lint` | Run ESLint |
