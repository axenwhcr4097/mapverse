@echo off
title MapVerse
cd /d "%~dp0"
set PY=
where python >nul 2>nul && set PY=python
if not defined PY where py >nul 2>nul && set PY=py
if not defined PY (
  echo Khong tim thay Python. Cai Python 3 tu python.org roi chay lai.
  pause
  exit /b 1
)
start "" http://127.0.0.1:8765/
%PY% -m http.server 8765 --bind 127.0.0.1
