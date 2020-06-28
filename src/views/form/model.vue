<template>
  <div class="model-container">
    <draggable
      v-model="myArray"
      :group="{ name: 'people', pull: 'clone', put: false }"
      :sort="false"
      ghostClass='ghost'
      @start="drag=true"
      @end="drag=false"
      :move="handleMove">
      <div v-for="element in myArray" :key="element.id">{{element.name}}</div>
    </draggable>
  </div>
</template>

<script>
import Draggable from "vuedraggable"

export default {
  name: "formModel",
  components: {
    Draggable
  },
  data () {
    return {
      drag: false,
      myArray: [
        { id: 1, name: 'input' },
        { id: 2, name: 'select' }
      ]
    }
  },
  methods: {
    handleMove () {
      return true
    }
  }
}
</script>

<style lang="scss" scoped>
  .model-container {

  }
</style>