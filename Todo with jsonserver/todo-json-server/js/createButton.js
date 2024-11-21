export function createButton(iconClass, btnClass) {
  const button = document.createElement("button");
  button.className = `${btnClass} text-white p-2 rounded`; // Concatenating class names in one line
  const icon = document.createElement("i");
  icon.className = iconClass;
  button.append(icon); // Directly appending the icon element
  return button;
}
