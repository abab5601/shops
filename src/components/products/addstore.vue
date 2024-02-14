<template>
    <button :class="btnclass" v-if="!store.getters.car?.[props.id] || store.getters.car?.[props.id] == 0" type="button" @click="add">添加到購物車</button>
    <div v-else class="input-group mb-3" style="background-color: white;">
        <button class="btn btn-outline-secondary" type="button" @click="remove">-</button>
        <input style="padding: 2px;" @blur="save(true)" @input="save()" v-model="number" type="number" min="0" step="1" required class="form-control" placeholder="輸入數量">
        <button class="btn btn-outline-secondary" type="button" @click="add">+</button>
    </div>
</template>
<script setup>
import { compile, computed, defineProps } from 'vue';
import { useStore } from 'vuex';
import { ref } from 'vue';
const props = defineProps({
    id: {
        type: String
    },
    name: {
        type: String
    },
    btnclass: {
        type: String
    }
})
const store = useStore();
function add() {
    store.commit('add', props);
}
function remove() {
    store.commit('remove', props);
}
function save(isnull) {
    if (numberVal || isnull)
        store.commit('save', { ...props, value: numberVal });
}
const numberVal = null;
const number = computed({
    get() {
        return store.getters.car?.[props.id];
    },
    set(newVal) {
        numberVal = newVal;
    }
});
</script>