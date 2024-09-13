# Blending JS
Blending JS make your javascript code blend with the html easily

## Installation
Just include this cdn library to your code:
```html
  <script src="https://cdn.jsdelivr.net/gh/idevsemarang/blendingjs@main/main.js"></script>
```

## Blend per section
Assume you have this tag with class .header, set variable {%idev_YOUR_VARIABLE_NAME%} for example:
```html
  <div class="header">
      <h3>Newton's Second Law</h3>
      <span>By {%idev_yourName%}</span>
  </div>
```
For the javascript, just fill the variable with content you want 
```html
  idBlend(".header").qSection({yourName : "Jokodon"})
```

## Blend Loop
Assume you have loop content such as table, li, and many more for example:
```html
    <table id="table-post">
        <thead>
            <tr>
                <th>NO</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{%idev_number%}</td>
                <td>{%idev_title%}</td>
                <td>{%idev_body%}</td>
            </tr>
        </tbody>
    </table>
```

For the javascript, just fill the variable with content you want 
```html
        const tbodySelector = document.querySelector('#table-post tbody');
        const trSelector = document.querySelector('#table-post tbody tr');
        const trSection = trSelector.outerHTML

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'GET',
        }).then(response => {
            if(response.ok){
                return response.json();  
            }
            throw new Error('Request failed!');
        }, networkError => {
            console.log(networkError.message);
        }).then(jsonResponse => {
            let inumb = 1;
            let newTrSection = ""
            jsonResponse.forEach((data) => {
                newTrSection += trSection.idBlendParams({
                    number: inumb,
                    title: data.title,
                    body: data.body
                });
                inumb++
            })
            tbodySelector.innerHTML = newTrSection;
            tbodySelector.classList.remove("skeleton-blur")
        })
```
