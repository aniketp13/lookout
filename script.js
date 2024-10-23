let data = [];
const userId = new URLSearchParams(window.location.search).get('id'); // Assuming the parameter is ?id=xxx
const dynamicIdInput = document.getElementById('certificateId');

function updateLink() {
    const dynamicId = dynamicIdInput.value;
    searchButton.href = `./certificate.html?id=${dynamicId}`;
}

if (!dynamicIdInput.value) {
    searchButton.href = `./certificate.html?id=${userId}`;
}

dynamicIdInput.addEventListener('input', updateLink);


fetch('./data.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((result) => {
    data = result;
    for (let i = 0; i < data?.length; i++) {
        data[i]?.id === userId;
         // Function to update the link
        if (data[i]?.id === userId) {
            document.querySelector(".certificateId").value = userId;
            if (!dynamicIdInput?.value) {
                document.getElementById('searchButton').addEventListener('click', function (event) {
                    event.preventDefault(); // Prevent the default anchor behavior
                
                    // Set the href attribute with the dynamic ID
                    const newHref = `./certificate.html?id=${userId}`;
                    this.href = newHref;
                    window.location.replace(self.URL + `?id=${userId}`);
                
                    // Optionally, navigate to the new URL if you want to follow the link
                    window.location.href = newHref;
                });
            }
        }
    }
  })
  .catch((error) => {
    console.error('There was a problem with the fetch operation:', error);
  });