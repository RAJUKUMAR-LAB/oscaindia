@echo off
title OSCA INDIA — Graphic Design Studio
cd /d "%~dp0"
echo ========================================================
echo        OSCA INDIA GRAPHIC DESIGN STUDIO
echo ========================================================
echo Official Hotline & WhatsApp: +91 6200177076
echo Website: https://oscaindia.com
echo ========================================================
echo.

where python >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo [*] Launching OSCA India local server on port 5000...
    start http://127.0.0.1:5000
    python -m http.server 5000
) else (
    echo [*] Opening OSCA INDIA directly in your default browser...
    start index.html
)
