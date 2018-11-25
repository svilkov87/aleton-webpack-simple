<template>
  <div class="b-container">
    <img src="img/logo.png" alt="logo" class="b-nav-logo">
    <ul class="b-nav-list">
        <li class="b-nav-list__item"
            v-for="(item, index) in listData()"
            :key="item.name"
            v-on:click="classActive( index )"
            v-bind:class="{ 'b-nav-list__item-active':item.active === true }"
            >
            <a v-bind:href="item.href">{{ item.name }}</a>
        </li>
    </ul>
  </div>
</template>


<script>
export default {

    methods : {
        listData() {
            return this.$store.state.menuItems;
        },
        classActive: function ( index ) {
            this.$store.commit('classActive', index );
            console.log(index);
        }
    },

}
</script>

<style lang="scss">

    .b-nav-list {
        display: flex;

        &__item-active {
            color: red;
        }
    }

</style>

