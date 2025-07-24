<script setup>
import { ref } from "vue";
import {
  generateRandomArray,
  bubbleSort as bubbleSortAlgo,
  selectionSort as selectionSortAlgo,
  insertionSort as insertionSortAlgo, quickSort
} from "../utils/sortingAlgorithms.js";

const bars = ref([3, 6, 7, 8, 1, 15]);

const wow = () => {
  bars.value = generateRandomArray(1000);
}
wow();

async function bubbleSort() {
  await bubbleSortAlgo(bars.value);
}

async function selectionSort() {
  await selectionSortAlgo(bars.value);
}

async function insertionSort() {
  await insertionSortAlgo(bars.value);
}

async function quickSortCall() {
  bars.value= quickSort(bars.value)
}




</script>
<template>

  <div id="controls">
    <button @click="  wow();">Neu generieren</button>
    <button @click="bubbleSort">Bubble Sort</button>
    <button @click="selectionSort">Selection Sort</button>
    <button @click="insertionSort">Insertion Sort</button>
    <button @click="quickSortCall">Quick Sort</button>
  </div>
  <div id="container">
    <template v-for="(bar, index) in bars">
      <div
          style="
           background-color: #f2f2f2"
          :style="{
          width: bar * 40 + 'px',
          height:500/ bars.length + 'px'
        }"
      ></div>
    </template>
  </div>
</template>

