<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Kuis Sulit 20 Soal</title>
    <style>
        body { font-family: 'Segoe UI', sans-serif; background: #222; color: #fff; margin: 0; }
        .container { max-width: 600px; margin: 40px auto; background: #333; padding: 30px; border-radius: 12px; box-shadow: 0 8px 24px #0006; }
        .question { font-size: 1.2em; margin-bottom: 20px; }
        .options { list-style: none; padding: 0; }
        .options li { margin-bottom: 12px; }
        button { background: #0078d7; color: #fff; border: none; padding: 10px 24px; border-radius: 6px; cursor: pointer; font-size: 1em; }
        button:hover { background: #005fa3; }
        .score { font-size: 1.3em; margin-top: 20px; }
        .progress { margin-bottom: 18px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="progress"></div>
        <div class="question"></div>
        <ul class="options"></ul>
        <button id="nextBtn" style="display:none;">Soal Berikutnya</button>
        <div class="score"></div>
    </div>
    <script src="tmbil.js"></script>
</body>
</html>