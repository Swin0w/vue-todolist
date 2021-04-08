function init() {
  new Vue({
    el: "#app",
    data: {
      toDoList:[
        
      ],
      newJob: "",
    },
    methods: {
      delJob: function(elem) {
        this.toDoList.splice(elem, 1);
      },
      addJob: function() {
        console.log("Ciao");
        if(this.newJob.length > 0) {
          this.toDoList.push(this.newJob);
          this.newJob="";
        } else {
          alert("Non hai scritto nulla");
        }
      }
    }
  });
}
document.addEventListener("DOMContentLoaded", init);
