#  todo_web_cline

[Cline](https://github.com/cline/cline)で生成した、ブラウザで動く簡単なToDoアプリ

# 利用モデルと生成結果

- OpenAI gpt4o → [github pagesで見る](/todo-4o/index.html)
    - todo-4o/index.html
    - todo-4o/script.js
    - todo-4o/style.css
- ollama + phi4 14B (4bit量子化) → [github pagesで見る](/todo-phi4/index.html)
    - モデル：[phi4](https://ollama.com/library/phi4)をベースにコンテキスト長を16384にしたもの
    - todo-phi4/index.html
    - todo-phi4/script.js
- ollama + Qwen2.5 Coder 32B (4bit量子化) のカスタマイズ版 → [github pagesで見る](/todo-qwen25/index.html)
    - モデル：[hhao/qwen2.5-coder-tools](https://ollama.com/hhao/qwen2.5-coder-tools:32b/blobs/6da8a45bf533)
    - todo-qwen25/index.html

プロンプトは次の通り

```
please create todo run in a browser.
```


# ライセンス/License

- MIT

