export function createButton(iconClass, btnClass) {
  const button = document.createElement("button");
  button.classList.add(...btnClass.split(" "), "text-white", "p-2", "rounded");
  const icon = document.createElement("i");
  icon.className = iconClass;
  button.appendChild(icon);
  return button;
}
