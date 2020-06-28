<template>
  <div class="model-container">
    <draggable
      v-model="myArray"
      group="people"
      ghostClass="ghost"
      animation=200
      handle='.drag-widget'
      @start="drag=true"
      @end="drag=false"
      @add="handleWidgetAdd">
      <div v-for="element in myArray" :key="element.id">{{element.name}}</div>
    </draggable>
  </div>
</template>

<script>
import Draggable from "vuedraggable"

export default {
  name: "formWidget",
  components: {
    Draggable
  },
  data () {
    return {
      drag: false,
      myArray: [
        { id: 3, name: 'input' },
        { id: 4, name: 'select' }
      ]
    }
  },
  methods: {
    handleWidgetAdd (evt, row, colIndex) {
      console.log(evt, row, colIndex)
    }
  }
}
</script>

<style lang="scss" scoped>
  .model-container {

  }
</style>