
<style>
 @import '../assets/css/common.css';
.notes-side{
    position: absolute;
    top:50px;
    left: 0px;
    width: 10%;
    height: 90%;
    border: 1px solid black;
}
.note-center{
    position: absolute;
    top: 50px;
    left: 10%;
    width:89%;
    height:90%;
    border: 1px solid black;
    background-color: white;
}
.note-li-block{
    width: 100%;
    height: 50px;
    /* border: 1px black solid; */
    /* background-color: rgb(8, 196, 187); */
    text-align: center;
    line-height: 50px;
    color:#fff;
    font-size: 20px;
}
.note-li-block:active{
    color: #000;
}
.note-block-button{
    color:white;
    text-transform: uppercase;
    text-decoration: none;
    overflow: hidden;
}
a{
    text-decoration: none;
}

.note-ul{
    list-style: none;
    padding:0;
    margin:0;
}
.white{
    color: #fff;
}
.note-li-block:active{
    background-color: rgb(47, 145, 28);
}
.active{
    background: rgb(47, 145, 28);
    color: #000;
}
</style>
<template>
    <div>
        <ReturnLink/>
        <div>
            <aside class="notes-side">
                <h1 style="margin:0px">笔记</h1>
                <p style="margin:5px">the note</p>
                <ul class="note-ul">
                    <li class="note-li-block note-block-button active"><router-link class="white active " to="#">笔记列表</router-link></li>
                    <li class="note-li-block note-block-button"><router-link class="white" to="/newNotes">新的笔记</router-link></li>
                    <li></li>
                </ul>
            </aside>
            <div class="note-center">
            </div>
        </div>
    </div>
</template>
<script>
import ReturnLink from '@/components/ReturnLink'
export default{
  components: {
    ReturnLink
  }
}
</script>
