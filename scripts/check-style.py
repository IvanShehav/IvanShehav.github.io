"""Проверка текстов: нет длинных тире и буквы ё. Запуск: python3 scripts/check-style.py"""
import pathlib, sys
root = pathlib.Path(__file__).resolve().parent.parent
bad = 0
for f in list(root.glob("*.html")) + list((root / "assets").glob("*.js")) + list((root / "assets").glob("*.css")) + [root / "README.md"]:
    if not f.exists():
        continue
    for n, line in enumerate(f.read_text(encoding="utf-8").splitlines(), 1):
        for ch, name in (("—", "em dash"), ("–", "en dash"), ("ё", "yo"), ("Ё", "Yo")):
            if ch in line:
                print(f"{f.relative_to(root)}:{n}: {name}: {line.strip()[:90]}")
                bad += 1
print("OK" if not bad else f"{bad} problems")
sys.exit(1 if bad else 0)
