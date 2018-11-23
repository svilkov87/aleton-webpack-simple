<template>
  <div class="b-container">
    <ul class="b-nav-list">
        <li class="b-nav-list__item"
            v-for="data in menuItems"
            :key="data.name"
            v-bind:class="{
                'b-nav-list__item-active':data.active === true
                }"
            >
            {{ data.name }}
        </li>
    </ul>
  </div>
</template>


<script>
export default {

    data() {
        return {
            menuItems : [
                {
                    name: 'Item_1',
                    active : true
                },
                {
                    name: 'Item_2',
                    active : false
                },
                {
                    name: 'Item_3',
                    active : false
                },
                {
                    name: 'Item_4',
                    active : false
                },
            ]
        }
    }
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

