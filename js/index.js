function showMenu(id, event_id, showable) {
  const element = document.getElementById(id);
  const eventElement = document.getElementById(event_id);
  const toshow = document.getElementById(showable);
  
  if (element) { // Check if element exists
    if (element.style.display === "none") { // "none" should be a string
      element.style.display = "inline-flex";
      eventElement.style.display = "none";
      toshow.style.display = "inline-flex";
      
    } else {
      element.style.display = "none";
      eventElement.style.display = "block";
      toshow.style.display = "none";
    }
  } else {
    console.error(`Element with id "${id}" not found`);
  }
}