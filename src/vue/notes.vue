<style>
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
</style>
<template>
    <div>
        <ReturnLink/>
        <div>
            <aside class="notes-side">
                <h1 style="margin:0px">笔记</h1>
                <p style="margin:5px">the note</p>
                <ul>
                    <li>笔记列表</li>
                    <li>新的笔记</li>
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
