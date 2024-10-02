document
  .querySelector(".form__file-upload-input")
  .addEventListener("change", function (e) {
    const fileName = e.target.files[0]
      ? e.target.files[0].name
      : "Файл не выбран";
    document.querySelector(".form__file-upload-btn").textContent = fileName;
  });
