document.getElementById("dropdown").addEventListener("change", function() {
    var selectedValue = this.value;
    var roleContainer = document.getElementById("role-id-container");
    
    if (selectedValue === "role") {
      roleContainer.style.display = "block";
    } else {
      roleContainer.style.display = "none";
    }
  });