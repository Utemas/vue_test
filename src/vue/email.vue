<style>
.input{
    margin: 10px;
    border-radius: 5px;
    width: 80%;
    height: 30px;
}
.emailblock{
    padding: 50px;
    position:absolute;
    top:80px;
    left:20px;
    width:80%;
    height:65%;
    background-color:white;
}
.btn-send{
    position: absolute;
    bottom: 10px;
    right: 40px;
    background-color: rgba(0, 128, 128, 0.644);
    height: 50px;
    width: 140px;
    background-clip:content-box;
}
.btn-send a{
    color: #fff;
    text-decoration: none;
}
</style>
<template>
    <div>
        <div class="emailblock">
            <input type="text" class="input" placeholder="Title"/>
            <input type="text" class="input" placeholder="to"/>
            <textarea style="position:absolute;top:170px;left:60px" cols="200" rows="30"/>
            <div class="btn-send"><a href="#">Send</a></div>
        </div>
    </div>
</template>
