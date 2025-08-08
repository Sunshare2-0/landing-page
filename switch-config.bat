@echo off
echo Sunshare Landing Page Configuration Switcher
echo ===========================================
echo.
echo Choose configuration:
echo 1. Local Development (no homepage field)
echo 2. GitHub Pages Deployment (with homepage field)
echo.
set /p choice="Enter your choice (1 or 2): "

if "%choice%"=="1" (
    echo Switching to Local Development configuration...
    copy package.json.local package.json
    echo Local development configuration activated!
    echo You can now run: yarn start
) else if "%choice%"=="2" (
    echo Switching to GitHub Pages Deployment configuration...
    copy package.json.backup package.json
    echo GitHub Pages deployment configuration activated!
    echo You can now run: yarn deploy
) else (
    echo Invalid choice. Please run the script again and choose 1 or 2.
)
echo.
pause 