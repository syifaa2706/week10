<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chat</title>
    <!--buat css-->
    <style>
        .container{
            width: 100%;
        }
        #box{
            height: 300px;
            width: 50%;
            border: 1px solid black;
            padding: 0px 5px;
        }
        #pesan{
            width: 40%;
        }
    </style>
</head>
<body>
    <div class="container">
        <!--box menampilkan pesan-->
        <div id="box"></div>
        <!--input mengirim pesan-->
        <input type="text" id="pesan">
        <input type="button" value="kirim" onclick="Chat()">
    </div>

    <script>
        let chatbox = document.getElementById("box");
        let pesan = document.getElementById("pesan");

        function Chat(){
            //buat element/tag p lalu disimpan ke variabel paragraf
            let paragraf = document.createElement("p");//ibarat <P></P>
            //menambahkan element baru ke id box
            chatbox.appendChild(paragraf);
            //isi tag p dengan inputan dari id pesan
            paragraf.innerHTML = pesan.value;
        }
    </script>
</body>
</html>
