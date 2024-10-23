let data = [];
const userId = new URLSearchParams(window.location.search).get('id'); // Assuming the parameter is ?id=xxx
console.log(userId);

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
        document.getElementById('backButton').addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default anchor behavior
        
            // Set the href attribute with the dynamic ID
            const newHref = `./index.html?id=${userId}`;
            this.href = newHref;
        
            // Optionally, navigate to the new URL if you want to follow the link
            window.location.href = newHref;
        });
        if (data[i]?.id === userId) {
            console.log(data[i]?.certificateId, data[i]);
            document.querySelector("#certificateId").innerHTML = data[i]?.value?.certificateId;
            document.querySelector("#name").innerHTML = data[i]?.value?.name;
            document.querySelector("#completedOn").innerHTML = data[i]?.value?.completedOn;
            document.querySelector("#expireOn").innerHTML = data[i]?.value?.expireOn;
            document.querySelector("#program").innerHTML = data[i]?.value?.program;
            document.querySelector("#provider").innerHTML = data[i]?.value?.provider;
            document.querySelector("#status").innerHTML = data[i]?.value?.status;
        }
    }
  })
  .catch((error) => {
    console.error('There was a problem with the fetch operation:', error);
  });