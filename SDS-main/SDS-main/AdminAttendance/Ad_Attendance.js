document.addEventListener("DOMContentLoaded", function () {
    const addStudentBtn = document.getElementById("addStudentBtn");
    const newStudentInput = document.getElementById("newStudent");
    const studentList = document.getElementById("studentList");
  
    // Initially hide the input
    newStudentInput.style.display = "none";
  
    // Add remove button to an <li>
    function appendRemoveButton(li) {
      const label = li.querySelector("label");
      if (label && !label.querySelector(".remove-btn")) {
        const removeBtn = document.createElement("button");
        removeBtn.innerHTML = "&times;";
        removeBtn.className = "remove-btn";
        removeBtn.title = "Remove student";
        label.appendChild(removeBtn);
      }
    }
  
    // Add remove buttons to existing list items
    document.querySelectorAll("#studentList li").forEach(appendRemoveButton);
  
    // Handle add student
    addStudentBtn.addEventListener("click", () => {
      if (newStudentInput.style.display === "none") {
        newStudentInput.style.display = "block";
        newStudentInput.focus();
      } else {
        const name = newStudentInput.value.trim();
        if (name !== "") {
          const li = document.createElement("li");
          li.innerHTML = `
            <label style="display: flex; align-items: center; gap: 0.5rem;">
              <input type="checkbox" />
              <input type="text" class="name-input" value="${name}" />
            </label>
          `;
          appendRemoveButton(li);
          studentList.appendChild(li);
          newStudentInput.value = "";
          newStudentInput.style.display = "none";
        }
      }
    });
  
    // Handle remove clicks
    studentList.addEventListener("click", function (e) {
      if (e.target.classList.contains("remove-btn")) {
        const li = e.target.closest("li");
        if (li) li.remove();
      }
    });
  });
