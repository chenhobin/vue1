<template>
<div style="border:1px solid black">
    <h1>楼盘名称：{{content.name}}</h1>
    <p>楼盘价格：{{content.price}}</p>
</div>
</template>
<script>
    export default {
        name:" Qpe",
        props:{
            content:Object
        }
    }
</script>