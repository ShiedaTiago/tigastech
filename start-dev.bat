@echo off
cd /d "%~dp0"
echo Starting Tigas Tech preview on http://127.0.0.1:4173/
call npm run dev -- --host 127.0.0.1 --port 4173 > "%TEMP%\tigastech-preview.log" 2>&1
echo.
echo If the server stopped, press any key to close this window.
pause >nul
