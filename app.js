document.addEventListener("DOMContentLoaded", (e) => {
  if (window.location.pathname.endsWith("index.html")) {
    const fullName = document.querySelector("#name");
    const contact = document.querySelector("#contact");
    const address = document.querySelector("#address");
    const entryTime = document.querySelector("#entry-time");
    const exitTime = document.querySelector("#exit-time");
    const date = document.querySelector("#date");
    const alertSection = document.querySelector(".alert-message");

    const form = document.querySelector(".visitor-data");

    let visitorData = JSON.parse(localStorage.getItem("visitorData")) || [];
    console.log(visitorData);

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      formValidation();

      const obj = {
        fullName: fullName.value,
        contact: contact.value,
        address: address.value,
        entryTime: entryTime.value,
        exitTime: exitTime.value,
        date: date.value,
      };

      visitorData.push(obj);

      if (formValidation()) {
        localStorage.setItem("visitorData", JSON.stringify(visitorData));
      }

      // displayData();
      if (formValidation()) {
        form.reset();
      }
    });

    /*form validation */

    const formValidation = () => {
      const fullNameValue = fullName.value;

      const hasNumber = /\d/;
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;

      if (!isNaN(fullNameValue) && fullNameValue.trim() !== "") {
        Swal.fire("Name can't be a Number!");
        return false;
      } else if (hasNumber.test(fullNameValue)) {
        Swal.fire("Name shoudn't include number!!");
        return false;
      } else if (hasSpecialChar.test(fullNameValue)) {
        Swal.fire("Name shoudn't include any special character!!");
        return false;
      } else if (address.value === "") {
        Swal.fire("please Enter your address!!");
        return false;
      } else if (entryTime.value === "") {
        Swal.fire("please enter, entry time!!");
        return false;
      } else if (date.value === "") {
        Swal.fire(" please select date!!");
        return false;
      }

      return true;
    };

    /*delete data */
    // const deleteData = () => {
    //   const trash = document.querySelectorAll(".delete-btn");
    //   const tableBody = document.querySelector(".data");
    //   const tableRow = document.querySelector("tr");

    //   trash.forEach((btn, index) => {
    //     btn.addEventListener("click", () => {
    //       Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!",
    //       }).then((result) => {
    //         if (result.isConfirmed) {
    //           visitorData.splice(index, 1);
    //           localStorage.setItem("visitorData", JSON.stringify(visitorData));
    //           // displayData();

    //           Swal.fire({
    //             title: "Deleted!",
    //             text: "Your file has been deleted.",
    //             icon: "success",
    //           });
    //         }
    //       });
    //     });
    //   });
    // };

    /* edit date */
    // const editData = () => {
    //   const editBtn = document.querySelectorAll(".edit-btn");
    //   const updtName = document.querySelector("#update-name");
    //   const updtCnct = document.querySelector("#update-cnct");
    //   const updtAdd = document.querySelector("#update-add");
    //   const updtEnTime = document.querySelector("#update-enTime");
    //   const updtExTime = document.querySelector("#update-exTime");
    //   const updtDate = document.querySelector("#update-date");

    //   editBtn.forEach((btn, index) => {
    //     btn.addEventListener("click", () => {
    //       updtName.value = btn.getAttribute("name");
    //       updtAdd.value = btn.getAttribute("add");
    //       updtEnTime.value = btn.getAttribute("enTime");
    //       updtExTime.value = btn.getAttribute("exTime");
    //       updtDate.value = btn.getAttribute("date");
    //       updtCnct.value = btn.getAttribute("cnct");

    //       const updateBtn = document.querySelector(".update-btn");
    //       updateBtn.addEventListener("click", () => {
    //         // formValidation();
    //         const obj = {
    //           fullName: updtName.value,
    //           contact: updtCnct.value,
    //           address: updtAdd.value,
    //           entryTime: updtEnTime.value,
    //           exitTime: updtExTime.value,
    //           date: updtDate.value,
    //         };

    //         visitorData[index] = obj;

    //         localStorage.setItem("visitorData", JSON.stringify(visitorData));

    //         Swal.fire({
    //           title: "Changes Saved!",
    //           text: "data has been updated!",
    //           icon: "success",
    //         });

    //         // displayData();
    //         form.reset();
    //       });
    //     });
    //   });
    // };

    // const updateData = () => {
    //   editData();
    // };

    /*add data to table*/

    // const displayData = () => {
    //   const tableBody = document.querySelector(".data");
    //   tableBody.innerHTML = "";
    //   let rowCount = 1;
    //   visitorData.forEach((visitor) => {
    //     const tableRow = document.createElement("tr");
    //     tableRow.classList.add("bodyData");

    //     tableRow.innerHTML = `<td>${rowCount++}</td>
    //                         <td>${visitor.fullName}</td>
    //                         <td>${visitor.address}</td>
    //                         <td>${visitor.entryTime}</td>
    //                         <td>${visitor.exitTime}</td>
    //                         <td>${visitor.date}</td>
    //                         <td>${visitor.contact}</td>
    //                         <td>
    //                         <button name="${visitor.fullName}"
    //                         add="${visitor.address}"
    //                         enTime="${visitor.entryTime}"
    //                         exTime="${visitor.exitTime}"
    //                         date="${visitor.date}"
    //                         cnct="${visitor.contact}"
    //                         class="btn border-none p-0 edit-btn" type="button" data-bs-toggle="modal"  data-bs-target="#exampleModal"><i class="bi bi-pencil-square"></i> </button>
    //                         <button class="btn border-none p-0 delete-btn"><i class="bi bi-trash"></i> </button>
    //                         </td>`;

    //     tableBody.appendChild(tableRow);
    //   });

    //   editData();
    //   deleteData();
    // };

    // displayData();
  } else if (window.location.pathname.endsWith("record.html")) {
    //
    const updtName = document.querySelector("#update-name");
    const updtCnct = document.querySelector("#update-cnct");
    const updtAdd = document.querySelector("#update-add");
    const updtEnTime = document.querySelector("#update-enTime");
    const updtExTime = document.querySelector("#update-exTime");
    const updtDate = document.querySelector("#update-date");

    //bootstrap api for toggling the modal
    const toggleModal = document.querySelector(".modal");
    const modalInstance =
      bootstrap.Modal.getInstance(toggleModal) ||
      new bootstrap.Modal(toggleModal);

    let visitorData = JSON.parse(localStorage.getItem("visitorData")) || [];
    console.log(visitorData);

    const formValidation = () => {
      const updtNamevalue = updtName.value;

      const hasNumber = /\d/;
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;

      if (!isNaN(updtNamevalue) && updtNamevalue.trim() !== "") {
        Swal.fire("Name can't be a number!!");
        return false;
      } else if (hasNumber.test(updtNamevalue)) {
        Swal.fire("Name shoudn't include number!!");
        return false;
      } else if (hasSpecialChar.test(updtNamevalue)) {
        Swal.fire("Name shoudn't include any special character!!");
        return false;
      } else if (updtAdd.value === "") {
        Swal.fire("please Enter your address!!");
        return false;
      } else if (updtEnTime.value === "") {
        Swal.fire("please enter, entry time!!");
        return false;
      } else if (updtDate.value === "") {
        Swal.fire(" please select date!!");
        return false;
      }

      return true;
    };

    /*delete data */
    const deleteData = () => {
      const trash = document.querySelectorAll(".delete-btn");
      const tableBody = document.querySelector(".data");
      const tableRow = document.querySelector("tr");

      trash.forEach((btn, index) => {
        btn.addEventListener("click", () => {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              visitorData.splice(index, 1);
              localStorage.setItem("visitorData", JSON.stringify(visitorData));
              displayData();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
        });
      });
    };

    /* edit date */
    const editData = () => {
      const editBtn = document.querySelectorAll(".edit-btn");
      const updtName = document.querySelector("#update-name");
      const updtCnct = document.querySelector("#update-cnct");
      const updtAdd = document.querySelector("#update-add");
      const updtEnTime = document.querySelector("#update-enTime");
      const updtExTime = document.querySelector("#update-exTime");
      const updtDate = document.querySelector("#update-date");
      let currentIndex = null;

      editBtn.forEach((btn, index) => {
        btn.addEventListener("click", () => {
          currentIndex = index;
          updtName.value = btn.getAttribute("name");
          updtAdd.value = btn.getAttribute("add");
          updtEnTime.value = btn.getAttribute("enTime");
          updtExTime.value = btn.getAttribute("exTime");
          updtDate.value = btn.getAttribute("date");
          updtCnct.value = btn.getAttribute("cnct");
        });
      });
      const updateBtn = document.querySelector(".update-btn");
      updateBtn.addEventListener("click", (e) => {
        if (formValidation()) {
          const obj = {
            fullName: updtName.value,
            contact: updtCnct.value,
            address: updtAdd.value,
            entryTime: updtEnTime.value,
            exitTime: updtExTime.value,
            date: updtDate.value,
          };

          if (currentIndex !== null) {
            visitorData[currentIndex] = obj;
            localStorage.setItem("visitorData", JSON.stringify(visitorData));

            Swal.fire({
              title: "Changes Saved!",
              text: "data has been updated!",
              icon: "success",
            });

            displayData();

            if (formValidation()) {
              updateBtn.setAttribute("data-bs-toggle", "modal");
              updateBtn.setAttribute("data-bs-target", "#exampleModal");
            }

            currentIndex = null;

            modalInstance.hide();
          }
        }
      });
    };

    /*add data to table*/

    const displayData = () => {
      const tableBody = document.querySelector(".data");
      tableBody.innerHTML = "";
      let rowCount = 1;
      visitorData.forEach((visitor) => {
        const tableRow = document.createElement("tr");
        tableRow.classList.add("bodyData");

        tableRow.innerHTML = `<td>${rowCount++}</td>
                            <td>${visitor.fullName}</td>
                            <td>${visitor.address}</td>
                            <td>${visitor.entryTime}</td>
                            <td>${visitor.exitTime}</td>
                            <td>${visitor.date}</td>
                            <td>${visitor.contact}</td>
                            <td>
                            <button name="${visitor.fullName}" 
                            add="${visitor.address}" 
                            enTime="${visitor.entryTime}" 
                            exTime="${visitor.exitTime}"
                            date="${visitor.date}"
                            cnct="${visitor.contact}" 
                            class="btn border-none p-0 edit-btn" type="button" data-bs-toggle="modal"  data-bs-target="#exampleModal"><i class="bi bi-pencil-square"></i> </button> 
                            <button class="btn border-none p-0 delete-btn"><i class="bi bi-trash"></i> </button> 
                            </td>`;

        tableBody.appendChild(tableRow);
      });
      editData();
      deleteData();
    };

    displayData();
  }
});
