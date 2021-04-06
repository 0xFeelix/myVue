<template>
  <div id="todoapp">
    <div class="card">
      <h1 :style="{ color: inputValue.length < 5 ? 'white' : '#FFC22B' }">
        {{ title }}
      </h1>

      <div class="form">
        <input
          class="form-control"
          type="text"
          :placeholder="myPlaceholder"
          :value="inputValue"
          @input="inputChanger"
          @keypress.enter="addNewNote"
        />
      </div>

      <button type="button" class="btn btn-success mt-1" @click="addNewNote">
        Add
      </button>
      <hr />

      <ul class="list-group" v-if="notes.length !== 0">
        <li
          class="list-group-item mb-1"
          v-for="(myNote, index) in notes"
          :key="index.id"
        >
          <span class="badge bg-warning text-dark">{{ index + 1 }}</span>
          <span class="lists">{{ myNote }}</span>
          <button
            type="button"
            class="btn btn-danger"
            @click="removeNewNote(index)"
          >
            Remove
          </button>
        </li>
        <hr class="rke" />
        <button
          type="button"
          class="btn btn-outline-danger mb-2"
          @click="removeAllNotes(index)"
        >
          Remove all
        </button>

        <li>
          Number of notes:
          <span class="badge bg-success">{{ notes.length }}</span>
        </li>
      </ul>

      <div v-else>No notes yet</div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      title: "Todo app",
      myPlaceholder: "Add todo list",
      inputValue: "",
      notes: [],
    };
  },
  methods: {
    inputChanger(event) {
      this.inputValue = event.target.value;
    },

    addNewNote() {
      if (this.inputValue !== "") {
        this.notes.push(this.inputValue);
        this.inputValue = "";
      }
    },
    removeNewNote(index) {
      this.notes.splice(index, 1);
    },

    removeAllNotes(index) {
      this.notes.splice(index);
    },
  },
};
</script>


<style>
#todoapp {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
.card {
  background: #304457 !important;
  border: none !important;
  margin-bottom: 50px;
  padding: 20px;
  width: 300px;
}
.list-group .btn {
  padding: 4px !important;
  font-size: 10px !important;
  float: right;
}

.lists {
  margin-left: 5px;
  color: darkslategrey;
  padding: 10px;
}
ul {
  list-style: none !important;
}
hr{width: 100%;}
</style>