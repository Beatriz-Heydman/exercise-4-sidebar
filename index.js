const sidebarContainer = document.querySelector(".sidebar_container");

function handleSidebar() {
  if (sidebarContainer.style.right !== "0px") {
    sidebarContainer.style.right = "0px";
  } else {
    sidebarContainer.style.right = "-350px";
  }
}
