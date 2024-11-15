// script.js

// Function to load the right panel content
function loadRightPanel() {
    fetch('rightpanel.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.error('Error loading right panel:', error));
}

// Function to load content based on selected item
function loadContent(item) {
    const contentPanel = document.getElementById('content');

    // Update right panel content
    switch(item) {
        case '/web/':
            const iframe = document.createElement('iframe');
            iframe.src = '/web/index.html'; 
            iframe.style.width = '100%'; 
            iframe.style.height = '100%'; 
            iframe.style.border = 'none'; 

            // Clear existing content and add the iframe
            contentPanel.innerHTML = ''; 
            contentPanel.appendChild(iframe); 
            break;

        default:
            loadRightPanel(); // Load the default right panel content
            break;
    }
}
// Function to handle navigation and push state to history
function navigateTo(item) {
    // Update content based on item
    loadContent(item);
    
    // Update the URL without reloading the page (using pushState)
    history.pushState({ item: item }, null, `${item}`);
    
    // Set the active menu item
    setActiveMenuItem(item);
}

// Adding a state to the history
function addState() {
    history.pushState({ key: 'value' }, 'Title', 'new-url');
}

// Event when navigating back
window.onpopstate = function(event) {
    if (event.state) {
        // Handle state data if needed
        console.log(event.state);
    }
};

// Set the active menu item based on the selected item
function setActiveMenuItem(item) {
    const menuItems = document.querySelectorAll('.left-panel a');
    menuItems.forEach(menuItem => menuItem.classList.remove('active'));
    
    const activeItem = Array.from(menuItems).find(el => el.textContent.includes(item.replace('item', 'Item')));
    if (activeItem) {
        activeItem.classList.add('active');
    }
}

// Event to handle back/forward navigation
window.addEventListener('popstate', function(event) {
    const item = event.state ? event.state.item : null;
    if (item) {
        loadContent(item);
        setActiveMenuItem(item);
    } else {
        loadContent(null);
    }
});

// Handle initial load based on URL hash (if any)
window.addEventListener('load', function() {
    const initialItem = location.hash ? location.hash.substring(1) : null;
    if (initialItem) {
        loadContent(initialItem);
        setActiveMenuItem(initialItem);
    }
});

// Function to update the visit count
function updateVisitCount() {
    let visitCount = localStorage.getItem('visitCount') || 0;
    visitCount++;
    localStorage.setItem('visitCount', visitCount);
    document.getElementById('visitCount').innerText = visitCount;
}

// Function to reset the visit count
/*function resetVisitCount() {
    localStorage.setItem('visitCount', 0);
    document.getElementById('visitCount').innerText = 0;
}*/

// Function to add focus and blur styles to links
function addLinkFocusBlurEffects() {
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('focus', () => {
            link.style.textDecoration = 'underline'; // Underline on focus
        });

        link.addEventListener('blur', () => {
            link.style.textDecoration = 'none'; // Remove underline on blur
        });
    });
}

// Call the function to update visit count when the page loads
window.onload = () => {
    updateVisitCount();
    addLinkFocusBlurEffects(); // Add focus and blur effects
};

// Add event listener to reset button
/* document.getElementById('resetButton').addEventListener('click', resetVisitCount); */

