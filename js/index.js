function showMenu(id, event_id) {
  const element = document.getElementById(id);
  const eventElement = document.getElementById(event_id);
  
  if (element) { // Check if element exists
    if (element.style.display === "none") { // "none" should be a string
      element.style.display = "inline-flex ! important";
      eventElement.style.display = "none";
      
    } else {
      element.style.display = "none";
      eventElement.style.display = "block";
    }
  } else {
    console.error(`Element with id "${id}" not found`);
  }
}