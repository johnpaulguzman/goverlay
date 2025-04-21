# Trials-Overlay

## Building Trials-Overlay

1. Execute `npx nx build:dll trials-overlay`
2. Sign the built .dll and .exe files: `/game-overlay/prebuilt/n_overlay.x64.dll, /game-overlay/prebuilt/n_overlay.dll, /game-overlay/prebuilt/injector_helper.exe, and /game-overlay/prebuilt/injector_helper.x64.exe`
3. Execute `npx nx build:addon:x64 trials-overlay`

## Updating Overlay DLL

1. Modify game-overlay/sln to reflect DLL changes
2. Execute `npx nx build:dll trials-overlay`

## Updating Overlay Addon (.node)

1. After making changes to electron-overlay, it should be rebuilt.
2. Execute `npx nx build:addon:x64 trials-overlay` to rebuild electron-overlay.node
