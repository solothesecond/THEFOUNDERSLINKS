<!DOCTYPE html>
<html>
<head>
    <title>Link Randomizer</title>
    <style>
        body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            font-family: Arial, sans-serif;
        }
        #linkInput {
            position: absolute;
            bottom: 20px;
            right: 20px;
        }
        #randomizeButton {
            padding: 10px 20px;
            font-size: 16px;
            margin-bottom: 20px;
        }
        #displayLink {
            margin-top: 20px;
            font-size: 18px;
            word-break: break-all;
        }
    </style>
</head>
<body>
    <button id="randomizeButton">generate!</button>
    <div id="displayLink"></div>
    <div id="linkInput">
        <input type="text" id="link" placeholder="Insert link here">
        <button onclick="addLink()">Add Link</button>
    </div>
    <script>
        function addLink() {
            const linkInput = document.getElementById('link');
            const link = linkInput.value.trim();
            if (link) {
                fetch('https://learningonline.global.ssl.fastly.net', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ link }),
                })
                .then(response => response.text())
                .then(data => {
                    console.log(data);
                    linkInput.value = '';
                })
                .catch(error => console.error('Error adding link:', error));
            }
        }

        document.getElementById('randomizeButton').addEventListener('click', function() {
            fetch('https://schoollearning.soloo.fun')
                .then(response => response.text())
                .then(link => {
                    const displayLink = document.getElementById('displayLink');
                    displayLink.innerHTML = `<a href="${link}" target="_blank">${link}</a>`;
                    console.log('Random link selected:', link);
                })
                .catch(error => console.error('Error getting random link:', error));
        });
    </script>
</body>
</html>
