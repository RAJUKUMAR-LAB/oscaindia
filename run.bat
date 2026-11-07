@echo off
title OSCA INDIA — Graphic Design Studio Server
cd /d "%~dp0"
set PYTHONDONTWRITEBYTECODE=1
echo ========================================================
echo        OSCA INDIA GRAPHIC DESIGN STUDIO SERVER
echo ========================================================
echo Official Hotline & WhatsApp: +91 6200177076
echo Studio Website: http://127.0.0.1:5000
echo ========================================================
echo.

where python >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo [1/2] Python detected. Launching OSCA India Studio Server...
    timeout /t 1 /nobreak >nul
    start http://127.0.0.1:5000
    python -B app.py
) else (
    echo [!] Python not detected in PATH.
    echo [*] Opening OSCA INDIA directly in your browser...
    start index.html
)

pause
