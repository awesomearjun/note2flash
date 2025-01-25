const form: HTMLFormElement = document.querySelector("#inputForm") as HTMLFormElement;

form.addEventListener("submit", (event: any) => {
    event.preventDefault();

    const input: HTMLTextAreaElement = document.querySelector("#textInput") as HTMLTextAreaElement;

    if (input.value.trim() == "") {
        alert("Please enter notes or information in the text area");
    }
});