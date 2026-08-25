# React Native challenge

## Challenge

Bottom sheets are panels that slide up from the bottom edge of the screen to present content or actions in context, without navigating the user away from what they were doing. They're everywhere in mobile apps — share menus, filter panels, confirmation prompts, sign-in flows — and they're one of the most common pieces of shared UI a mobile team ends up owning.

Build a reusable bottom sheet component that can be opened and closed, with a customisable title and contents.

## Requirements

- The bottom sheet should contain the following elements:
  1. Title/heading string.
  2. Any contents as the body.
  3. A close button that hides/closes the bottom sheet when pressed.
- The bottom sheet is anchored to the bottom of the screen, spans the full width, and is only as tall as its contents need it to be.
- The bottom sheet is displayed above a semi-transparent background overlay that dims the rest of the screen.
- The bottom sheet is opened from the demo screen in `App.tsx`, and also closes when the overlay is pressed.
- The bottom sheet respects the device's safe areas, so its contents aren't hidden behind the notch or the home indicator. `react-native-safe-area-context` is already installed.

Design the necessary props or configuration options for the bottom sheet based on the above requirements.

### Note:

In a real app you'd probably use a library such as `@gorhom/bottom-sheet`, but for the sake of this task, build the component yourself. React Native's own `Modal` and `Animated` APIs are fair game, as is adding an animation or gesture library if you'd find one useful.

## Stretch goals

- On Android, the hardware/gesture back button closes the sheet.
- The bottom sheet can be dismissed by swiping it down.
- The bottom sheet's contents stay visible when the keyboard opens over it.
- Animation...

## Keep in mind

- This should be a React Native app with TypeScript.
- We don't want you to spend too long on this task. See how much you can get done in an hour or two.
- Write any tests that are useful. We're not after loads of coverage. Jest and React Native Testing Library are already set up, with one example test in `components/__tests__/`.
- We're more concerned with functionality at this stage so there are no designs to work to. You're free to make any UI/layout choices you like.
- You'll be walking us through your code in the interview, so be ready to talk about the decisions you made and anything you'd do differently with more time.
- If you have questions before you start, please feel free to ask them!

Have fun! We look forward to seeing your work.

## Getting started

This is an [Expo](https://expo.dev) project, so you don't need Xcode or Android Studio to complete the task.

Run `npm install` and then `npm start` to start the dev server. From there you can press `i` to open the iOS simulator or `a` to open an Android emulator if you have them set up.

Other useful commands:

- `npm test` runs the tests.
- `npm run tsc` type checks the project.

The component you need to build is stubbed out in `components/BottomSheet.tsx`, and the demo screen that uses it is `App.tsx`.
