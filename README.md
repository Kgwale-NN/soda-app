# Soda App - ReactTS UI Challenge

A single-page OLIPOP-inspired landing page built with React, TypeScript, Vite, and plain CSS using CSS Modules. This educational project translates the supplied UI Challenge 8 design into reusable components.

## Quick start

Prerequisites: **Node.js 24.x**, npm (included with Node.js), and Git to clone the repository.

```sh
git clone https://github.com/Kgwale-NN/soda-app.git
cd soda-app
npm ci
npm run dev
```

Open the URL printed in the terminal, usually **http://localhost:5173**. If that port is busy, Vite prints a different port. Leave the terminal running while using the app; press **Ctrl+C** to stop it.

Already downloaded the project? Open a terminal in the folder containing `package.json`, then run `npm ci` and `npm run dev`.

No backend, database, API keys, or `.env` file is needed.

## Commands

| Command | Purpose |
| --- | --- |
| `npm ci` | Install the versions recorded in `package-lock.json` |
| `npm run dev` | Start the development server with live updates |
| `npm run lint` | Check source code with ESLint |
| `npm run build` | Run TypeScript checks and generate the production site in `dist/` |
| `npm run preview` | Preview the existing production build locally |

To check a production build:

```sh
npm run lint
npm run build
npm run preview
```

Open the preview URL printed in the terminal. Rebuild after editing source files to update the preview. There is currently no automated test script.

## Features and current behaviour

- Full-height hero below the navigation, followed by ingredients, products, subscription benefits, and a footer.
- Four product cards rendered from typed product data through a reusable `ProductCard` component.
- Plain CSS with shared spacing variables, pastel product colours, and responsive layouts.
- Shop Online and Shop OLIPOP scroll to the flavour cards; Learn More scrolls to the ingredients section; Read More scrolls to the benefits section. Subscribe and Subscribe & Save scroll to the demo email form. Find In Store opens the official OLIPOP store locator.
- At widths of 900px or below, navigation uses a menu button. The menu closes after selecting a link, pressing Escape, or moving focus outside the navigation. Escape returns focus to the menu button.
- A skip-to-content link, visible keyboard focus styles, and reduced-motion support.
- Required email input with browser email validation. A valid submission displays a demo message; it does **not** send or store the email or create a subscription.
- Larger subscription controls and social-link touch targets on smaller screens and devices with a coarse pointer.

### Limitations

This is a frontend UI demonstration. Product prices are display-only; there is no cart or checkout. Footer information and flavour names are text, and social icons link to the platforms' homepages. Product carousel controls from the reference are not implemented. A real mailing-list service is not connected.

## Project structure

```text
src/
  assets/                       Product images, icons, logos, and fonts
  Components/
    Auth/Subscribe.tsx          Demo email form and validation feedback
    Body/
      FirstContent.tsx          Hero
      SecondContainer.tsx       Ingredients section
      ThirdContainer.tsx        Product data and card rendering
      ProductCard.tsx           Reusable typed product card
      FourthContainer.tsx       Subscription benefits
      FifthContainer.tsx        Subscription promotion
      Body.module.css           Section and product styling
    Footer/                     Footer content and layout
    Inputs/                     Input helpers (not used by the current form)
    Navbar/                     Navigation and mobile menu
    Text/                       Reusable text component
    ContentContainer.tsx        Shared content width and side padding
  App.tsx                       Page composition
  App.css                       Application layout and navigation offset
  index.css                     Fonts, shared spacing variables, global styles
  main.tsx                      React entry point
```

CSS Modules are ordinary CSS files scoped to components; no CSS framework is used.

## Working on the design

- Edit product names, images, prices, and colour-class assignments in `ThirdContainer.tsx`.
- Edit shared card markup in `ProductCard.tsx` to update all four cards together.
- Edit `--page-gutter`, `--content-width`, and `--section-space` in `src/index.css` to adjust shared spacing.
- Use margin for space outside an element and padding for space inside it.
- Use each component's `.module.css` file for its styles. Section styles live in `Body.module.css`.

## Manual verification

Recent browser checks covered 320 x 568, 390 x 844, 768 x 1024, 844 x 390 (landscape), and 1440 x 900 viewports, with no horizontal page overflow observed. The mobile menu opened, closed with Escape, and closed after selecting a link. Mobile subscription controls and social links were measured at 44px tall. These browser checks are not a guarantee for every device.

After future changes:

1. Run `npm run lint` and `npm run build`.
2. Check the widths listed above for clipped text, overlapping elements, and horizontal scrolling.
3. Open the mobile menu, follow a section link, and confirm the destination is below the fixed navigation.
4. Reopen the menu and press Escape; verify focus returns to the menu button.
5. Use Tab to check visible focus and the skip-to-content link.
6. Submit an empty email, an invalid email, and a valid test address. Invalid values should be rejected; a valid value should show demo feedback without creating a subscription.
7. Compare desktop spacing, colours, typography, and card proportions against the supplied reference.

## Deployment and submission

Use the following settings for a static hosting provider:

| Setting | Value |
| --- | --- |
| Root directory | Folder containing `package.json` |
| Install command | `npm ci` |
| Build command | `npm run build` |
| Output directory | `dist` |

For deployment under a subdirectory, configure Vite's `base` in `vite.config.ts` to match that path before building.

A publicly accessible deployment URL has not yet been verified in this review. Before submitting, add the verified production URL here and open it in a signed-out or private browser window. The reviewer must be able to view the page without an account or password. `localhost` and `npm run preview` are local tools, not public hosting.

## Commit workflow

Make one focused commit per completed improvement. Review `git diff`, stage the relevant files, and use a message that explains the change. Push completed commits to GitHub so reviewers can follow the work. Do not recreate or backdate earlier development history.

## Troubleshooting

| Problem | Solution |
| --- | --- |
| `node` or `npm` is not recognised | Install Node.js with npm, then reopen the terminal. |
| PowerShell blocks `npm.ps1` | Use `npm.cmd ci` and `npm.cmd run dev`. |
| npm cannot find `package.json` | Open the terminal in the application folder. |
| Unsupported Node version | Check `node --version`; use Node.js 24.x for this project. |
| Missing dependencies | Run `npm ci`. |
| Local URL does not open | Keep the development server running and use its printed URL. |
| Preview is missing or outdated | Run `npm run build` before `npm run preview`. |
| Subscription does not send email | This is intentional demo behaviour; a mailing-list integration is required for real subscriptions. |

## Credits

The layout is based on the supplied UI Challenge 8 reference. OLIPOP branding and product imagery belong to their respective owners. No licence file is currently included in this repository.
