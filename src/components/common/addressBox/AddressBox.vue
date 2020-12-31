<template>
    <div class="address-box" :style="styleObject">
        <div class="pic"><slot name="pic"></slot></div>
        <div class="name"><slot name="name"></slot></div>
    </div>
</template>

<script>
export default {
    name: 'AddressBox',
    props: {
        bgcolor: String
    },
    data: function() {
        return {
            styleObject: {
                backgroundColor: this.bgcolor
            }
        }
    }
}
</script>

<style>
.address-box {
    display: flex;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(234, 236, 239);
}
.pic {
    flex: 1;
    max-width: 5vw;
    padding: 1vw;
}
.pic > img {
    width: 3vw;
    margin-top: 1vh;
}
.name {
    flex: 1;
    margin-top: 2vh;
}
.name > p {
    font-size: 1vw;
    padding: 2vh 2vh;
}

/* 适配移动端 */
@media screen and (max-width: 960px){
    .pic {
        max-width: 12vw;
    }
    .pic > img{
        width: 10vw;
        margin-top: 1vh;
    }
}
</style>