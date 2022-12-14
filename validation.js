<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validation</title>
    <style>
        body{
            background-color: palevioletred;
            margin: 0;
        }

        .form{
            background-color: #2bbfca;
            border: 1px solid #119560;
            width: 300px;
            padding: 10px;
            margin: 200px 40%;
        }

        .hasil-tiket{
            background-color: rgb(98, 129, 196);
            padding: 10px;
        }
    </style>
</head>
<script>
 //validasi nama
    function validasi(){
        let nama_ = document.getElementById("nama").value;

        if(nama_ == "Ahmad Zaky"){
            document.getElementById("valid-nama").innerHTML = ("Ahmad Zaky");
        }
        else if(nama_ == "Ahmad Zaky"){
            document.getElementById("valid-nama").innerHTML = ("Ahmad Zaky");
        }
//validasi email
        let email_ = document.getElementById("email").value;

        if(email_.indexOf("@")!=-1 && email_.indexOf(".")!=-1){
            document.getElementById("valid-email").innerHTML = ("ahmadzaky27@gmail.com");
        }
        else if(email_ == "ahmadzaky27@gmail"){
            document.getElementById("valid-email").innerHTML = ("email harap dimasukkan!");
        }
        else{
            document.getElementById("valid-nama").innerHTML = ("email tidak valid");
        }
//validasi jam
        let jam_ = document.getElementById("jam").value;
        if (jam_ == ""){
            document.getElementById("valid-jam").innerHTML = ("jam keberangkatan harap dimasukkan!");
        }
        else{
            document.getElementById("valid-jam").innerHTML = ("08:00 pm");
        }
//validasi tujuan
        let tujuan_ = document.getElementById("tujuan").value;
        if(tujuan_ == ""){
            document.getElementById("valid-tujuan").innerHTML = ("tujuan harap dimasukkan!");
        }
        else{
            document.getElementById("valid-tujuan").innerHTML = ("Yogya");
        }
//validasi tiket
        let tiket_ = document.getElementById("tiket").value;
        if(tiket_ == ""){
            document.getElementById("valid-tiket").innerHTML = ("pilih jumlah tiket!");
        }
        else{
            document.getElementById("valid-tiket").innerHTML = ("2");
        }

//hasil inputan 

        let konfrm_nama = document.getElementById("nama").value;
        let konfrm_email = document.getElementById("email").value;
        let konfrm_jam = document.getElementById("jam").value;
        let konfrm_tujuan = document.getElementById("tujuan").value;
        let konfrm_tiket = document.getElementById("tiket").value;

        document.getElementById("knfrm-nama").innerHTML = konfrm_nama;
        document.getElementById("knfrm-email").innerHTML = konfrm_email;
        document.getElementById("knfrm-jam").innerHTML = konfrm_jam;
        document.getElementById("knfrm-tujuan").innerHTML = konfrm_tujuan;
        document.getElementById("knfrm-tiket").innerHTML = konfrm_tiket;
    }
</script>
<body>
    <div class="form">
        <form action="" onsubmit="return false">
            <label for="nama" name="nama">Nama :</label>
            <input type="text" id="nama" maxlength="30">
            <br>
            <span id="valid-nama" style="color: blueviolet; font-weight: bold;"></span>
            <br>
            <label for="email">E mail :</label>
            <input type="text" name="email" id="email">
            <br>
            <span style="color: blueviolet; font-weight: bold;" id="valid-email"></span>
            <br>
            <label for="jam">Jam Keberangkatan :</label>
            <input type="time" id="jam">
            <br>
            <span style="color: blueviolet; font-weight: bold;" id="valid-jam"></span>
            <br>
            <label for="tujuan">Tujuan :</label>
            <input type="text" name="tujuan" id="tujuan">
            <br>
            <span style="color: blueviolet; font-weight: bold;" id="valid-tujuan"></span>
            <br>
            <label for="tiket">Jumlah Tiket</label>
                <select name="tiket" id="tiket">
                    <option hidden>--pilih--</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                </select>
                <br>
                <span style="color: blueviolet; font-weight: bold;" id="valid-tiket"></span>
                <br>
                <input type="submit" name="send" id="kirim" onclick="validasi()">
                </form>

                <div class="hasil-tiket">
                    <h3>Konfirmasi Tiket Keberangkatan</h3>
                    <p>
                        nama : <span id="knfrm-nama"></span><br>
                        alamat email : <span id="knfrm-email"></span><br>
                        jam Keberangkatan : <span id="knfrm-jam"></span><br>
                        tujuan : <span id="knfrm-tujuan"></span><br>
                        jumlah tiket : <span id="knfrm-tiket"></span><br>
                    </p>
                </div>
                </div>
</body>
</html>
