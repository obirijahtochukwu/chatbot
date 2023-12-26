export const handleCopy = (url: string) => {
  navigator.clipboard
    .writeText(url)
    .then(() => alert("Text copied to clipboard!"))
    .catch((error) => console.error("Could not copy text: ", error));
};
