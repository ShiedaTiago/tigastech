@echo off
cd /d "%~dp0"
node_modules\.bin\vite.cmd preview --host 127.0.0.1 --port 4173
